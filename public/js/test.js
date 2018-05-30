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


const system = d3.select('#galaxy').selectAll('div')
	.data(data)
		.enter().append('div').classed("system", true)
		
const hierarchy = system.selectAll('.system')
	.data(function(d) { console.log(d.hierarchies); return d.hierarchies })
		.enter().append('div').classed("hierarchy", true)

		
const planets = hierarchy.selectAll('.hierarchy')
	.data(function(d, i) { return d.planets })
		.enter().append('div').classed("planet", true)
		.style('width', function(d, i) { return `${d.radiusKM / 100}px` })
		.style('height', function(d, i) { return `${d.radiusKM / 100}px` })
		.text(function(d, i) { return d.name })

const sun = hierarchy.selectAll('.hierarchy')
	.data(function(d, i) { console.log(d); return d })
		.enter().append('div').classed("sun", true)





//const sun = system.selectAll('.hierarchy')
//	.data(function(d, i) { console.log(d.hierarchies); return d.hierarchies })
//		.enter().append('div').classed("sun", true)
//		.style('width', function(d, i) { return `${d.aphelionAU * 100}px` })
//		.style('height', function(d, i) { return `${d.aphelionAU * 100}px` })
//		.text(function(d, i) { return d.name })
