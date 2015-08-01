function refreshLeaderboards() {
    var players = Player.getPlayers();
    var playerAndScore = [];
    for (var i = 0; i < players.length; i++) {
        var player = new Player(players[i]);
        var playerScore = player.getPlayerScore();

        playerAndScore.push({
            username: players[i],
            score: playerScore

        });
    }
    playerAndScore.sort(function(a, b) {
        if(a.score>b.score)
        {
            return -1;
        }
        if(a.score<b.score)
        {
            return 1;
        }
        if(a.score==b.score)
        {
            return 0;
        }
    });
    return playerAndScore;
}

$(document).ready(function() {
    var playerAndScore = refreshLeaderboards();
    var test=1*2;
    if(playerAndScore.length!==0)
    {
    for (var i = 0; i < playerAndScore.length; i++) {
        $('#highscoreTable tr:last').after("<tr><td>#" + (i+1) + "</td><td>" + playerAndScore[i].username + "</td><td>£" + playerAndScore[i].score + " </td></tr>");
    }
    }
    else
    {
        document.write("There are no users yet. Why not be the first! Visit http://yrs2015-glaming.c9.io/index.html and sign up now")
    }
    
    
});

function tweetscore(){
        var username = $("#shareUsername").val();
        var user = new Player(username);
        
        //share score on twitter
        var tweetbegin = 'http://twitter.com/home?status=';
        var tweettxt = 'I scored '+user.score+' at this game -' + window.location.href + '.';
        var finaltweet = tweetbegin +encodeURIComponent(tweettxt);
        window.open(finaltweet,'_blank');
    }
    
// function viewInvestments()
// {
//     var username = $("#investmentsUsername").val();
// 	window.location.href = '/investments.php?username='+username;
// }

// function goToLogin()
// {
// 	window.location.href = '/index.html'
// }

    

function refreshLeaderboards() {
    var players = Player.getPlayers();
    var playerAndScore = [];
    for (var i = 0; i < players.length; i++) {
        var player = new Player(players[i]);
        var playerScore = player.getPlayerScore();

        playerAndScore.push({
            username: players[i],
            score: playerScore

        });
    }
    playerAndScore.sort(function(a, b) {
        if(a.score>b.score)
        {
            return -1;
        }
        if(a.score<b.score)
        {
            return 1;
        }
        if(a.score==b.score)
        {
            return 0;
        }
    });
    return playerAndScore;
}

$(document).ready(function() {
    var playerAndScore = refreshLeaderboards();
    if(playerAndScore.length!==0)
    {
    for (var i = 0; i < playerAndScore.length; i++) {
        $('#highscoreTable tr:last').after("<tr><td>#" + (i+1) + "</td><td>" + playerAndScore[i].username + "</td><td>£" + playerAndScore[i].score + " </td></tr>");
    }
    }
    else
    {
        document.write("There are no users yet. Why not be the first! Visit http://yrs2015-glaming.c9.io/index.html and sign up now")
    }
    
    
});

function tweetscore(){
        var username = $("#shareUsername").val();
        var user = new Player(username);
        
        //share score on twitter
        var tweetbegin = 'http://twitter.com/home?status=';
        var tweettxt = 'I scored '+user.score+' at this game -' + window.location.href + '.';
        var finaltweet = tweetbegin +encodeURIComponent(tweettxt);
        window.open(finaltweet,'_blank');
    }
    
function viewInvestments()
{
    var username = $("#investmentsUsername").val();
	window.location.href = '/investments.php?username='+username;
}

function goToLogin()
{
	window.location.href = '/index.html'
}

    

