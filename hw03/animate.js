var c = document.getElementById("playground");
var s = document.getElementById("dot");
var d = document.getElementById("dvd");
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
	x = 100;
	y = 100;
	increasingX = true;
	increasingY = false;
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
	//logo.width = logo.width / 4;
	//logo.height = logo.height / 4;
	console.log(x + logo.width / 4);
	console.log(y + logo.height / 4);
	ctx.drawImage(logo, x, y, logo.width / 4, logo.height / 4);
	if (increasingX){
		x++;
	}
	else{
		x--;
	}
	if (increasingY){
		y++;
	}
	else{
		y--;
	}
	if (x < -17 || x + (logo.width / 4) == 555){
		increasingX = !increasingX;
	}
	if (y < -19 || y + (logo.width / 4) == 607){
		increasingY = !increasingY;
	}

	request = window.requestAnimationFrame(dvd);
}

function stop(){
	window.cancelAnimationFrame(request);
}