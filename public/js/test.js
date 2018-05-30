const data = [1,2,3,4];
const width = 100;
const height = 100;

const svg = d3.select("body").append("svg").attr("width",`${width}%`).attr("height",`${height}%`);

svg.selectAll("rect")
	.data(data)
	.enter().append("rect")
	
	// chain on attributes and classes as needed, looping over the data
	.attr("height",function(d,i){ return d; })
	.attr("width","50")
	.attr("x",function(d,i){ return i * 10; })
	.attr("y",function(d,i){ return height-(d * 10); })
	.attr("fill", "blue");