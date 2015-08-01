var person;
var username;

// Accepts a url and a callback function to run.


$(document).ready(function(){
	username = getQueryVariable('username');
	if (username==undefined)
	{
		alert("you are not logged in");
		window.location.href = '/index.html';
	}
	person = new Player(username);
	var responseWeHaveBeenLongAwaiting;
	console.log(person.username);
	//setBackground();
	$("#title1").html(person.username+"'s investments");
	document.getElementById("moneyYouHave").innerHTML = "you have "+person.money+" investment points remaining";
	$("#btn1").click(function(){
		var url ="http://www.google.com/trends/fetchComponent?q="+$('#txt1').val()+"&cid=TIMESERIES_GRAPH_0&export=5";
		window.open(url);
	});
	function createCORSRequest(method, url) {
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {

			// Check if the XMLHttpRequest object has a "withCredentials" property.
			// "withCredentials" only exists on XMLHTTPRequest2 objects.
			xhr.open(method, url, false);

		}
		else if (typeof XDomainRequest != "undefined") {

			// Otherwise, check if XDomainRequest.
			// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
			console.log("am about to hit an undefined error");
			xhr = new XDomainRequest();
			xhr.open(method, url);

		}
		else {

			// Otherwise, CORS is not supported by the browser.
			xhr = null;

		}
		return xhr;
	}
	$("#btn2").click(function() {
		//console.log("text");
		if (person.money >= parseInt($("#txt2").val(), 0)) {
			if (parseInt($("#txt2").val(), 0) <= 0) {
				alert("you cannot invest non-positive amounts");
				return;
			}
			//console.log("txet");
			//var url = "https://www.google.com/trends/fetchComponent?q=" + $("#txt1").val() + "&cid=TIMESERIES_GRAPH_0&export=3";
			//console.log("Before XHR");
			//var xhr = createCORSRequest('GET', url);
			// xhr.onload = function() {  //MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS MAKE IT CALL THIS NOW
			// 	console.log("Button 2 called");
			// 	responseWeHaveBeenLongAwaiting = xhr.responseText;
			// 	person.money -= parseInt($("#txt2").val(), 0);
			// 	console.log(getFromTheEndOfAString(responseWeHaveBeenLongAwaiting));
			// 	var currentPercentage = getFromTheEndOfAString(responseWeHaveBeenLongAwaiting);
			// 	person.investments.push({
			// 		stockName: $("#txt1").val(),
			// 		percentageAtTheStart: currentPercentage,
			// 		value: parseInt($("#txt2").val(), 0)

			// 	});
			// 	person.save();
			// 	$("#investmentsList").append("<li>" + person.investments[person.investments.length - 1].stockName + "</li>");
			// 	$("#dropdown").append("<option>" + person.investments[person.investments.length - 1].stockName + "</option>");
			// 	document.getElementById("moneyYouHave").innerHTML = "you have " + person.money + " remaining";
			// };
			functionForInvesting(responseWeHaveBeenLongAwaiting);
		}
		else {
			alert("you don't have that much money");
		}
	});
	

	
	$("#btn3").click(function(){
		//var url1="https://www.google.com/trends/fetchComponent?q="+$("#dropdown").val()+"&cid=TIMESERIES_GRAPH_0&export=3";
	//	alert("ajax.php?name"+$("#dropdown").val());
    // jQuery.extend({
    //     getValues: function(url) {
    //         var result = null;
    //         $.ajax({
    //             url: url,
    //             type: 'POST',
    //             data: {},
    //             dataType: 'text',
    //             async: false,
    //             success: function(data) {
    //                 result = data;
    //             }
    //         });
    //       return result;
    //     }
    // });
            
    //     var results = $.getValues("https://www.google.com/trends/fetchComponent?q="+$("#dropdown").val()+"&cid=TIMESERIES_GRAPH_0&export=3");
    //     alert("results are "+results);
        // var jqxhr = $.ajax({
        //     type: 'POST',       
        //     url: "ajax.php?name='"+$("#dropdown").val()+"'"",
        //     data: queryParams,
        //     dataType: 'html',
        //     context: document.body,
        //     global: false,
        //     async:false,
        //     success: function(data) {
        //         return data;
        //     }
        // }).responseText;
        
        // alert(jqxhr);
		
		$.ajax({
                type: 'POST',
                url: "ajax.php?name='"+$("#dropdown").val()+"'",
               //url: "ajax.php?name=BANNANS",
                data: {},
                dataType: 'text',
                success: function(data) 
                { 
                //	alert('got here with data'); 
                //alert(data);
                var x=getFromTheEndOfAString(data);
                //alert(x);
                var numberOfTheInvestmentWeAreSelling=0;
                for (var k=0;k<=person.investments.length-1;k++) {
					// $("#investmentsList").append("<li>"+person.investments[k].stockName+"</li>");
					// $("#dropdown").append("<option>"+person.investments[k].stockName+"</option>");
					//console.log(person.investments[k].stockName);
					var nameOfStock =person.investments[k].stockName;
					if(nameOfStock==$("#dropdown").val()){
						numberOfTheInvestmentWeAreSelling=k;
						k=person.investments.length;
					}
				}
				var valueOfStock= person.investments[numberOfTheInvestmentWeAreSelling].value;
				//alert(valueOfStock);
				person.money+=valueOfStock*x;
				person.investments[numberOfTheInvestmentWeAreSelling].value=0;
				person.save();
			//	$("#moneyYouHave").text(person.money);
				document.getElementById("moneyYouHave").innerHTML = "you have " + person.money + " remaining";
				location.reload(); 
				//document.setLocation('investments.php?username='+username);
               // localStorage.setItem("ajaxdata1",data);
               // resultOfAjax = data;
              // alert("data is " + data);
              // alert($("#dataholder").text());
              // $("#dataholder").text(data);
              // alert("dataholder is now "+$("#dataholder").text());
                },
                error: function() {
                	alert('ajax fail probably php crash in ajax.php'); 
                }
        });
		
		
// 		function createCORSRequest(method, url) {
// 	  		var xhr = new XMLHttpRequest();
// 	  		if ("withCredentials" in xhr) {
// 	    		// Check if the XMLHttpRequest object has a "withCredentials" property.
// 				// "withCredentials" only exists on XMLHTTPRequest2 objects.
// 				xhr.withCredentials=false;
// 	    		xhr.open(method, url, true);
// 	    		console.log("1");
// 	  		} else if (typeof XDomainRequest != "undefined") {
// 	    // Otherwise, check if XDomainRequest.
// 	    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
// 	    		console.log("am about to hit the sell undefined error");
// 	    		xhr = new XDomainRequest();
// 	    		xhr.open(method, url);
// 				console.log("2");
// 	  		} else {
// 	    // Otherwise, CORS is not supported by the browser.
// 	    		xhr = null;
// 				console.log("3");
// 	  		}
// 	  		return xhr;
// 		}
		

		

		
// 		var xhr = createCORSRequest('GET', url1);
		
// 		xhr.onload = function() {
// 			var r = xhr.responseText;
// 			console.log(r);
// 		};
		
// 		xhr.onreadystatechange = function() {
// 		    if(xhr.readyState == 4 && xhr.status == 200) {
// 		        alert('Tested OK');
// 		        var text = xhr.responseText;
// 		        alert('Response from CORS request to ' + url1 + ': ' + text);
// 		    }
// 		};
		
// 		xhr.onerror = function() {
// 		  console.log('There was an error!');
// 		};
		
// 		xhr.send();
// 		if (!xhr) {
//   			throw new Error('CORS not supported');
// 		}
// 		else{
// 			responseWeHaveBeenLongAwaiting=xhr.responseText;
// 			console.log(xhr);
// 		}
    //alert("newvar is "+newvar);
    //responseWeHaveBeenLongAwaiting =localStorage.getItem("ajaxdata1");
    //localStorage.removeItem("ajaxdata1");

    //alert("fnally"+responseWeHaveBeenLongAwaiting);
	});
	for (var k=0;k<=person.investments.length-1;k++) {
			// $("#investmentsList").append("<li>"+person.investments[k].stockName+" "+person.investments[k].value+"</li>");
			$("#investmentsList").append("<li>"+person.investments[k].stockName+" "+person.investments[k].value+"</li>");
			$("#dropdown").append("<option>"+person.investments[k].stockName+"</option>");
			console.log(person.investments[k].stockName);
		}
});
function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
    	var pair = vars[i].split('=');
	    if (decodeURIComponent(pair[0]) == variable)
	    {
	    	return decodeURIComponent(pair[1]);
    	}
    }
    console.log('Query variable %s not found', variable);
}

