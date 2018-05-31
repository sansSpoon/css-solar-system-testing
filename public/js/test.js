const data = [
	{
		"name": "foo",
		"hierarchies": [
			{
				"name": "Alpha",
				"children": [
					{
						"name": "A1",
						"grandChildren": [
							{
								"name": "A1-a"
							}
						]
					},
					{
						"name": "A2"
					}
				],
				"property": {
					"name":"Sub-Alpha"
				}
			},
			{
				"name": "Bravo",
				"children": [
					{
						"name": "B1"
					},
					{
						"name": "B2"
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
	.data(function(d, i) { console.log(d); return d.hierarchies })
		.enter().append('div').classed("hierarchy", true)
		.text(function(d, i) { return d.name })
		
const property = hierarchy.selectAll('.property')
	.data(function(d) { return [d.property] })
		.enter().append('div').classed("property", true)
		.text(function(d) { return d.name })
		
const children = hierarchy.selectAll('.hierarchy')
	.data(function(d, i) { return d.children })
		.enter().append('div').classed("child", true)
		.text(function(d, i) { return d.name })

