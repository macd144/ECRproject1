
function  number(value){
	document.form1.result.value +=value;
}
function cle(value){
	document.form1.result.value = value;
}
function evalua(){
	document.form1.result.value = eval(document.form1.result.value);
}

function very(){
	var age;
	var text;
	age=Number(document.getElementById('check').value);
	if (age <= 18) {
		text="Your are not qualified to continue";
		document.getElementById('error').innerHTML=text;
	}
	else {
		text="You are qualified, Please continue";
		document.getElementById('gud').innerHTML=text;
	}
	

}
function Submit(){
	var name;
	var age;
	name=document.getElementById('username').value;
	age=Number(document.getElementById('check').value)
	document.getElementById('outcome').innerHTML="Hello"+" "+name+" "+"You are"+" "+age+" "+"Years Old"+" "+"and qualified to Drive";
}
//var CountDownDate=new Date("Aug 18, 2018 15:00:25").getTime();
//Setting date we're counting from

function startcounter(){
var years = document.getElementById("yr").value;
var month = document.getElementById('month').value;
var day = document.getElementById('day').value;
var hour = document.getElementById('hour').value;
var mins = document.getElementById('mins').value;
var secs = document.getElementById('secs').value;

var time =month+" "+day+","+years+" "+hour+":"+mins+":"+secs;
CountDownDate = new Date(time).getTime();

//console.log(CountDownDate);
//Updating the countdown every second
var x=setInterval(function(){
	//Todays Date and time
	var now = new Date().getTime();
	//console.log(now);
	var distance=CountDownDate-now;

	var days=Math.floor(distance/(1000*60*60*24)); //86,400,000 millisec   1 day
	var hours=Math.floor((distance % (1000*60*60*24)) / (1000*60*60));    //24 hours
	var min = Math.floor((distance % (1000*60*60)) / (1000*60));  //mins
	var sec = Math.floor((distance % (1000 * 60)) / 1000);
	var msec = Math.floor(distance / 1000);

document.getElementById('counttimer').innerHTML= days + " : " + hours + " : " + min + " : " + sec+":"+msec;
},1000)
}
