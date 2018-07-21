const {Bootstrapper, document, Storage,sessionStorage,digitalData} = require('./_mocks_/uzmock')
function checkMarket(s){
	if(document.documentElement.lang === s){
		return true
	}else if(s==="null"){
		return null
	}else{
		return false
	}
}
function checkDeviceType(d,e){
	if(d ===""){
		return false
	}else if(d === "null"){
		return null
	}else if (Bootstrapper.deviceType.indexOf(d) > -1 || Bootstrapper.deviceType.indexOf(e) > -1){
		return true
	}else{
		return false
	}
}
function checkCookie(c){
	if(Bootstrapper.checkCookie(c)){
		return true
	}else{
		return false
	}
}
function checkContextPath(s){
	if(s===""){
		return false
	}else if(document.location.pathname.indexOf(s) >-1){
		return true
	}else if(s==="null"){
		return null
	}else{
		return false
	}
}
function checkStorageType(){
	if(typeof Storage !=="undefined" ){
		return true;
	}
}
function checkUndefinedStorageType(){
	const Storage=undefined
	if(typeof Storage =="undefined" ){
		return false;
	}
}
function checkDigitalData(){
	if(typeof digitalData !=="undefined" && digitalData!==null && digitalData !=="" ){
		return true;
	}
}
function checkUndefinedDigitalData(){
	const digitalData=undefined
	if(typeof digitalData =="undefined" ){
		return false;
	}
}
function checkDigitalDataProducts(){
	if(typeof digitalData.products !=="undefined" && digitalData.products!==null && digitalData.products !==""){
		return true;
	}
}
function checkProductsDescription(){
	digitalData.products=[{description:"Business Platinum Card"}]
	if(digitalData.products.length>0 && typeof digitalData.products[0].description !=="undefined" && digitalData.products[0].description !== null && digitalData.products[0].description !==""){
		return true;
	}
}
function checkUndefinedDigitalDataProducts(){
	digitalData.products=undefined
	if(typeof digitalData.products =="undefined" ){
		return false;
	}
}
function checkNullDigitalDataProducts(){
	digitalData.products=null
	if(digitalData.products===null){
		return null;
	}
}
function checkEmptyDigitalDataProducts(){
	digitalData.products=""
	if(digitalData.products===""){
		return false;
	}
}

function checkUndefinedProductsDescription(){
	digitalData.products[0].description=undefined
	if(typeof digitalData.products[0].description =="undefined" ){
		digitalData.products=[{description:"Business Platinum Card"}]
		return false;
	}
}
function checkNullProductsDescription(){
	digitalData.products[0].description=null
	if(digitalData.products[0].description===null){
		digitalData.products=[{description:"Business Platinum Card"}]
		return null;
	}
}
function checkEmptyProductsDescription(){
	digitalData.products[0].description=""
	if(digitalData.products[0].description===""){
		digitalData.products=[{description:"Business Platinum Card"}]
		return false;
	}
}
function undefinedSessionStorage(){
	sessionStorage.uzloggedin="undefined"
	if(sessionStorage.uzloggedin ==="undefined" ){
		return true;
	}
}
function definedSessionStorage(){
	sessionStorage.uzloggedin="openfalse"
	if(sessionStorage.uzloggedin !=="undefined" ){
		return false;
	}
}
function setSessionStorage(s){
	sessionStorage.uzloggedin=s
	if(sessionStorage.uzloggedin ==="openfalse"){
		return true
	}
}
function notSetSessionStorage(d){
	sessionStorage.uzloggedin="openfalse"
	if(sessionStorage.uzloggedin !==d){
		return false
	}
}
function setSessionStorageloggedin(s){
	sessionStorage.uzloggedin=s
	if(sessionStorage.uzloggedin ==="opentrue"){
		return true
	}
}
function notSetSessionStorageloggedin(d){
	sessionStorage.uzloggedin="opentrue"
	if(sessionStorage.uzloggedin !==d){
		return false
	}
}
function assignBbcValue(){
	const bpdGUID = Bootstrapper.readCookie('blueboxpublic')
	if(bpdGUID ==="73aa29ba92c8b7b144a2a3a7db61d390"){
		return true
	}
}
function notAssignBbcValue(){
	bpdGUID = Bootstrapper.readCookie('blueboxpublic')
	if(bpdGUID !=="7fdasf29ba92c8b7b144a2a3a7db61d390"){
		return false
	}
}

function setTimeoutforDigitalData(setUZStorageLoggedIn) {
  setTimeout(() => {
    setUZStorageLoggedIn && setUZStorageLoggedIn();
  }, 2000);
}
module.exports={checkMarket,checkContextPath,checkDeviceType,checkCookie,checkStorageType,checkUndefinedStorageType,setSessionStorage,assignBbcValue,notAssignBbcValue,notSetSessionStorage,definedSessionStorage,undefinedSessionStorage,setTimeoutforDigitalData,checkUndefinedDigitalData,checkDigitalData,checkDigitalDataProducts,checkUndefinedDigitalDataProducts,checkNullDigitalDataProducts,checkEmptyDigitalDataProducts,checkProductsDescription,checkUndefinedProductsDescription,checkNullProductsDescription,checkEmptyProductsDescription,setSessionStorageloggedin,notSetSessionStorageloggedin};
userzoom.js
----------------------------
userzoom.test.js

const {checkMarket,checkContextPath,checkDeviceType,checkCookie,checkStorageType,checkUndefinedStorageType,setSessionStorage,assignBbcValue,notAssignBbcValue,notSetSessionStorage,definedSessionStorage,undefinedSessionStorage,setTimeoutforDigitalData,checkUndefinedDigitalData,checkDigitalData,checkDigitalDataProducts,checkUndefinedDigitalDataProducts,checkNullDigitalDataProducts,checkEmptyDigitalDataProducts,checkProductsDescription,checkUndefinedProductsDescription,checkNullProductsDescription,checkEmptyProductsDescription,setSessionStorageloggedin,notSetSessionStorageloggedin} = require('../models/userzoom')
const {Bootstrapper, document, Storage, sessionStorage,digitalData} = require('../models/_mocks_/uzmock')

describe('Show Userzoom survey', () => {
	describe('verifies market', () => {
  test('verifies market equals en_US', () => {
  expect(checkMarket("en_US")).toBe(true)
	})
	  test('verifies if the market value doesnt equals en_US', () => {
  expect(checkMarket("en_UK")).toBe(false)
	})
	test('verifies if the market value is null', () => {
  expect(checkMarket("null")).toBeNull()
	})
	test('verifies if the market value is empty', () => {
  expect(checkMarket("")).toBe(false)
	})
	}
	)
	describe('verifies devicetype', () => {
  test('devicetype equals "large" or "none"', () => {
  expect(checkDeviceType("large","none")).toBe(true)
	})
	  test('verifies if devicetype doesnt equals medium', () => {
  expect(checkDeviceType("medium")).toBe(false)
	})
	test('verifies if devicetype is null', () => {
  expect(checkDeviceType("null")).toBeNull()
	})
	test('verifies if devicetype is empty', () => {
  expect(checkDeviceType("")).toBe(false)
	})
	})
	
	describe('check for uz cookie availability', () => {
  test('verifies UZ/foresee cookie availability', () => {
  expect(checkCookie("UZCk")).toBe(true)
   expect(checkCookie("fsr.r")).toBe(true)
	})
	 test('verifies cookie unavailability', () => {
   expect(checkCookie("")).toBe(false)
	})
	})
	
	describe('verifies context path', () => {
  test('Contextpath equals "/login"', () => {
  expect(checkContextPath("/login")).toBe(true)
	})
	  test('verifies if the market value doesnt equals en_US', () => {
  expect(checkContextPath("/logon")).toBe(false)
	})
	test('verifies if the market value is null', () => {
  expect(checkContextPath("null")).toBeNull()
	})
	test('verifies if the market value is empty', () => {
  expect(checkContextPath("")).toBe(false)
	})
	})
	describe('read/write storage', () => {
		test('storage type is not undefined and retrieve sessionstorage value', () => {
			expect(checkStorageType()).toBe(true)
			expect(Bootstrapper.readCookie("sessionStorage.uzloggedin")).toEqual("opentrue")
		})
		test('storage type is undefined', () => {
			expect(checkUndefinedStorageType()).toBe(false)
		})
		test('set sessionstorage value as openfalse', () => {
				expect(setSessionStorage("openfalse")).toBe(true)
			})
			test('not set sessionstorage value as openfalse', () => {
				expect(notSetSessionStorage("opentrue")).toBe(false)
			})
	})
	
	describe('read/write blueboxcookie into variable', () => {
		test('read blueboxcookie and assign to variable', () => {
			expect(assignBbcValue()).toBe(true)
		})
		test('blueboxcookie not assigned to variable', () => {
			expect(notAssignBbcValue()).toBe(false)
		})
	})
	
	describe('Display survey', () => {
		test('Survey active', () => {
			expect(Bootstrapper.UZSurvey("279FB59DA070E81180D80050569456CE", "789CB59DA070E81180D80050569456CE",Bootstrapper.readCookie("blueboxpublic"))).toEqual("surveyactive")
		})
		test('Survey inactive', () => {
			expect(Bootstrapper.UZSurvey("459FB59DA070E81180D80050569456CE", "689CB59DA070E81180D80050569456CE",Bootstrapper.readCookie("blueboxpublic"))).toEqual("notdisplayed")
		})
		test('UZ cookie created', () => {
			expect(Bootstrapper.createCookie("UZCk", "1", 30, ".americanexpress.com")).toEqual("cookiecreated")
		})
		test('UZ cookie not created', () => {
			expect(Bootstrapper.createCookie("UZCk", "1", 30, "")).toEqual("cookienotcreated")
		})
	})
	
})

