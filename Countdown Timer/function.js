

const time=document.getElementById("timer");


var reqdTime= new Date("jan 9,2023 10:00:00").getTime();

var x = setInterval(function(){

var currTime=new Date().getTime();

var diff = reqdTime - currTime;

var days = Math.floor(diff/(24 * 60 * 60 *1000));

var hours = Math.floor(diff%(24 * 60 * 60 *1000)/(60 * 60 *1000));

var minutes = Math.floor(diff%(60 * 60 *1000)/(60 *1000));

var seconds = Math.floor(diff%(60 *1000)/(1000));

seconds = seconds < 10 ? "0"+seconds : seconds;
time.innerHTML=days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
},1000);

