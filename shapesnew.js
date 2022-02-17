var colorrandom;
var shaperandom;
var score;
var userscore=0;
var user1score=0;
var modal=document.getElementById("modal");
var scoreboard;
var scoreboard=0;
var check=0;
function output(){
	document.getElementById("answer").disabled=false;
	check++;
	if(score==0){
		check--;
	}
	
	$(document).ready(function(){
	var removable=$("img");
removable.remove();
});
var greensquare=0;
var redsquare=0;
var bluesquare=0;
var greencircle=0;
var redcircle=0;
var bluecircle=0;
var greenrectangle=0;
var redrectangle=0;
var bluerectangle=0;
var redoval=0;
var greenoval=0;
var blueoval=0;

var seconds=3;
var display=document.getElementById("display");
var timer=document.getElementById("count");
var ID=0;
timer.innerHTML="4";
ID=setInterval(function(){
	
	timer.innerHTML=seconds;

	seconds--;
	},1000);


var count=$("#total").val();
display.style.display="block";
timer.style.display="block";

for(var i=1;i<=count;i++){
	var display=document.getElementById("display");

	var random=Math.floor(Math.random()*4)+1;
	var round=Math.round(random);
	


	if (round==1){
		var display=document.getElementById("display");
		var random1=Math.floor(Math.random()*3)+1;
		var round1=Math.round(random1);
	if(round1==1){
		setTimeout(function(){display.innerHTML+=`<img  class="squareimggreen" src="https://www.codeproject.com/KB/HTML/1022374/square.png"   width="90px" height="80px">`;
		},0);
		greensquare++;
		}
		
    if(round1==2)	{
		setTimeout(function(){display.innerHTML+=`<img class="squareimgred" src="https://www.codeproject.com/KB/HTML/1022374/square.png" width="90px" height="80px">`;
		
       },0);
       redsquare++;
      }
    if(round1==3){
		setTimeout(function(){display.innerHTML+=`<img class="squareimgblue" src="https://www.codeproject.com/KB/HTML/1022374/square.png" width="90px" height="80px">`;
		
       },0);
		bluesquare++;
		}}

if(round==2){
		var random2=Math.floor(Math.random()*3)+1;
		var round2=Math.round(random2);
		
		if(round2==1){
			setTimeout(function (){	display.innerHTML+=`<img class="squareimggreen"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD3NkfHCCALOE0ACOZ35hPTMqGof6lwM3STvChG6UI4FmCSe-9xVytXdLw63pnZVgizI&usqp=CAU" width="90px" height="80px">`;
		
 },0);greencircle++;
			}
			if(round2==2){
			setTimeout(function(){	display.innerHTML+=`<img class="squareimgred"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD3NkfHCCALOE0ACOZ35hPTMqGof6lwM3STvChG6UI4FmCSe-9xVytXdLw63pnZVgizI&usqp=CAU" width="90px" height="80px">`;
		
 },0);redcircle++;
			}
			if(round2==3){
			setTimeout(function(){	display.innerHTML+=`<img class="squareimgblue"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD3NkfHCCALOE0ACOZ35hPTMqGof6lwM3STvChG6UI4FmCSe-9xVytXdLw63pnZVgizI&usqp=CAU" width="90px" height="80px">`;
		
 },0);
			bluecircle++;
			}}

			if(round==3){
		var random3=Math.floor(Math.random()*3)+1;
		var round3=Math.round(random3);
		
		if(round3==1){
		setTimeout(function(){display.innerHTML+=`<img  class="squareimggreen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_rectangle.svg/1280px-Red_rectangle.svg.png" width="120px" height="80px">`;
 },0);greenrectangle++;
		
	}

		if(round3==2){
		setTimeout(function(){display.innerHTML+=`<img  class="squareimgred" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_rectangle.svg/1280px-Red_rectangle.svg.png" width="120px" height="80px">`;
 },0);redrectangle++;
		}
		if(round3==3){
		setTimeout(function(){display.innerHTML+=`<img  class="squareimgblue" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_rectangle.svg/1280px-Red_rectangle.svg.png" width="120px" height="80px">`;
 },0);bluerectangle++;
		}}

if(round==4){
		var random4=Math.floor(Math.random()*3)+1;
		var round4=Math.round(random4);
		
	if(round4==1){	
	setTimeout(function(){	display.innerHTML+=`<img class="squareimggreen" src="https://www.seekpng.com/png/detail/90-902130_red-oval-images-circle.png" width="100px" height="70px">`;
},0);
greenoval++;
}
	if(round4==2){	
	setTimeout(function(){	display.innerHTML+=`<img class="squareimgred" src="https://www.seekpng.com/png/detail/90-902130_red-oval-images-circle.png" width="100px" height="70px">`;
},0);redoval++;
}
	if(round4==3){	
	setTimeout(function(){	display.innerHTML+=`<img class="squareimgblue" src="https://www.seekpng.com/png/detail/90-902130_red-oval-images-circle.png" width="100px" height="70px">`;
},0);blueoval++;
}}

}
var modal=document.getElementById("modal");

setTimeout(function(){
	display.style.display="none"
    timer.style.display="none";
    modal.style.display="block";
    window.clearInterval(ID);
    var color=document.getElementById("color");
    var shapes=document.getElementById("shapes");
		 colorrandom=Math.floor(Math.random()*3)+1;
		shaperandom=Math.floor(Math.random()*4)+1;
		
		
		if(colorrandom==1){
			color.innerHTML="green";}
		if(colorrandom==2){
			color.innerHTML="red";
		}
		if(colorrandom==3){
color.innerHTML="blue";
}
if(shaperandom==1){
	shapes.innerHTML="squares";
	
}
if(shaperandom==2){
	shapes.innerHTML="rectangles";

}if(shaperandom==3){
	shapes.innerHTML="circles";
}
if(shaperandom==4){
	shapes.innerHTML="ovals";
}},4000);

var answer1=document.getElementById("answer");
modal.style.display="none";
answer1.value="";
result.innerHTML="";

$("#tick").on("click",function(){
document.getElementById("answer").disabled=true;
score=0;
	var colorrandom1=colorrandom;
	document.getElementById("final").style.display="block";
	var shaperandom1=shaperandom;
 var result=document.getElementById("result");
var userscore=document.getElementById("userscore");
	var answer1=document.getElementById("answer");
	var answer=answer1.value;
	
			
if(colorrandom1==1 && shaperandom1==1){
       
		if(answer==greensquare){
           score=1; 
          user1score++;
          
          result.innerHTML="CORRECT";
			
		}
		else{
			
			result.innerHTML="WRONG";}}
else if(colorrandom1==1 && shaperandom1==2){
      
		if(answer==greenrectangle){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{
			result.innerHTML="WRONG";}}
else if(colorrandom1==1 && shaperandom1==3){

		if(answer==greencircle){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==1 && shaperandom1==4){

		if(answer==greenoval){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==2 && shaperandom1==1){

		if(answer==redsquare){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==2 && shaperandom1==2){

		if(answer==redrectangle){
			score=1;
			user1score++;
          
		result.innerHTML="CORRECT";
	}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==2 && shaperandom1==3){

		if(answer==redcircle){
			score=1;
			user1score++;
          

			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==2 && shaperandom1==4){

		if(answer==redoval){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==3&& shaperandom1==1){

		if(answer==bluesquare){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==3 && shaperandom1==2){

		if(answer==bluerectangle){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
			
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==3 && shaperandom1==3){

		if(answer==bluecircle){
			score=1;
			user1score++;
          
			result.innerHTML="CORRECT";
		}
		else{score=0;
			result.innerHTML="WRONG";}}
	else if(colorrandom1==3 && shaperandom1==4){

		if(answer==blueoval){
			score=1;
			user1score++;
          
		result.innerHTML="CORRECT";
	}
		else{
			result.innerHTML="WRONG";}}


				
					if(score!=0){
					scoreboard++;
					
					


if(scoreboard>check){
	
	while(scoreboard>check){
		scoreboard--;
	
}}}
document.getElementById("userscore").innerHTML=scoreboard;
	

});

}