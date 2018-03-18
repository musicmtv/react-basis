import React from 'react';


export default class extends React.Component
{
    render()
    {
        return <div>
            <h2>this is news detail</h2>
            <div>ID:{this.props.match.params.newsid}</div>
        </div>
    }
}