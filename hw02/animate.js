var c = document.getElementById("playground");
var b = document.getElementById("clear");
var s = document.getElementById("start");
var ctx = c.getContext("2d");

//Variables to keep track of radius
var r;
var increasing;

//Begins by running clear funtion
clear();
//Listens to clear button and runs clear function to reset canvas
b.addEventListener("click", clear);
//Listens to start button
s.addEventListener("click", function(){
	r = 1;
	increasing = true;
	dot();
});

function dot(){
	console.log(r);
	clear();
	ctx.beginPath();
	//Makes small dot
	ctx.arc(269, 269, r, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#00FF00";
	ctx.fill();
	//If circle is increasing, inclement the radius.
	if (increasing){
		r++;
	}
	else {
		r--;
	}
	//If radius is too large or too small, start decreasing or increasing the circle
	if (r > 268 || r < 2){
		increasing = !increasing;
	}

	window.requestAnimationFrame(dot);
}

function clear(){
	//clears canvas and sets a white background
	ctx.clearRect(0, 0, 538, 538);
	//draws black border surrouding canvas
	ctx.strokeStyle = "#000000";
	ctx.strokeRect(0, 0, 538, 538);
}
