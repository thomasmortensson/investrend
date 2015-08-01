<?php
$url = 'https://www.google.com/trends/fetchComponent?q='.$_REQUEST['name'].'&cid=TIMESERIES_GRAPH_0&export=3';

$homepage = file_get_contents($url);

echo ($homepage);
?>