var ac= document.getElementById("AC");
var plusminus= document.getElementById("plus-minus");
var percent= document.getElementById("percent");
var divide= document.getElementById("divide");
var seven= document.getElementById("seven");
var eight= document.getElementById("eight");
var nine= document.getElementById("nine");
var multiply= document.getElementById("multiply");
var four= document.getElementById("four");
var five= document.getElementById("five");
var six= document.getElementById("six");
var minus= document.getElementById("minus");
var one= document.getElementById("one");
var two= document.getElementById("two");
var three= document.getElementById("three");
var plus= document.getElementById("plus");
var zero= document.getElementById("zero");
var decimal= document.getElementById("decimal");
var equalsto= document.getElementById("equalsto");

var output=document.getElementById("output");
console.log(output);



 equalsto.addEventListener("click",function(){ 
var str=output.innerHTML;

var result=eval(str);
output.innerHTML=result;}
);

AC.addEventListener("click",function(){output.innerHTML=""});
one.addEventListener("click",function(){output.innerHTML+="1"});
plusminus.addEventListener("click",function(){output.innerHTML="-"+output.innerHTML});
percent.addEventListener("click",function(){output.innerHTML+=" % "});
two.addEventListener("click",function(){output.innerHTML+="2"});
divide.addEventListener("click",function(){output.innerHTML+="/"});
seven.addEventListener("click",function(){output.innerHTML+="7"});
eight.addEventListener("click",function(){output.innerHTML+="8"});
nine.addEventListener("click",function(){output.innerHTML+="9"});
multiply.addEventListener("click",function(){output.innerHTML+="*"});
four.addEventListener("click",function(){output.innerHTML+="4"});
five.addEventListener("click",function(){output.innerHTML+="5"});
six.addEventListener("click",function(){output.innerHTML+="6"});
minus.addEventListener("click",function(){output.innerHTML+="-"});
three.addEventListener("click",function(){output.innerHTML+="3"});
plus.addEventListener("click",function(){output.innerHTML+="+"});
zero.addEventListener("click",function(){output.innerHTML+="0"});
decimal.addEventListener("click",function(){output.innerHTML+="."});

