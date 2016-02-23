var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//Begin drawing
ctx.beginPath();
//Set Line size to 50
ctx.lineWidth="50";
//Begin line at point (0,0), top left corner
ctx.moveTo(0,0);
//Move line to point (269, 269), the center
ctx.lineTo(269, 269);
//Move line to point (0, 538), bottom left corner
ctx.lineTo(0, 538);
//Set the fill color to blue
ctx.fillStyle = "#0000FF";
//Fill the Enclosed area with blue
ctx.fill();
//Close the triangle we just made
ctx.closePath();
//Set line color to purple
ctx.strokeStyle="#990099";
//Draw the lines we just created with set color and size
ctx.stroke();

//Begin drawing
ctx.beginPath();
//Set Line size to 50
ctx.lineWidth="50";
//Begin line at point (0, 538)
ctx.moveTo(0,538);
//Move line to point (269, 269)
ctx.lineTo(269, 269);
//Move line to point (538, 538)
ctx.lineTo(538, 538);
//Set the fill color to red
ctx.fillStyle = "#FF0000";
//Fill the Enclosed area with red
ctx.fill();
//Close the triangle we just made
ctx.closePath();
//Draw the lines we just created with set color and size
ctx.stroke();

//Begin drawing
ctx.beginPath();
//Set Line size to 50
ctx.lineWidth="50";
//Begin line at point (538, 538)
ctx.moveTo(538,538);
//Move line to point (269, 269), the center
ctx.lineTo(269, 269);
//Move line to point (538, 0)
ctx.lineTo(538, 0);
//Set the fill color to green
ctx.fillStyle = "#006600";
//Fill the Enclosed area with green
ctx.fill();
//Close the triangle we just made
ctx.closePath();
//Draw the lines we just created with set color and size
ctx.stroke();

//Begin drawing
ctx.beginPath();
//Set Line size to 50
ctx.lineWidth="50";
//Begin line at point (538, 538)
ctx.moveTo(538,0);
//Move line to point (269, 269), the center
ctx.lineTo(269, 269);
//Move line to point (0, 0)
ctx.lineTo(0, 0);
//Set the fill color to yellow
ctx.fillStyle = "#FFFF00";
//Fill the Enclosed area with yellow
ctx.fill();
//Close the triangle we just made
ctx.closePath();
//Draw the lines we just created with set color and size
ctx.stroke();
