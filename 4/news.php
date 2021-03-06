<?php

 // 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:GET');  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
$redis = new Redis();
$redis->connect("127.0.0.1",6379);
 

function agree($newsid)
{

global $redis;
  $get_num=$redis->hget("newsagree","news".$newsid);
  if($get_num)
	  $get_num++;
  else
	  $get_num=1;
  $redis->hset("newsagree","news".$newsid,$get_num);

  return $get_num;
}
function getAgree($newsid)
{
global $redis;
  $get_num=$redis->hget("newsagree","news".$newsid);
  if($get_num)
	  return $get_num;
  else
	  return 0;
}
  

$news=
'[{"newsid":"101","pubtime":"2016-10-02","title":"QFix 探索之路 —— 手Q热补丁轻量级方案 ","desc":"QFix是手Q团队近期推出的一种新的Android热补丁方案，在不影响App运行时性能（无需插桩去preverify）的前提下有效地规避了"},'
.'{"newsid":"102","pubtime":"2016-10-01","title":"大规模排行榜系统实践及挑战 ","desc":" 如何支持业务接近接入，数万乃至几十万级排行榜自动化申请调度？选择什么样的存储引擎？怎样避免各业务资源抢占? "},'
.'{"newsid":"103","pubtime":"2016-09-28","title":"BitBucket Cloud新增Git大文件存储Beta支持 ","desc":"Git LFS背后的基本理念是将大型二进制文件存储在并行存储中，而Git库只包含到那些文件的轻量级引用"},'
.'{"newsid":"104","pubtime":"2016-09-30","title":"飞天进化，互联网、数据和计算的聚变 ","desc":"阿里巴巴技术委员会主席王坚发布的新书《在线》，被外界视作阿里巴巴技术体系总设计师的王坚出版的第一本著作，吸引了众多参会者的兴趣"}]';
 //为了偷懒，把字符串黏贴进来

    header("content-type:application/json");
	  $news=json_decode($news,1);//反序列化为对象数组

      if(isset($_POST["newsid"]))  //代表是点赞 ，要为新闻的点赞数加1
	  {
		 
		  $agreeNum=agree($_POST["newsid"]);
			exit(json_encode(new class($agreeNum){
				 function __construct($agreeNum)
				{
					 $this->status="success";
					 $this->agree=$agreeNum;
				}
			  
			 }));
	  }



	  if(isset($_GET["newsid"])) //获取新闻内容
	  {
		  //如果参数有newsid则寻找对象的数据并返回
		  foreach($news as $n)
		  {
			  if($n["newsid"]==$_GET["newsid"])
			  {
				  $n["agree"]=getAgree($n["newsid"]);
				  exit(json_encode($n));
			  }
		  }
		  
	  }
	  exit("");