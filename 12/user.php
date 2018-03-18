<?php
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
sleep(1);
$result=new stdClass();
$result->message="error username or password";
$result->status="error";
$result->token="none";
if(isset($_POST["user_name"]) && isset($_POST["user_pass"]))
{
    $get_userName=$_POST["user_name"];
    $get_userPass=$_POST["user_pass"];
    if($get_userName=="shenyi" && $get_userPass=="123")
    {
        $result->message="login success";
        $result->status="success";
        $result->token="asfdasdfas";
    }

}

header("content-type:application/json");
exit(json_encode($result));

?>