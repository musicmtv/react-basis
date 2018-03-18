import {call,put,takeEvery,select,take} from 'redux-saga/effects'
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

export function* UserSagaNew() {
    const action=yield take("USER_LOGIN");
    yield put({type:"ACTION",btn:true});//让我们的按钮 不可用
    const {token}=yield call(function* () {
        const {userName,password}=yield select();
        return yield call(UserApi.userLogin,userName,password);

    });

    if(token && token!=="none")
    {
        yield put({type:"LOGIN_SUCCESS"});
        const {level}=yield call(UserApi.getUserLevel,token);
        if(level && level!=="none")
        {
            yield put({type:"UPDATE_USERLEVEL",level});
        }
        else
            yield put({type:"UPDATE_USERLEVEL",level:"level error"});
    }
    else{
        yield put({type:"LOGIN_ERROR"});

    }
    yield put({type:"ACTION",btn:false});//让我们的按钮 可用


}