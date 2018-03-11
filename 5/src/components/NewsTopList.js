import React from "react";
import axios from "axios";
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
                        <a href="">{item.title}</a>
                    </div>
                    <div className="newsdes">{item.desc}</div>
                </dd>
            })}

        </dl>
    }
}