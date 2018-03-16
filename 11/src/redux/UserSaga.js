import {call,put,takeEvery,select} from 'redux-saga/effects'
import axios from 'axios'



class UserApi
{
    static userlogin(user_name,user_pass)
    {
        return axios.post("http://localhost/react/user.php",
            "user_name="+user_name+"&user_pass="+user_pass)
            .then((res)=>{
                return res.data;//返回和后端交互的字段值
            })
    }
}
function* user_login(action)
{
    yield put({type:"ACTION",btn:true});
    const getUserName =yield select(state=>state.userName);
    const getUserPass =yield select(state=>state.password);
    // const getState = yield select();
    const result =yield call(UserApi.userlogin,getUserName,getUserPass);
    alert(result.status);
    yield put({type:"ACTION",btn:false})
}
export function* UserSaga(){

    yield takeEvery("USER_LOGIN",user_login);
}