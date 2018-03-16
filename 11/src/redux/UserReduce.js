
export default (state={btn:false},action)=>
{
    if(action.type==="UPDATE_USERFORM")
    {
        return Object.assign({},state,action.Form);
    }

    if(action.type==="ACTION")
    {
        return Object.assign({},state,{btn:action.btn});
    }
    return state;
}