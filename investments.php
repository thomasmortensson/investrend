 <?php
 header("Access-Control-Allow-Origin: *");
 //header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST');  
 ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN""http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="Player.js"></script>
		<script src="investmentsphp.js"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title id=title1>Investments</title>
		<meta name="author" content="Dom"/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="investments.css">
	</head>
	<body>
		
		
		<h1 id="Heading">investments</h1>
		<!--<a href="https://yrs2015-glaming.c9.io/highscores.html">highscores</a>-->
		<input type="button" value="Return to the login page" onclick="goToLogin();" class="btn btn-default indent">
		<br>
		<input type="button" value="View leaderboards" onclick="viewHighScores();" class="btn btn-default indent">
		<br>
		<br>
		<b class="indent">Make an investment:</b>
		<br>
				<p class="indent" id=moneyYouHave>
			test
		</p>	
		<input id="txt1"  placeholder="Investment name" class="indent"/>

		<br>
		<p id = demo>	</p>

		<input id="txt2"  placeholder="Chosen points to invest" class="indent" >
		<br>
		<input id = "btn1" type="submit" accesskey="m" value="see a graph of what has happened in the past" class="btn btn-default indent"/>
		<br>
		<input id="btn2" type="submit" accesskey="n" value="invest" class="btn btn-default indent"/>
		<br>
		<ul id="investmentsList"> Your investments:  </ul>
		<br>
		<br>
		<b class="indent">Sell investments</b>
		<select id="dropdown" class="indent"></select>
		<input id="btn3" type="submit" value="sell"/>

<div class="indent" id="dataholder" style="visibility: hidden">here</div>
</html>