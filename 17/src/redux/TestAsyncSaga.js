
import axios from 'axios'
import {call,put,takeEvery,select,take,fork,cancel,cancelled} from 'redux-saga/effects'

class ReviewAPI
{
    static loadReview()
    {
        return axios.get("http://localhost/react/review.php")
            .then((res)=>{
                return res.data
            })
    }
    static postReview(content)
    {
        return axios.get("http://localhost/react/review.php?review="+content)
            .then((res)=>{
                return res.data
            })
    }
}

export function* TestAsyncSaga() {

    while (true){
        const action=yield take("REVIEW_LOAD");
        const result=yield call(ReviewAPI.loadReview);
        yield put({type:"REVIEW_LOAD_SUCCESS",reviewData:result})
    }

}

function* add_review() {
    const {content}=yield select();
    const result=yield call(ReviewAPI.postReview,content);
    yield put({type:"REVIEW_LOAD_SUCCESS",reviewData:result})
}
export function* TestAsyncSagaPost() {

    while (true){
        const action=yield take("REVIEW_POST");
        yield call(add_review);

    }

}