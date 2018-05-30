const data = [
	{
		"name": "Solar",
		"hierarchies": [
			{
				"name": "Alpha",
				"planets": [
					{
						"name": "Mercury",
						"radiusKM": "2439.7",
						"rotationVelocityKMH": "10.892",
						"aphelionAU": "0.466697",
						"perihelionAU": "0.307499",
						"orbitVelocityKMS": "47.362"
					},
					{
						"name": "Venus",
						"radiusKM": "6051.8",
						"rotationVelocityKMH": "6.52",
						"aphelionAU": "0.728213",
						"perihelionAU": "0.718440",
						"orbitVelocityKMS": "35.02"
					},
				],
				"star": {
					"name":"sol",
					"radiusKM": "9000",
					"rotationVelocityKMH": "700"
				}
			}
		]
	}
]

//const svg = d3.select("body").append("svg").attr("width",`${width}%`).attr("height",`${height}%`);

const universe = d3.select('#universe');
//var galaxy = d3.select('#galaxy');

const system = d3.select('#galaxy').selectAll('div')
	.data(data)
		.enter().append('div').classed("system", true)
		
const hierarchy = system.selectAll('.system')
	.data(function(d) { console.log(d.hierarchies); return d.hierarchies })
		.enter().append('div').classed("hierarchy", true)
		
const planets = hierarchy.selectAll('.hierarchy')
	.data(function(d, i) { console.log(d); return d.planets })
		.enter().append('div').classed("planet", true)






/*
galaxy.selectAll('div')
	.data(data)
		.enter().append('div').classed("system", true)
	.selectAll('.hierarchy')
	.data(function(d) { console.log(d); return d.hierarchies })
		.enter().append('div').classed("hierarchy", true)
*/
	


/*
system.selectAll('div')
	.data(data)
		.enter().append('div').classed("hierarchy", true)

let star = system.selectAll('.hierarchy')
	.data(function(d) { console.log(d); return d.hierarchies.star })
		.enter().append('div').classed({"star": true})
*/



/*
svg.selectAll("rect")
	.data(data)
	.enter().append("rect")
	
	// chain on attributes and classes as needed, looping over the data
	.attr("height",function(d,i){ return d; })
	.attr("width","50")
	.attr("x",function(d,i){ return i * 10; })
	.attr("y",function(d,i){ return height-(d * 10); })
	.attr("fill", "blue");
*/