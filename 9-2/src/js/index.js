import React from 'react';
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {setAgree} from "./../redux/actions"

import InfoReduce from './../redux/InfoReduce'


let store=createStore(InfoReduce,applyMiddleware(thunk));

class InfoDetail extends React.Component
{
    componentWillMount()
    {
        this.props.Store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    addClick(){
        // this.props.Store.dispatch({
        //     type:"INFO_ADDCLICK",
        //     num:10
        // });
        this.props.Store.dispatch(setAgree(101))

    }
    constructor()
    {
        super();


    }


    render()
    {
        return <div>
            <h2>news title:{this.props.Store.getState().title}</h2>
            <span>Present Like:{this.props.Store.getState().agreeNum}</span>
            <div>
                <button onClick={this.addClick.bind(this)}>Like</button>
            </div>
        </div>
    }
}

ReactDOM.render(
    <InfoDetail Store={store}/>,
    document.getElementById('root')
);