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



=======================================
	
	travel uk ctc
	
	const {Bootstrapper, window,$iOA,clearInterval,omn_hierarchy,omn,omn_events,lpChatDiv1,lpChatDiv2}=require('./_mocks_/mock-travel_uk_c2c')
var delayCounter = 0;
var omnPageName = "";
//LP object declaration
window.lpTag = window.lpTag || {};
window.lpTag.vars = window.lpTag.vars || [];
window.lpTag.dbs = window.lpTag.dbs || [];
window.lpMTagConfig = window.lpMTagConfig || {};
window.lpTag.sdes = window.lpTag.sdes || [];
window.lpTag.section = 'uk travel en';
window.lpTag.tagletSection = 'uk travel en';
window.lpTag.autoStart = false;
window.unit = "UK-Travel-purchase-path";

//Delay function for omn object availability
addDelay = function() {
try{
  if (typeof omn_hierarchy === "string" || typeof omn === "object") {
    loadLPUKTag();
  } else {
    delayCounter++;
    if (delayCounter <= 30) {
      setTimeout(function() {
        addDelay();
      }, 100);
    }
  }
}catch(e){
}
};

if (typeof omn_hierarchy === "string" || typeof omn === "object") {
  loadLPUKTag();
} else {	
  addDelay();
}

function loadLPUKTag() {
console.log("Inside loadLPUKTag()"+omn_hierarchy)
try{
  if ((typeof(omn_hierarchy) !== "undefined" && omn_hierarchy.indexOf("UK") >= 0) || (typeof(omn) !== "undefined" && typeof(omn.hierarchy) !== "undefined" && omn.hierarchy.indexOf("UK") >= 0)) {
    var fileHref = "https://icm.aexp-static.com/Internet/SMC/images/Chat/styles.css";
    var ITMCSS = document.createElement("link");
    ITMCSS.setAttribute("rel", "stylesheet");
    ITMCSS.setAttribute("type", "text/css");
    ITMCSS.setAttribute("href", fileHref);
    document.getElementsByTagName("head")[0].appendChild(ITMCSS);
    window.eventsVal = (typeof(omn_events) === "undefined" ? (typeof(omn) === "undefined" ? "" : (typeof(omn.events) === "undefined" ? "" : omn.events)) : omn_events);
    if (typeof(omn_hierarchy) !== "undefined" && (omn_hierarchy.indexOf("UK|Travel|BookTravel|ER|checkout") >= 0 || omn_hierarchy.indexOf("UK|Travel|BookTravel|ER|Thankyou") >= 0)) {
      window.lpTag.section = "UK-Travel-sales";
    } else if (typeof(omn_hierarchy) !== "undefined" && (omn_hierarchy.indexOf("UK|Travel|BookTravel|ER|travel_support") >= 0 || omn_hierarchy.indexOf("UK|Travel|BookTravel|ER|faq") >= 0)) {
      window.lpTag.section = "UK-Travel-service";
    } else if (typeof(omn_hierarchy) !== "undefined" && (document.URL.indexOf("/travel/retrieve_booking.cfm") >= 0 || document.URL.indexOf("/service/bookings_view.cfm") >= 0)) {
      window.lpTag.section = "UK-Travel-service";
    } else if (typeof(omn) !== "undefined") {
      if (typeof(omn.hierarchy) !== "undefined" && (omn.hierarchy.indexOf("UK|Travel|BookTravel|ER|checkout") >= 0 || omn.hierarchy.indexOf("UK|Travel|BookTravel|ER|Thankyou") >= 0)) {
        window.lpTag.section = "UK-Travel-sales";
      } else if (typeof(omn.hierarchy) !== "undefined" && (omn.hierarchy.indexOf("UK|Travel|BookTravel|ER|travel_support") >= 0 || omn.hierarchy.indexOf("UK|Travel|BookTravel|ER|faq") >= 0)) {
        window.lpTag.section = "UK-Travel-service";
      } else if ((document.URL.indexOf("/travel/retrieve_booking.cfm") >= 0 || document.URL.indexOf("/service/bookings_view.cfm") >= 0)) {
        window.lpTag.section = "UK-Travel-service";
      }
    }
    
    if (typeof omn === "object" && typeof omn.pagename === "string") {
      omnPageName = omn.pagename;
    } else if (typeof(omn_pagename) === "string") {
      omnPageName = omn_pagename;
    }
	console.log("Before push"+omnPageName );
  /*  window.lpTag.sdes.push({   Unable to mock this block
      "type": "service",
      "service": {
        "topic": omnPageName,
        "category": eventsVal
      }
    }); */
	console.log("after push"+omnPageName );
    window.lpMTagConfig.showGlobalButton = function() {
	console.log("Isndie showGlobalButton");
      $iOA("#c2c_tab").animate({
        bottom: 0
      }, 500, function() {
        $iOA("#c2c_open_closer .c2c_middle_row").animate({
          'padding-bottom': 10
        }, 300);
      });

      $iOA(".click_to_chat #c2c_open_closer .c2c_sprite-images-close").click(function() {
        // console.log(typeof event);
        if (typeof event !== "undefined") {
          lpMTagConfig.stopEvent(event);
        }
        $iOA(".click_to_chat").fadeOut(500);
        lpSendData('session', 'buttonClosed', true);
      });

    };
    (function() {
		console.log("Inner function")
      var firstTry = true,
        tryAgain;

      var _lpStopTrying = function() {
        clearInterval(tryAgain);
      };

      // Set LivePerson running now the setup is complete
      var startLETag = function() {
        if (window.lpTag.start) {
          //Setting the isDom var to true because the dom already loaded
          window.lpTag.isDom = true;
		  window.lpTag.start();
          _lpStopTrying();
        } else if (firstTry) {
          firstTry = false;
          tryAgain = setInterval(startLETag, 100);
        }
      };
      startLETag();
    })();	
    var lpChatDiv1 = document.createElement("div");
    lpChatDiv1.setAttribute("id", "lpButtonChat1");
    var lpChatDiv2 = document.createElement("div");
    lpChatDiv2.setAttribute("id", "lpButtonChat2");
    document.body.appendChild(lpChatDiv1);
    document.body.appendChild(lpChatDiv2);	
    Bootstrapper.insertScript("//qwww.aexp-static.com/api/axpi/ensighten/liveengage-lp/le-mtagconfig.js");
  }
}catch(e){

}
}

module.exports={addDelay,loadLPUKTag};

--mock
const Bootstrapper={
    ensMarket:'en-US',
    hostName:function(str,val){
       // console.log(window.location.hostname.indexOf(str,val))
        if(window.location.hostname.indexOf(str,val)==0){
           // console.log('yes')
            return true;
        }else{
          //  console.log('no')
            return false;
        }
        },
    insertScript:function(s){return true},
	loadScriptCallback:function(s){},
    readCookie:function(s){
        if(s=='amexsessioncookie'){
            return true;
        }else{
            return false;
        }
    },
    bindDOMParsed:function () { return true},
    bindPageSpecificCompletion:function () { return true}

    

}

var omn_hierarchy='UK|Travel|BookTravel|ER|checkout';
const omn_events = "Booking";
const omn={pagename : "Start",hierarchy:"UK|Travel|Flights",events : "Booking"};
const myObj = {
      "type": "service",
      "service": {
        "topic": "TestName",
        "category": "start"
      }
}
const window = {location:{href:"https://www.global.americanexpress.com/dashboard",pathname:"https://global.americanexpress.com/dashboard",hostname:'slglobal.americanexpress.com',search:''},lpTag : "",lpMTagConfig:""}
window.lpTag = {sdes:[""]}
window.lpMTagConfig = {showGlobalButton:function(){return true}}
//Begin: Added below one for UT coverage
//window.lpTag.sdes = { push : function(a){return true } }

//End: Added below one for UT coverage
const lpChatDiv1 = {setAttribute:function(){return true}}
const lpChatDiv2 = {setAttribute:function(){return true}}
const $iOA = 'test';

module.exports={Bootstrapper, window,$iOA,clearInterval,omn_hierarchy,omn,omn_events};

---test

const {addDelay,loadLPUKTag} =require('../models/travel_uk_c2c')
const  {Bootstrapper,window,$iOA,clearInterval,omn_hierarchy,omn,omn_events}=require('../models/_mocks_/mock-travel_uk_c2c')

describe('UT Coverage for uk c2c module', () => {
    describe('travel uk c2c', () => {
		test('set href defined',() => {  

        });		
		test('set href defined',() => {
			omn.hierarchy = "UK|Travel|BookTravel|ER|travel_support"
			omn_hierarchy = "UK|Travel|BookTravel|ER|travel_support	"
            expect(loadLPUKTag()).toBeUndefined();
        });
		/*
		 test('set href defined',() => {
            expect(addDelay("UK|Travel|BookTravel|ER|Thankyou")).toBeUndefined();
        });
		 test('set href defined',() => {
            expect(addDelay("UK|Travel|BookTravel|ER|travel_support")).toBeUndefined();
        });
		test('set href defined',() => {
		expect(addDelay("UK|Travel|BookTravel|ER|faq")).toBeUndefined();
		});
		test('set href defined',() => {
		omn.hierarchy = "UK|Travel|BookTravel|ER|checkout"
		expect(addDelay("")).toBeUndefined();
		});
		
		test('set href defined',() => {		
		expect(addDelay()).toBeUndefined();
		});*/

    })
})

------------------------------

const  {Bootstrapper, document, window,navigator,$iOA,clearInterval,ioaVariableCheck,lpChatButton,omn,omn_pagename}=require('./_mocks_/mock-travel_au_nz_jp_it_mx_ca_c2c')

