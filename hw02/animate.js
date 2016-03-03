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

//Listens to canvas for mouse clicks
c.addEventListener("click", function(event){
    /*Found this method online. Previously, the dots I created did not match up with my mouse arrow.
      Considering the rectangle boundaries seemed to have fixed that problem.*/
    var rect = c.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    //Runs dot function with adjusted coordinates
    dot(x, y);
}, false);

function dot(x, y){
    ctx.beginPath();
    //Makes small dot 
    ctx.arc(x , y , 5, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#0000FF";
    ctx.fill();
    //Since OldX is initialized to -1, the first dot I create will not run these commands.
    if (oldX >= 0){
	//Creates line from previous dot to current dot
	ctx.beginPath();
	ctx.moveTo(oldX, oldY);
	ctx.lineTo(x, y);
	ctx.strokeStyle = "#FF0000";
	ctx.stroke();
    }
    //Current x and y coordinates become oldX and oldY for next dot
    oldX = x;
    oldY = y;
}

function clear(){
    //clears canvas and sets a white background
    ctx.clearRect(0, 0, 538, 538);
    //draws black border surrouding canvas
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, 538, 538);
    //Initializes oldX to -1
    oldX = -1;
    //Initializes oldY to -1
    oldY = -1;
    
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
