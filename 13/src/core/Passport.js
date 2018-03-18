
export default class Passport
{
    constructor()
    {
        this.islogin=false;
    }
    ulogin(uname,upass,callback)
    {
        if(uname==="james" && upass==="123")
        {
            this.islogin=true;
            callback();
        }
        else
        {
            alert("fail");
        }
    }
}