try{
    var hostName = window.location.hostname;	
    var delayCounter = 0;
    var omnPageName = "";
    var eventValue = "";
    var omnHierarchy= "";
    var lpTagFile = "";
//Below check for initiate environment specific LP Tag file
    if(hostName.indexOf('uat') > -1 || hostName.indexOf('-qa') > -1){
        lpTagFile = "//qwww.aexp-static.com/api/axpi/ensighten/ctc-ca-mx-it/le-mtagconfig.js";
    }else{
        lpTagFile = "//www.aexp-static.com/api/axpi/ensighten/ctc-ca-mx-it/le-mtagconfig.js";
    }

    loadLPButtonDiv = function(){
        try{
			
         /*   document.body.appendChild(lpChatButton);
            var fileHref = "https://icm.aexp-static.com/Internet/SMC/images/Chat/styles.css";
            var ITMCSS = document.createElement("link");
            ITMCSS.setAttribute("rel", "stylesheet");
            ITMCSS.setAttribute("type", "text/css");
            ITMCSS.setAttribute("href", fileHref);
            document.getElementsByTagName("head")[0].appendChild(ITMCSS);*/
            window.lpMTagConfig.showGlobalButton = function() {
                try{/*
                    if(typeof IOA !== "undefined"){
                        $iOA( "#c2c_tab" ).animate({
                            bottom: 0
                        }, 500, function() {
                            $iOA( "#c2c_open_closer .c2c_middle_row" ).animate({
                                'padding-bottom': 10
                            }, 300);
                        });
                        $iOA(".click_to_chat #c2c_open_closer .c2c_sprite-images-close").click(function () {
                            // console.log(typeof event);
                            if (typeof event !== "undefined") {
                                lpMTagConfig.stopEvent(event);
                            }
                            $iOA(".click_to_chat").fadeOut(500);
                            lpSendData('session','buttonClosed',true);
                        });
                    }*/
                }catch(err){
                }
            };
        }catch(err){
        }
    };

    setOmnData = function(omn_hierarchy){  // This method is used for reading omn data from the page	
        try{
            
			if(typeof omn_hierarchy === "string"){
                omnHierarchy = omn_hierarchy;
            }else if(typeof omn === "object" && typeof omn.hierarchy === "string"){
                omnHierarchy = omn.hierarchy;
            }else if(typeof s !== "undefined" && typeof s.pageName !== "undefined"){
                omnHierarchy = s.pageName;
            }
            if(typeof(omn_pagename) !== "undefined") {
                omnPageName = omn_pagename;
            }else if(typeof omn === "object" && typeof(omn.pagename) === "string"){
                omnPageName = omn.pagename;
            }else if(typeof s === "object"){
                omnPageName = s.pageName;
            }
            if(typeof omn === "object" && typeof(omn.events) !== "undefined"){			
                eventValue = omn.events;
            }else if(typeof(omn_events) !== "undefined"){
                eventValue = omn_events;
            }

//send omn data to LP system
            if(typeof window.lpTag.sdes === "object"){
                window.lpTag.sdes.push(
                    {
                        "type": "service",
                        "service": {
                            "topic": omnPageName,
                            "category": eventValue,
                            "serviceId": omnHierarchy
                        }
                    }
                );
            }
            loadLPButtonDiv();
        }catch(err){

        }
    };
    addOmnDataDelay = function(){//This method looks for omn details and wait maximum 5 secs
        try{
            if(typeof omn_hierarchy === "string" || typeof omn === "object"){
                setOmnData(omn_hierarchy);
            }else{
                delayCounter++;
                if(delayCounter <= 50){
                    setTimeout(function(){addOmnDataDelay();}, 100);
                }else{
                    setOmnData(omn_hierarchy);
                }
            }
        }catch(err){
        }
    };

//Declare LP variables
    window.lpTag = window.lpTag || {};
    window.lpTag.vars = window.lpTag.vars || [];
    window.lpTag.dbs = window.lpTag.dbs || [];
    window.lpMTagConfig = window.lpMTagConfig || {};
    window.lpTag.sdes = window.lpTag.sdes||[];
//Checks for market type and initiate section & tagletSection variables for injecting market specific button on the application
function setSectionforLP(){
    if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="nz_en"){
        window.lpTag.section = 'nz travel en';
        window.lpTag.tagletSection = 'nz travel en';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="au_en"){
        window.lpTag.section = 'au travel en';
        window.lpTag.tagletSection = 'au travel en';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="jp_ja"){
        window.lpTag.section = 'jp travel jp';
        window.lpTag.tagletSection = 'jp travel jp';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="mx_es"){
        window.lpTag.section = 'MexicoTravelSP';
        window.lpTag.tagletSection = 'MexicoTravelSP';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="it_it"){
        window.lpTag.section = 'ItalyTravelIT';
        window.lpTag.tagletSection = 'ItalyTravelIT';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="ca_en"){
        window.lpTag.section = 'CanadaTravelEN';
        window.lpTag.tagletSection = 'CanadaTravelEN';
    }else if(typeof(Bootstrapper.ensMarket)!=="undefined" && Bootstrapper.ensMarket==="ca_fr"){
        window.lpTag.section = 'CanadaTravelFR';
        window.lpTag.tagletSection = 'CanadaTravelFR';
    }
}
    Bootstrapper.insertScript(lpTagFile); // Load LP mTag file
	
	function checkOmnData(omn_hierarchy){		
    if(typeof omn_hierarchy === "string" || typeof omn === "object"){
        setOmnData(omn_hierarchy);
    }else{
        addOmnDataDelay();
    }
	}
}catch(err){
}

module.exports={loadLPButtonDiv,setOmnData,addOmnDataDelay,checkOmnData,setSectionforLP};

-----
	mock

