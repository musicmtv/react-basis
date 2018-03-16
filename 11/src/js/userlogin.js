import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware } from 'redux'

import createSaga from 'redux-saga'
import UserReduce from "./../redux/UserReduce"
import {UserSaga} from './../redux/UserSaga'
let saga = createSaga();

let store =createStore(UserReduce,applyMiddleware(saga));
saga.run(UserSaga);

class UserLogin extends React.Component
{
    componentWillMount()
    {
        this.props.Store.subscribe(()=>{
            this.forceUpdate();
        });
    }
    constructor()
    {
        super();

    }
    userSubmit()
    {
        this.props.Store.dispatch({type:"USER_LOGIN"});
    }
    textChang(e,key)
    {
        let updater={};
        updater[key]=e.target.value;
        this.props.Store.dispatch({type:"UPDATE_USERFORM",Form:updater});
    }
    render()
    {

        return <div>
            <h2>User Login</h2>
            <div>
                <span>User</span>
                <span><input type="text" onChange={(event)=>{
                    this.textChang(event,"userName")
                }}/></span>
            </div>
            <div>
                <span>Password</span>
                <span><input type="text" onChange={(event)=>{
                    this.textChang(event,"password")
                }}/></span>
            </div>
            <button disabled={this.props.Store.getState().btn} onClick={this.userSubmit.bind(this)}>Submit</button>
        </div>
    }
}

ReactDOM.render(
    <UserLogin Store={store}/>,
    document.getElementById('root')
);