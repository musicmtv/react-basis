import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import InfoReduce from './../redux/InfoReduce'
let store=createStore(InfoReduce);

class InfoDetail extends React.Component
{
    addClick(){
        store.dispatch({
            type:"INFO_ADDCLICK"
        });
        this.setState({
            infoData: store.getState()
        })
    }
    constructor()
    {
        super();
        this.state= {
            infoData: store.getState()
        }

    }


    render()
    {
        return <div>
            <h2>news title:{this.state.infoData.title}</h2>
            <span>click:{this.state.infoData.clicknum}</span>
            <div>
                <button onClick={this.addClick.bind(this)}>change click</button>
            </div>
        </div>
    }
}

ReactDOM.render(
    <InfoDetail />,
    document.getElementById('root')
);