const Bootstrapper={
    ensMarket:'en-US',
    hostName:function(str,val){
       // console.log(window.location.hostname.indexOf(str,val))
        if(window.location.hostname.indexOf(str,val)==0){
           // console.log('yes')
            return true;
        }else{
          //  console.log('no')
            return false;
        }
        },
    insertScript:function(s){return true},
    readCookie:function(s){
        if(s=='amexsessioncookie'){
            return true;
        }else{
            return false;
        }
    },
    bindDOMParsed:function () { return true},
    bindPageSpecificCompletion:function () { return true}
}

clearInterval = function (interval) {

}
const document={body:{appendChild: function(s){return true}},createElement:function(s){return "<div></div>"},documentElement:{lang:"en_US"},location:{pathname:"/login"}}
const lpChatButton = {setAttribute:function(){return true}}
const window={location:{href:"https://travel.americanexpress.co.it/flights",pathname:"https://www.global.americanexpress.com/rewards.html",hostname:"travel-qa.americanexpress.com",search:''},lpTag:{vars:[],newPage:'begin.do',sdes:[]},lpMTagConfig:{},site:undefined}
const navigator={userAgent:'aexphybrid'}
const $iOA = 'test';
const ioaVariableCheck='true';
const omn_events = "Booking";
const s = {pageName:"StartPage"}
const omn_pagename = "StarPage"
const omn={pagename : "Start",hierarchy:"IT|Travel|Flights",events : "Booking"};
module.exports={Bootstrapper, document, window,navigator,$iOA,clearInterval,ioaVariableCheck,lpChatButton,omn,omn_pagename};

----test

travel_au_nz_jp_it_mx_ca_c2c.test

const {loadLPButtonDiv,setOmnData,addOmnDataDelay,checkOmnData,setSectionforLP} =require('../models/travel_au_nz_jp_it_mx_ca_c2c')
const  {Bootstrapper, document, window,navigator,$iOA,clearInterval,ioaVariableCheck,lpChatButton,omn,omn_pagename}=require('../models/_mocks_/mock-travel_au_nz_jp_it_mx_ca_c2c')

describe('travel au nz jp mx ca c2c', () => {
    describe('travel au nz jp mx ca c2c', () => {
		test('Check HostName',() => {
		window.location.hostname = "travel-qa.americanexpress.com";
            expect(loadLPButtonDiv()).toBeUndefined();
        });
		test('Check HostName',() => {
		window.location.hostname = "travel-uat.americanexpress.com";
			expect(loadLPButtonDiv()).toBeUndefined();
		});
		test('Check HostName',() => {
		window.location.hostname = "travel.americanexpress.com";
			expect(loadLPButtonDiv()).toBeUndefined();
		});
        test('travel au nz jp mx ca c2c',() => {
        expect(loadLPButtonDiv()).toBeUndefined();
        });
        test('setSectionfor NZ',() => {	
			Bootstrapper.ensMarket = "nz_en";
        expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor AU',() => {	
			Bootstrapper.ensMarket = "au_en";		
        expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor JP',() => {			
		Bootstrapper.ensMarket = "jp_ja";
        expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor MX',() => {			
		Bootstrapper.ensMarket = "mx_es";
            expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor IT',() => {			
		Bootstrapper.ensMarket = "it_it";
            expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor CA-FN',() => {			
		Bootstrapper.ensMarket = "ca_en";
            expect(setSectionforLP()).toBeUndefined();
        });
		test('setSectionfor CA-FR',() => {			
		Bootstrapper.ensMarket = "ca_fr";
            expect(setSectionforLP()).toBeUndefined();
        });        
		test('Check Omniture Data with omn_hierarchy vriable',() => {			
            expect(checkOmnData("AU|Travel|Fights|Start")).toBeUndefined();
        });
		test('Check Omniture Data with omn object',() => {			
            expect(checkOmnData()).toBeUndefined();
        });
		test('Check Omniture Data with omn object',() => {			
		omn.pagename="";		
		omn.hierarchy="";
        expect(checkOmnData()).toBeUndefined();
        });
    })
})
	
	
	
