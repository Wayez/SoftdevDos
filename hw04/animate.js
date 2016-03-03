//doing this pretty late, dont have time to comment. sorry
var pic = document.getElementById("vimage");
var b = document.getElementById( "circle" );
var d = document.getElementById( "dvd" );
var s = document.getElementById( "stop" );

var intervalID;
var r = 1;
var increasing = true;

var dot = function(){
	//console.log(r);
	stop();
	//console.log("lol");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", "250");
	c.setAttribute("cy", "250");
	c.setAttribute("r", r);
	c.setAttribute("fill", "green");
	c.setAttribute("stroke", "black");
	pic.appendChild(c);
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

var dvd = function(){
	//stop();
	console.log("oh");
	var x = 100;
	var y = 100;
	var increasingX = true;
	var increasingY = false;
	var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
	c.setAttribute("xlink:href", "logo_dvd.jpg");
	c.setAttribute("x", x);
	c.setAttribute("y", y);
	c.setAttribute("height", "100");
	c.setAttribute("width", "100");
	//var v = c.getAttribute("xlink:href");
	console.log(v);
	pic.appendChild(c);
	var move = function(){
		c.setAttribute("x", x);
		c.setAttribute("y", y);
		//console.log(v);
		//console.log(v);
		if (x < -17 || x + 30 == 517){
			increasingX = !increasingX;
		}
		if (y < -19 || y + 30 == 569){
			increasingY = !increasingY;
		}
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
	};
	
	intervalID = setInterval(move, 16);
};

var stop = function(){
	window.clearInterval(intervalID);
};

b.addEventListener("click", dot);
d.addEventListener("click", dvd);
s.addEventListener("click", stop);