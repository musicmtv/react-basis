import React from 'react';
import ProductTopList from './ProductTopList';
import NewsTopList from './NewsTopList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InfoDetail from './InfoDetail'


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
                </ul>

                <hr />

                <Route exact path="/" component={ProductTopList} />
                <Route path="/product" component={ProductTopList} />
                <Route exact path="/news" component={NewsTopList} />
                <Route path="/news/:newsid" component={InfoDetail} />
            </div>
        </Router>
    }
}