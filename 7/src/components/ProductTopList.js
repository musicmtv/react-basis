import React from "react";
import axios from "axios";
export default class ProductTopList extends React.Component
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
        axios.get("http://localhost/react/toplist.php")
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
                    <a href="">{item.prodName}</a>
                </dd>
            })}

        </dl>
    }
}