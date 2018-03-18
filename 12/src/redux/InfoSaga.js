import {call,put,takeEvery} from 'redux-saga/effects'


import axios from "axios"


class InfoApiClass
{
    static setAgreeAjax(newsid)
    {
        return axios.post("http://localhost/react/news9.php",
            "newsid="+newsid)
            .then((res)=>{
                return res.data.agree;//返回和后端交互的字段值
            })
    }
}
function* setAgreeFunc(action) {
    let getAgree = yield call(InfoApiClass.setAgreeAjax,action.newsid);
    yield put({type:"INFO_ADDCLICK",num:getAgree});//dispatch
}

export function* InfoSaga(){
    yield takeEvery("setagree",setAgreeFunc)
}