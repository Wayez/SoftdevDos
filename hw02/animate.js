var c = document.getElementById("playground");
var b = document.getElementById("clear");
var ctx = c.getContext("2d");

//Variables to keep track of last coordinate
var oldX;
var oldY;

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
}