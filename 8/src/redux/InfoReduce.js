
let info={
    title:"test news title",
    clicknum:0
}
export default (state=info,action)=>
{
    if(action.type==="INFO_ADDCLICK")
    {
        let oldNum=state.clicknum;
        oldNum++;
        return Object.assign({},state,{clicknum:oldNum})
    }
    return state;
}