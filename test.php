<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php echo '<p>Hello World</p>'; 
 $url = 'https://www.google.com/trends/fetchComponent?q=baNNNAS&cid=TIMESERIES_GRAPH_0&export=3';
//echo($url);
//$url = 'https://www.google.com';
//$pageContent = file_get_contents($url);
$homepage = file_get_contents($url);
//echo($_REQUEST["name"]);
echo ($homepage);
?>
 </body>
</html>