left teammates=[
    {
        name:"list",
        age:15
    },
    {
        name:"list2",
        age:18
    }
];
class Team extends React.Component
{
    constructor()
    {
        super();
        this.state={
            teammates:props.teammates
        }

    }
    render()
    {
        return <div>
            <h1>Team</h1>
            {this.props.user.map((item)=>{
                return <div>
                    {item.name} : {item.age}
                </div>
            })
            }
            <h1>team product</h1>
            <div>
                <input type="button" value="CHANGE" onClick={()=>{
                    let getState=this.state.teammates;
                    getState[0].name="wangliu";
                    this.setState({
                        teammates:getState
                    });
                    this.props.teammates[0].name="wangwu";
                    alert(this.props.teammates[0].name);
                    this.setState();

                }}/>
            </div>
        </div>
    }
}
ReactDOM.render(
    <Team teammates={teammates} leader="sss" />,
    document.getElementById('root')
);
axios.get('ss.php')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });