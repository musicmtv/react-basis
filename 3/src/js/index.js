import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

let me_params=[{
    name:"lis",
    age:166
},{
    name:"lis2",
    age:16
}
]
class Me extends React.Component
{
    constructor(props)
    {
        super(props);
        this.loadingbox=[];
        this.state={
            users:[],
            leader:""
        }
    }
    showLoading(isshow)
    {
        let display=isshow?"block":"none";
        this.loadingbox.forEach((item)=>{
            item.style.display=display;
        })
    }
    componentWillMount()
    {
        this.showLoading(true);
        axios.get("http://localhost/react/team.php")
            .then((res)=>{
                this.setState({
                    leader:res.data.leader,
                    users:res.data.teammates
                })
                this.showLoading(false)
            })
    }
    render()
    {
        return <div>
            <h1>team</h1>
            <span ref={(span)=>{
                this.loadingbox.push(span)
            }}>loading....</span>
            <h2>{this.state.users.map(
                (item)=>{
                    return <h2>{item.name}:{item.age}</h2>
                }
            )}</h2>
            <input type="button" value="change" onClick={()=>{
                let getState=this.state.users;
                getState[0].name="wangliu";
                getState[0].age="36";
                this.setState({
                    users:getState
                })
                // this.forceUpdate();
            }
            }/>
        </div>
    }
}

ReactDOM.render(
    <Me users={me_params}/>,
    document.getElementById('root')
);