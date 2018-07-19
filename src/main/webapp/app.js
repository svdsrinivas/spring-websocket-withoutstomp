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
  var stokenccp = $("#stoken").val()+"ccp";
   ws = new SockJS('/spring-websocket-plain/portfolio?stoken='+stokenccp);
   ws.onopen = function () {
       setConnected(true);
       console.log('Info: WebSocket connection opened.');
     };
   ws.onmessage = function(data){
        	console.log(data);
            showGreeting(data.data);
   }
   ws.onclose = function () {
       setConnected(false);
       console.log('Info: WebSocket connection closed.');
     };
}

function disconnect() {
    if (ws !== null) {
    	ws.close();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
	var stokenccp = $("#stoken").val()+"cm";
	var data = JSON.stringify({'offerId': $("#name").val(),'stoken':stokenccp})
    ws.send(data);
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});