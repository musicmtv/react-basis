<?php
header("Access-Control-Allow-Origin:*");
sleep(3);
$team = new stdClass();
$team->leader="zhu";
$teammate1= new stdClass();
$teammate1->name="list";
$teammate1->age=19;
$teammate2=new stdClass();
$teammate2->name="list2";
$teammate2->age=18;
$team->teammates=[$teammate1,$teammate2];

header("Content-type:application/json");
exit(json_encode($team));
?>