describe('Identify open card users and set sessionstorage', () => {
		test('loggedin cookie available', () => {
			expect(Bootstrapper.checkCookie("amexsessioncookie")).toBe(true)
		})
		test('loggedin cookie not available', () => {
			expect(Bootstrapper.checkCookie("amexsessionccookie")).toBe(false)
		})
		test('storage type is not undefined', () => {
			expect(checkStorageType()).toBe(true)
		})
		test('storage type is undefined', () => {
			expect(checkUndefinedStorageType()).toBe(false)
		})
		test('sessionstorage cookie is undefined', () => {
			expect(undefinedSessionStorage()).toBe(true)
		})
		test('sessionstorage cookie is not undefined', () => {
			expect(definedSessionStorage()).toBe(false)
		})
		jest.useFakeTimers();
		describe('in the presence of loggedin cookie and sessionstorage undefined', () => {
			test('waits 2 second before checking for digitalData object value', () => {
				setTimeoutforDigitalData()
				expect(setTimeout).toHaveBeenCalledTimes(1);
				expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
			})
			describe('Check for digitalData object and expected card value ("business platinum card")', () => {
				test('digitalData object is not undefined/not null/not empty', () => {
					expect(checkDigitalData()).toBe(true)
				})
				test('digitalData object is undefined', () => {
					expect(checkUndefinedDigitalData()).toBe(false)
				})
				test('if digitalData object is defined and checking for products attribute defined/not null/not empty', () => {
					expect(checkDigitalDataProducts()).toBe(true)
				})
				test('if digitalData object is defined and checking for products attribute undefined', () => {
					expect(checkUndefinedDigitalDataProducts()).toBe(false)
				})
				test('if digitalData object is defined and checking for products attribute is null', () => {
					expect(checkNullDigitalDataProducts()).toBeNull
				})
				test('if digitalData object is defined and checking for products attribute is empty', () => {
					expect(checkEmptyDigitalDataProducts()).toBe(false)
					
				})
				
				
				test('if digitalData products attribute is defined, checking its length and for description attribute defined/not null/not empty', () => {
					expect(checkProductsDescription()).toBe(true)
				})
				test('if digitalData products attribute is defined and checking for description attribute undefined', () => {
					expect(checkUndefinedProductsDescription()).toBe(false)
				})
				test('if digitalData products attribute is defined and checking for description attribute is null', () => {
					expect(checkNullProductsDescription()).toBeNull
				})
				test('if digitalData products attribute is defined and checking for description attribute is empty', () => {
					expect(checkEmptyProductsDescription()).toBe(false)
					
				})
				test('if digitalData products description is defined/not null/not empty, convert to lowercase and match with expected card value ("business platinum card")', () => {
					expect(digitalData.products[0].description.toLowerCase()).toContain("business platinum card")
					digitalData.products[0].description="rewards platinum card"
				})
				test('if digitalData products description is defined/not null/not empty, convert to lowercase and doesnt match with the expected card value ("business platinum card")', () => {
					expect(digitalData.products[0].description.toLowerCase()).not.toContain("business platinum card")
					digitalData.products[0].description="business platinum card"
				})
				test('if "business platinum card" card then drop sessionstorage cookie as opentrue', () => {
						expect(setSessionStorageloggedin("opentrue")).toBe(true)
				})
				test('if "business platinum card" card then not set sessionstorage value as opentrue', () => {
						expect(notSetSessionStorageloggedin("openfalse")).toBe(false)
					})
			})
		})
})
-----------------------------
user.mock.js
const Storage={sessionStorage:{uzloggedin : "opentrue"}};
const sessionStorage={uzloggedin : "opentrue"}
const Bootstrapper={deviceType:["large","none"],checkCookie:function(s){
	if(s==='blueboxpublic' || s==='UZCk' || s==='fsr.r' || s==='amexsessioncookie'){
	return true;
	}else {
		return false;
	}
},readCookie:function(s){
	if(s=='UZCk'){
		return 'opentrue';
	}else if(s==="blueboxpublic"){
		return '73aa29ba92c8b7b144a2a3a7db61d390'
	}else if(s==="sessionStorage.uzloggedin"){
		return "opentrue";
	}else{
		return null
	}
},UZSurvey:function(a,b,c){
	if(a=="279FB59DA070E81180D80050569456CE" && b=="789CB59DA070E81180D80050569456CE" && c!=null){
		return "surveyactive"
	}else{
		return "notdisplayed"
	}
},createCookie:function(a,b,c,d){
	if(a!==null && b !==null && c!==null  && d!==null && a!=="" && b !=="" && c!==""  && d!==""){
		return "cookiecreated"
	}else{
		return "cookienotcreated"
	}
}};

const document={documentElement:{lang:"en_US"},location:{pathname:"/login"}}
const digitalData={pagename:{},products:[{description:"Business Platinum Card"}]}
function setUZStorageLoggedIn(){
	
}

module.exports={Bootstrapper, document,Storage,sessionStorage,setUZStorageLoggedIn,digitalData};

--------
  jest.config

  module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["__tests__/*.js?(x)","models/*.{js,jsx}","!models/_mocks_/*.{js,jsx}"]
}; 

---
  package.json

{
  "name": "Merchant-US-LP",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts":{
  "test":"jest"
  },
  "devDependencies": {
  "jest": "^23.4.1"
  }
}
