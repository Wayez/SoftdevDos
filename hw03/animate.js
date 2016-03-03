var c = document.getElementById("playground");
var s = document.getElementById("dot");
var v = document.getElementById("dvd");
var b = document.getElementById("stop");
var ctx = c.getContext("2d");

//Variables to keep track of radius
var r;
var increasing;
//variables to keep track of dvd
var x;
var y;
var increasingX;
var increasingY;

var request;

//Begins by running clear funtion
clear();
//Listens to stop button
b.addEventListener("click", stop);
//Listens to start button
s.addEventListener("click", function(){
	r = 1;
	increasing = true;
	dot();
});
//Listens to dvd button
d.addEventListener("click", function(){
	x = 269;
	y = 269;
	increasingX = true;
	increasingY = true;
	dvd();
});


function dot(){
	//console.log(r);
	stop();
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

	request = window.requestAnimationFrame(dot);
}

function dvd(){
	stop();
	var logo = new Image();
	logo.src = "logo_dvd.jpg";
	logo.width = logo.width / 4;
	logo.height = logo.height / 4;
	ctx.drawImage(logo, x, y, logo.width, logo.height);
	if (increasingX){
		x++;
	}
	if (increasingY){
		y++;
	}
	if (x < 1 || x + logo.width > 537){
		increasingX = !increasingX;
	}
	if (y < 1 || y + logo.width > 537){
		increasingY = !increasingY;
	}
	
	request = window.requestAnimationFrame(dvd);
}

function stop(){
	window.cancelAnimationFrame(request);
}