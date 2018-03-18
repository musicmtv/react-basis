import React from 'react';
import Passport from './../core/Passport'


export default class UserLogin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            userName:"",
            userPass:""
        }
    }
    setUserInfo(event,key)
    {
        let temp=event.target.value;
        let obj={};
        obj[key]=event.target.value;
        this.setState(obj);
    }
    render()
    {
        return <div>
            <h3>这是登录界面</h3>
            <div>
                <span>用户名:</span>
                <span><input type="text" onChange={(event)=>{
                    this.setUserInfo(event,"userName")
                }}/></span>
            </div>

            <div>
                <span>密  码:</span>
                <span><input type="password" onChange={(event)=>{
                    this.setUserInfo(event,"userPass")
                }}/></span>
            </div>

            <div>
                <button onClick={()=>{
                    let p=this.props.passport==null?new Passport():this.props.passport;
                    p.ulogin(this.state.userName,this.state.userPass,()=>{

                        this.props.history.push("/news");
                    });

                }}>登录</button>

            </div>

        </div>

    }
}