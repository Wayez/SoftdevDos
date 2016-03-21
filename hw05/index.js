var states = ['IA','NH','SC','NV','AL','AK','AR','GA','MA','MN','OK','TN','TX','VT','VA','KS','KY','LA',
'ME','PR','HI','ID','MI','MS','VI','DC','GU','WY','FL','IL','MO','NC','MP','OH'];
var rep_total = [30,23,50,30,50,28,40,76,42,38,43,58,155,16,49,40,46,46,23,23,19,32,59,40,9,19,9,29,99,69,52,
  72,9,66];
var rep_allotted = [23,20,50,28,50,28,39,72,42,38,40,58,155,16,46,40,46,41,23,23,19,32,59,37,0,19,
  0,11,99,65,30,71,9,66];

var data = [4, 8, 15, 16, 23, 42];
d3.select(".republican")
    .selectAll("div")
         .data(states)
    .enter().append("div")
         .style("width", function(d) {
	          return rep_total[states.indexOf(d)] * 5 + "px"; })
         .text(function(d) { return d; });
