import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import InfoReduce from './../redux/InfoReduce'
let store=createStore(InfoReduce);

class InfoDetail extends React.Component
{
    componentWillMount()
    {
        this.props.Store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    addClick(){
        this.props.Store.dispatch({
            type:"INFO_ADDCLICK"
        });

    }
    constructor()
    {
        super();


    }


    render()
    {
        return <div>
            <h2>news title:{this.props.Store.getState().title}</h2>
            <span>click:{this.props.Store.getState().clicknum}</span>
            <div>
                <button onClick={this.addClick.bind(this)}>change click</button>
            </div>
        </div>
    }
}

ReactDOM.render(
    <InfoDetail Store={store}/>,
    document.getElementById('root')
);