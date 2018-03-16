
let info={
    title:"test news title",
    agreeNum:0
}
export default (state=info,action)=>
{
    if(action.type==="INFO_ADDCLICK")
    {
        return Object.assign({},state,{agreeNum:action.num})
    }
    return state;
}