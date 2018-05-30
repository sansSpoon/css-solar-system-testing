const data = [
	{
		"hierarchies": [
			{
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
				"name": "Alpha",
				"star": {
					"name":"sol",
					"radiusKM": "9000",
					"rotationVelocityKMH": "700",
				},
				"_id": "5b0d458a12e7573e65dcaa6f"
			}
		],
		"_id": "5b0d454c12e7573e65dcaa6d",
		"name": "Solar",
		"__v": 1
	}
]

const svg = d3.select("body").append("svg").attr("width",`${width}%`).attr("height",`${height}%`);

const universe = d3.select("#universe");
const galaxy = d3.select("#galaxy");
const system = d3.select("#system");
const hierarchy

svg.selectAll("rect")
	.data(data)
	.enter().append("rect")
	
	// chain on attributes and classes as needed, looping over the data
	.attr("height",function(d,i){ return d; })
	.attr("width","50")
	.attr("x",function(d,i){ return i * 10; })
	.attr("y",function(d,i){ return height-(d * 10); })
	.attr("fill", "blue");