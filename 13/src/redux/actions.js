
import axios from "axios"

export let setAgree=function (newsid)
{
    return function (dispatch,getState) {
        axios.post("http://localhost/react/news9.php",
            "newsid="+newsid)
            .then((res)=>{
                dispatch(InfoAction.getAgree(res.data.agree));
            })

    }
}

class InfoAction
{
    static getAgree(num)
    {
        return {
            type:"INFO_ADDCLICK",
            num:num
        }
    }
}