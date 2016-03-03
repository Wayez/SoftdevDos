//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "dot" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

function clear() {
    ctx.clearRect(0, 0, 538, 538);
}

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
		radius = radius + 1;
    }    
    else {
		radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
		growing = false;
    else if ( radius == 0 ) {
		growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
	clear();
    //Q: What good might this do?
    window.cancelAnimationFrame( requestID );
    
    //var inits
    //...
    var logo = new Image();
	logo.src = "logo_dvd.jpg";
	var x = 100;
	var y = 100;
	var increasingX = true;
	var increasingY = false;

    //a function defined within a function, oh my!
    var dvdLogo = function() {
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
		//propulsion mechanism
		//...
	
		//Q: Why this here?
		requestID = window.requestAnimationFrame( dvdLogo );		
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );