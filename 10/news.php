<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$redis = new Redis();
$redis->connect("127.0.0.1", 6379);

function agree($newsid) {
    global $redis;
    $get_num = $redis->hget("newsagree", "news".$newsid);

    if ($get_num)
        $get_num++;
    else
        $get_num = 1;

    $redis->hset("newsagree", "news".$newsid, $get_num);
    return $get_num;
}

function getAgree($newsid) {
    global $redis;
    $get_num = $redis->hget("newsagree", "news".$newsid);

    if($get_num)
        return $get_num;
    else
        return 0;
}


// 代表点赞, 要为新闻的点赞数++
if (isset($_POST["newsid"])) {
    $agreeNum = agree($_POST["newsid"]);
    $arr = array("status" => "success", "agree" => $agreeNum);
    $strjson = json_encode($arr);
    exit($strjson);
}

// 代表获取新闻点赞数
if (isset($_GET["newsid"])) {
    $agreeNum = getAgree($_GET["newsid"]);
    $arr = array("agree" => $agreeNum);
    $strjson = json_encode($arr);
    exit($strjson);
}

exit("");