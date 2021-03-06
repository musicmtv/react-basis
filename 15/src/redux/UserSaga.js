import {call,put,takeEvery,select,take,fork,cancel,cancelled} from 'redux-saga/effects'
import axios from 'axios'



class UserApi
{
    static userLogin(user_name,user_pass)
    {
        return axios.post("http://localhost/react/user.php",
            "user_name="+user_name+"&user_pass="+user_pass)
            .then((res)=>{
                return res.data;//返回和后端交互的字段值
            })
    }

    static getUserLevel(token)
    {
        return axios.get("http://localhost/react/userlevel.php?token="+token)
            .then((res)=>{
                return res.data;
            })
    }
}
function* user_login(action)
{
    yield put({type:"ACTION",btn:true});
    const getUserName =yield select(state=>state.userName);
    const getUserPass =yield select(state=>state.password);
    // const getState = yield select();
    const result =yield call(UserApi.userLogin,getUserName,getUserPass);
    alert(result.status);
    yield put({type:"ACTION",btn:false})
}
export function* UserSaga(){

    yield takeEvery("USER_LOGIN",user_login);
}
// --------------------------------------------------------------------
function* userLogin() {
    try {


        const {userName, password} = yield select();
        const {token} = yield call(UserApi.userLogin, userName, password);

        // const {token}=yield call(function* () {
        //     const {userName,password}=yield select();
        //     return yield call(UserApi.userLogin,userName,password);
        //
        // });

        if (token && token !== "none") {
            yield put({type: "LOGIN_SUCCESS"});
            yield call(getUserLevel, token);

        }
        else {
            yield put({type: "LOGIN_ERROR"});

        }
    }catch (e){

    }finally{
        if(yield cancelled())
            yield put({type:"UPDATE_USERLEVEL",level:"cancel level "});
    }
}

function* getUserLevel(token) {
    const {level}=yield call(UserApi.getUserLevel,token);
    if(level && level!=="none")
    {
        yield put({type:"UPDATE_USERLEVEL",level});
    }
    else
        yield put({type:"UPDATE_USERLEVEL",level:"level error"});
}


export function* UserSagaNew() {
    while (true){
        const action=yield take("USER_LOGIN");
        yield put({type:"ACTION",btn:true});//让我们的按钮 不可用
        // yield call(userLogin);
        const task=yield fork(userLogin);//async

        yield take("LOGIN_OUT");//触发注销
        if(task){
            yield cancel(task);
        }
        yield put({type:"LOGIN_OUT_DOWN"});


        yield put({type:"ACTION",btn:false});//让我们的按钮 可用
    }



}