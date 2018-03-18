import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'
import TestReduce from './../redux/TestReduce'
let store=createStore(TestReduce);


class Test extends React.Component
{
    render()
    {
        const {count,addInput}=this.props;
        let listInput=()=>{
            let result=[];
            for(let i=1;i<=count;i++)
            {
                result.push(
                    <div key={i}>
                        <span>input:</span>
                        <span><input type="text"/></span>
                    </div>
                )
            }
            return result;
        };
        return <div>
            {listInput()}
            <div>
                <input type="button" onClick={addInput} value="ADD"/>
            </div>
        </div>
    }
}

function  mapStateToProps(state) {
    return {
        count:state.count
    }
    
}

function mapDispatchToProps(dispatch) {
    return{
        addInput:()=>{
            dispatch({type:"ADD"})
        }
    }
    
}
const App=connect(mapStateToProps,mapDispatchToProps)(Test);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);