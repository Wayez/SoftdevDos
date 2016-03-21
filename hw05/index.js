var states = ['IA','NH','NV','SC','AL', 'AR', "CO", 'GA', "MA", "MN", "OK", "TN", "TE", "VT", "VG", "LA", "NE",
"KS", "ME", "MS", "MI", "FL", "IL", "MO", "NC", "OH", "AZ", "ID", "UT", "AK", "HA", "WA", "WI", "WY", "NY", "MD",
"CT", "DE", "PA", "RI", "IN", "GU", "WV", "KY", "OR", "VI", "PR", "CA", "MT", "NJ", "ND", "NM", "SD", "DC"];
var rep_total = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 51, 25, 33, 25, 36, 130, 214,
    156, 71, 107, 143, 75, 23, 33, 16, 25, 101, 86, 14, 247, 95, 55, 21, 189, 24, 83, 7, 29, 55, 61, 7, 60,
    475, 21, 126, 18, 34, 20, 20];
var rep_allotted = [44, 24, 34, 53, 53, 32, 66, 100, 91, 77, 38, 66, 219, 16, 94, 47, 24, 33, 22, 34, 127, 198, 135,
    64, 104, 141];

var calcDel = function(state){
    if (states.indexOf(state) < rep_allotted.length){
        return rep_allotted[states.indexOf(state)];
    }
    return 0;
}
d3.select(".democrat")
    .selectAll("div")
        .data(states)
    .enter().append("div")
        .style("background-color", function(d) {
            if (states.indexOf(d) >= rep_allotted.length){
                return "#BFB7B6";
            };
            return "#1834B1";
        })
        .style("width", function(d) {
            return 80 + rep_total[states.indexOf(d)] * 2 + "px"; })
        .text(function(d) { return d + " - " + calcDel(d) + "/" + rep_total[states.indexOf(d)]; })
