<?php
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$redis = new Redis();
$redis->connect("127.0.0.1",6379);

function sendReview($content)
{

    global $redis;
    $redis->lpush("newsreview",$content);
    return $redis->lrange("newsreview",0,10);//只取前10条


}
header("content-type:application/json");
if(isset($_GET["review"]) && trim($_GET["review"])!="") //为了简化演示，用GET的方式
{

    $result=sendReview($_GET["review"]);

    exit(json_encode($result));

}
else
{
    $result=$redis->lrange("newsreview",0,10);
    exit(json_encode($result));
}



?>