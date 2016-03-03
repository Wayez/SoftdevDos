var pic = document.getElementById("vimage");
var dotButton = document.getElementById( "dot" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );
var ctx = c.getContext("2d");

var intervalID;
var r = 1;
var increasing = true;

dotButton.setAttribute("click", dot);
dvdButton.setAttribute("click", dot);
stopButton.setAttribute("click", stop);

var dot = function(){
	window.clearInterval(intervalID);
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", "250");
    c.setAttribute("cy", "250");
    c.setAttribute("fill", "green");
    c.setAttribute("stroke", "black");
    
    var grow = function() {
		c.setAttribute("r", r);
		if(r == 0 || r == 250){
			increasing = !increasing;
		}
		if(increasing){
			r++;
		}
		else {
			r--;
		}
    };
    
    intervalID = window.setInterval(grow, 16);
};

var stop = function(){
	window.clearInterval(intervalID);
}