import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
export default class NewsTopList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            dataList:[]
        }
    }
    componentWillMount()
    {
        axios.get("http://localhost/react/toplist.php?type=news")
            .then((response)=>{
                this.setState({
                    dataList:response.data
                })
            })
    }
    render()
    {
        return <dl>
            <dt>商品排行榜</dt>
            {this.state.dataList.map((item)=>{
                return <dd>
                    <div>
                        <Link to={"news/"+item.newsid}>{item.title}</Link>
                    </div>
                    <div className="newsdes">{item.desc}</div>
                </dd>
            })}

        </dl>
    }
}