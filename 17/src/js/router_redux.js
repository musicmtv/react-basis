import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import {Route,Link} from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSaga from 'redux-saga'
import NewsList from './../components/NewsList'
import NewsReview from './../components/NewsReview'
import axios from 'axios'
import {call,put,select,takeEvery,take,fork,cancel,cancelled} from 'redux-saga/effects'


//-----------reduce
function ReviewReduce(state={content:"",rlist:[]},action) {
    if(action.type==="REVIEW_CONTENT_CHANGE"){
        return Object.assign({},state,{content:action.content})
    }
    if(action.type==="REVIEW_LOAD_SUCCESS"){
        return Object.assign({},state,{rlist:action.reviewData})
    }

    return state;
}
function NewsReduce(state={newslist:[]},action) {
    if(action.type==="GET_NEWS")
    {
        let count=state.count;
        count++;
        return Object.assign({},state,{newslist:action.getNewsData})
    }

    return state;

}
//----------reduce

//-------------saga

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
    const {ReviewReduce}=yield select();
    const result=yield call(ReviewAPI.postReview,ReviewReduce.content);
    yield put({type:"REVIEW_LOAD_SUCCESS",reviewData:result})
}
export function* TestAsyncSagaPost() {

    while (true){
        const action=yield take("REVIEW_POST");
        yield call(add_review);

    }

}
//-------------saga



const history = createHistory();
const middleware = routerMiddleware(history);










let saga=createSaga();


const store = createStore(
    combineReducers({
        NewsReduce,
        ReviewReduce,
        router: routerReducer
    }),
    applyMiddleware(middleware,thunk,saga)
);
saga.run(TestAsyncSaga);
saga.run(TestAsyncSagaPost);

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News List</Link></li>
                    <li><Link to="/review">News Review</Link></li>
                </ul>
                <Route exact path="/" component={NewsList}/>
                <Route path="/news" component={NewsList}/>
                <Route path="/review" component={NewsReview}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

















