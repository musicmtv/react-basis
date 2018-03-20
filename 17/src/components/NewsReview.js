import React from 'react'
import ReactDOM from 'react-dom'
import createSaga from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'


// import {TestAsyncSaga,TestAsyncSagaPost} from './../redux/TestAsyncSaga'
//
// let saga=createSaga();
// let store=createStore(ReviewReduce,applyMiddleware(saga));
// saga.run(TestAsyncSaga);
// saga.run(TestAsyncSagaPost);
class TestReviewList extends React.Component
{

    componentWillMount()
    {
        const {loadReview}=this.props;
        loadReview();
    }
    render()
    {
        const {textChange,reviewList,postReview}=this.props;
        return <div>
            <p className="newscontent">
                Content
            </p>
            <h2>comment</h2>
            <dl>
                <dt>input review content</dt>
                <dd>
                    <textarea className="review" onChange={(e)=>{
                        textChange(e)
                    }}/>
                </dd>
                <dd>
                    <input type="button" value="submit" className="cmd" onClick={postReview}/>
                </dd>
            </dl>
            <h3>Review</h3>
            <ul>
                {reviewList.map((item)=>{
                    return <li key={item}>
                        {item}
                    </li>
                })}

            </ul>

        </div>
    }
}

function mapStateToProps(state) {
    return {
        reviewList:state.ReviewReduce.rlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        textChange:(e)=>{
            dispatch({type:"REVIEW_CONTENT_CHANGE",content:e.target.value})
        },
        loadReview:()=>{
            dispatch({type:"REVIEW_LOAD"})
        },
        postReview:()=>{
            dispatch({type:"REVIEW_POST"})
        }
    }
}

const App=connect(mapStateToProps,mapDispatchToProps)(TestReviewList);

export default App;