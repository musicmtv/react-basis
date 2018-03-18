import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'
import axios from "axios"
import AsyncReduce from './../redux/AsyncReduce'



let store=createStore(AsyncReduce,applyMiddleware(thunk));

function NewsThunk() {
    return function (dispatch,state) {
        axios.get('http://localhost/react/newslist.php')
            .then((res)=>{
                dispatch({type:"GET_NEWS",getNewsData:res.data})
            });
    }
}
class TestNewList extends React.Component
{
    componentWillMount()
    {
        const {loadNews}=this.props;
        loadNews();
    }
    render()
    {
        const {getNewsList}=this.props;
        return <div>
            <h2>news list</h2>
            <ul>
                {getNewsList.map((item)=>{
                    return <li key={item.newsid}>
                            {item.title}
                    </li>
                })}

            </ul>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        getNewsList:state.newslist
    }

}

function mapDispatchToProps(dispatch) {
    return {
        loadNews:()=>{
            dispatch(NewsThunk())
        }
    }
}

const App=connect(mapStateToProps,mapDispatchToProps)(TestNewList);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);