import React from 'react';
import ProductTopList from './ProductTopList';
import NewsTopList from './NewsTopList';
import { HashRouter as Router, Route, Link,Redirect } from "react-router-dom"
import InfoDetail from './InfoDetail'
import UserLogin from './UserLogin'
import Passport from './../core/Passport'

let passport=new Passport();
export default class MyRouter extends React.Component
{
    render()
    {
        return  <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={ProductTopList} />
                <Route path="/product" component={ProductTopList} />
                <Route exact path="/news" render={(props)=>{
                    if(passport.islogin)// 已经登陆
                    {
                        return <NewsTopList {...props}/>
                    }else//没有登陆
                    {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/news/:newsid" component={InfoDetail} />
                <Route path="/login" render={(props)=>{
                    return <UserLogin passport={passport} {...props}/>
                }} />
            </div>
        </Router>
    }
}