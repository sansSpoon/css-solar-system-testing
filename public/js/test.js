const data = [
	{
		"name": "foo",
		"hierarchies": [
			{
				"name": "Alpha",
				"children": [
					{
						"name": "A1",
						"r": 50,
						"0": 150,
						"grandChildren": [
							{
								"name": "A1-a"
							}
						]
					},
					{
						"name": "A2",
						"r": 40,
						"o": 50,
						"grandChildren": []
					}
				],
				"property": {
					"name":"Sub-Alpha"
					"r": 200
				}
			},
			{
				"name": "Bravo",
				"children": [
					{
						"name": "B1",
						"r": 80,
						"o": 250,
						"grandChildren": []
					},
					{
						"name": "B2",
						"r": 30,
						"r": 300,
						"grandChildren": []
					}
				],
				"property": {
					"name":"Sub-Bravo"
				}
			}
		]
	}
]

const system = d3.select('body').selectAll('div')
	.data(data)
		.enter().append('div').classed("system", true)
		
const hierarchy = system.selectAll('.system')
	.data(function(d, i) { return d.hierarchies })
		.enter().append('div').classed("hierarchy", true)
		.text(function(d, i) { return d.name })

// Sun
const property = hierarchy.selectAll('.property')
	.data(function(d) { return [d.property] })
		.enter().append('div').classed("property", true)
		.text(function(d) { return d.name })

// Planets
const children = hierarchy.selectAll('.hierarchy')
	.data(function(d, i) { return d.children })
		.enter().append('div').classed("child-container", true).append('div').classed("child-body", true)
		.text(function(d, i) { return d.name })

// moons
const grandChildren = children.selectAll('.child-body')
	.data(function(d, i) { console.log(d); return d.grandChildren })
		.enter().append('div').classed("grand-child-container", true).append('div').classed("grand-child-body", true)
		.text(function(d, i) { return d.name })
