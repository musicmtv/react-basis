<?php
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$result=new stdClass();
$result->level="none";
if(isset($_GET["token"]) && $_GET["token"]=="asfdasdfas")
{
    $result->level="level vip";

}

header("content-type:application/json");
exit(json_encode($result));

?>