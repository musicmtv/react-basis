
let info={
    title:"test news title",
    agreeNum:0
}
export default (state=info,action)=>
{
    if(action.type==="INFO_ADDCLICK")
    {
        let oldNum=state.agreeNum;
        oldNum=action.num;
        return Object.assign({},state,{agreeNum:oldNum})
    }
    return state;
}