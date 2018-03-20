
export default (state={btn:false,islogin:false,mylevel:""},action)=>
{
    if(action.type==="UPDATE_USERFORM")
    {
        return Object.assign({},state,action.Form);
    }

    if(action.type==="ACTION")
    {
        return Object.assign({},state,{btn:action.btn});
    }

    if(action.type==="LOGIN_SUCCESS")
    {
        return Object.assign({},state,{islogin:true});
    }

    if(action.type==="LOGIN_OUT_DOWN")
    {
        return Object.assign({},state,{islogin:false});
    }

    if(action.type==="LOGIN_ERROR" )
    {
        return Object.assign({},state,{islogin:false});
    }
    if(action.type==="UPDATE_USERLEVEL")
    {
        return Object.assign({},state,{mylevel:action.level});
    }
    return state;
}