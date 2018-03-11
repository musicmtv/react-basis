 import React from "react";

export default class Agree extends React.Component
{
    render()
    {
        return <div>
            点赞数: <span>{this.props.agreeNum}</span>
        </div>
    }
}