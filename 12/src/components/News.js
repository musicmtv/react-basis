import React from "react";
import axios from "axios/index";
import Agree from "./Agree"
export default class News extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            agreeNum:0
        }
    }
    agreeSubmit()
    {
        axios.post("http://localhost/react/news.php",
            "newsid="+this.props.newsid
        )
            .then(
                (res)=>{
                    this.setState({
                        agreeNum:res.data.agree
                    })
                }
            )
    }

    componentWillMount()
    {
        axios.get("http://localhost/react/news.php",{
            params:{
                newsid:this.props.newsid
            }
        })
            .then((res)=>{
                this.setState({
                    agreeNum:res.data.agree
                })
            })
    }
    render()
    {
        return <div>
            <h1>这是一篇新闻,新闻id是101</h1>
            <div><Agree agreeNum={this.state.agreeNum}/></div>
            <div>
                <input type="button" value="我要点赞" onClick={this.agreeSubmit.bind(this)}/>
            </div>
        </div>
    }
}