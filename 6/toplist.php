<?php

 // 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:GET');  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
 $Server_URL=$_SERVER["HTTP_HOST"];
$news=
'[{"newsid":"101","pubtime":"2016-10-02","title":"QFix 探索之路 —— 手Q热补丁轻量级方案 ","desc":"QFix是手Q团队近期推出的一种新的Android热补丁方案，在不影响App运行时性能（无需插桩去preverify）的前提下有效地规避了","isdeleted":false,"image":"$Server_URL/images/java.jpg"},'
.'{"newsid":"102","pubtime":"2016-10-01","title":"大规模排行榜系统实践及挑战 ","desc":" 如何支持业务接近接入，数万乃至几十万级排行榜自动化申请调度？选择什么样的存储引擎？怎样避免各业务资源抢占? ","isdeleted":false,"image":"$Server_URL/images/phb.jpg"},'
.'{"newsid":"103","pubtime":"2016-09-28","title":"BitBucket Cloud新增Git大文件存储Beta支持 ","desc":"Git LFS背后的基本理念是将大型二进制文件存储在并行存储中，而Git库只包含到那些文件的轻量级引用","isdeleted":false,"image":"$Server_URL/images/BitBucket.jpg"},'
.'{"newsid":"104","pubtime":"2016-09-30","title":"飞天进化，互联网、数据和计算的聚变 ","desc":"阿里巴巴技术委员会主席王坚发布的新书《在线》，被外界视作阿里巴巴技术体系总设计师的王坚出版的第一本著作，吸引了众多参会者的兴趣","isdeleted":true,"image":"$Server_URL/images/albb.jpg"}]';
 //为了偷懒，把字符串黏贴进来

$products=
'[{"prodID":909,"prodName":"太平鸟黑色印花短袖"},{"prodID":919,"prodName":"LANVERA蛇纹牛皮女包"},{"prodID":918,"prodName":"片仔癀 祛痘控油乳"},{"prodID":929,"prodName":"TineeV领粉色蕾丝裙"},{"prodID":939,"prodName":"尚都比拉V领束腰裙"}]';
 //为了偷懒，把字符串黏贴进来  不要纠结为啥要这么写，因为懒
$news=str_replace('$Server_URL','http://'.$Server_URL,$news);
    header("content-type:application/json");
	if(isset($_GET["type"]) && $_GET["type"]=="news")
		exit($news);
	exit($products);
	 