function getFromTheEndOfAString(stringPassedIn) {
    var res = stringPassedIn.substr(-11,2);
    document.getElementById("demo").innerHTML=res;
    return res;
}
function setBackground(){
		document.body.style.backgroundImage = "url('https://cliparts.co/cliparts/8cx/8p6/8cx8p6qcp.jpg')";
}

function functionForInvesting(responseWeHaveBeenLongAwaiting){
				console.log("Button 2 called");
				var percentageAtThePointOfInvestment=0;
				$.ajax({
                type: 'POST',
                url: "ajax.php?name='"+$("#txt1").val()+"'",
               //url: "ajax.php?name=BANNANS",
                data: {},
                dataType: 'text',
                success: function(data) 
                { 
                //	alert('got here with data'); 
                alert(data);
                percentageAtThePointOfInvestment=getFromTheEndOfAString(data);
                alert(getFromTheEndOfAString(data));
               // localStorage.setItem("ajaxdata1",data);
               // resultOfAjax = data;
              // alert("data is " + data);
              // alert($("#dataholder").text());
              // $("#dataholder").text(data);
              // alert("dataholder is now "+$("#dataholder").text());
                },
                error: function() {
                	alert('ajax fail probably php crash in ajax.php'); 
                }
        });
				person.money -= parseInt($("#txt2").val(), 0);
				// console.log(getFromTheEndOfAString(responseWeHaveBeenLongAwaiting));
				// var currentPercentage = getFromTheEndOfAString(responseWeHaveBeenLongAwaiting);
				var numberOfShares = (parseInt($("#txt2").val(),0))/percentageAtThePointOfInvestment;
				alert(percentageAtThePointOfInvestment);
				setTimeout(alert(numberOfShares));
				person.investments.push({
					stockName: $("#txt1").val(),
					value: numberOfShares
				});
				person.save();
				$("#investmentsList").append("<li>" + person.investments[person.investments.length - 1].stockName + "</li>");
				$("#dropdown").append("<option>" + person.investments[person.investments.length - 1].stockName + "</option>");
				document.getElementById("moneyYouHave").innerHTML = "you have " + person.money + " remaining";
}

function viewHighScores()
{
	window.location.href = '/highscores.html';
}

function goToLogin()
{
	window.location.href = '/index.html'
}
