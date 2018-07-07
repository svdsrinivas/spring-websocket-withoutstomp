var ws = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
	
   ws = new WebSocket('ws://localhost:8080/spring-websocket-plain/portfolio/1');
   ws.onmessage = function(data){
        	console.log(data);
            showGreeting(data.data);
   }
   setConnected(true);
}

function disconnect() {
    if (ws !== null) {
    	ws.close();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
	var data = JSON.stringify({'offerId': $("#name").val(),'stoken':'1'})
    ws.send(data);
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(i); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});