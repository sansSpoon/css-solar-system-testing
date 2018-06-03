const d3System = function(){

	// Create the return module and its configuration
	const module = {},
				config = {
					ids:{
						toggle2d: document.getElementById('toggle-2d'),
						toggle3d: document.getElementById('toggle-3d'),
					},
				};
		    data   = [{"hierarchies":[{"planets":[{"satellites":[{"name":"Moon","radiusKM":1738.1,"rotationVelocityKMH":16.6572,"apoapsisAU":0.00270993162,"periapsisAU":0.00242383129,"orbitVelocityKMS":1.022,"_id":"5b0f8e02da4a86e83cbf6276"}],"_id":"5b0f8c4315315be81de5fd01","name":"Earth","radiusKM":6371,"rotationVelocityKMH":1674.4,"aphelionAU":1.017,"perihelionAU":0.98327,"orbitVelocityKMS":29.78,"__v":1},{"satellites":[],"_id":"5b0f8c4315315be81de5fd02","name":"Mars","radiusKM":3389.5,"rotationVelocityKMH":868.22,"aphelionAU":1.666,"perihelionAU":1.382,"orbitVelocityKMS":24.007,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd03","name":"Jupiter","radiusKM":69911,"rotationVelocityKMH":45000,"aphelionAU":5.4588,"perihelionAU":4.9501,"orbitVelocityKMS":13.07,"__v":0}],"name":"alpha","star":{"_id":"5b0f8c4315315be81de5fcfe","name":"The Sun","radiusKM":695700,"rotationVelocityKMH":7189,"__v":0},"_id":"5b0f8ceeda4a86e83cbf6274"}],"_id":"5b0f8ceeda4a86e83cbf6275","name":"Solar System","__v":0}];

	const system = d3.select('#galaxy').selectAll('div')
	.data(data).enter()
		.append('div').attr('class', 'system')
		.attr('id', function(d) { return d.name.replace(' ','-').toLowerCase(); })

	// ! Hierarchy
	const hierarchy = system.selectAll('.system')
		.data(function(d) { return d.hierarchies }).enter()
			.append('div').attr('class','hierarchy')

	// ! Star
	const star = hierarchy.selectAll('.star')
		.data(function(d) { return [d.star] }).enter()
			.append('div')
				.attrs({
					'class': 'star',
					'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					'data-type': 'star',
				})
				.styles(function(d) { return _mass(d, type = 'star'); })

	// ! Planets
	const planets = hierarchy.selectAll('.hierarchy')
		.data(function(d) { return d.planets }).enter()
			.append('div')
				.attrs({
					'class': 'orbit',
					'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					'data-type': 'orbit-planet',
				})
				.styles(function(d) { return _orbit(d); })
			.append('div')
				.attrs({
					'class': 'planet',
					'data-type': 'planet',
				})
				.styles(function(d) { return _mass(d, type = 'planet'); })
				//.text(function(d, i) { return d.name })
	
	// ! Satellites
	const satellites = planets.selectAll('.planet')
		.data(function(d) { return d.satellites }).enter()
			.append('div')
				.attrs({
					'class': 'orbit',
					'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					'data-type': 'orbit-satellite',
				})
				.styles(function(d) { return _orbit(d); })
			.append('div')
				.attrs({
					'class': 'satellite',
					'data-type': 'satellite',	
					})
				.styles(function(d) { return _mass(d, type = 'satellite'); })
				//.text(function(d, i) { return d.name })

	// ! Private methods
	function _orbit(d) {
		let unit = 'px';
		let AU = 149597870.7; //km
		let scale = 100000;
		const a = d.hasOwnProperty('aphelionAU') ? d.aphelionAU : d.apoapsisAU;
		const p = d.hasOwnProperty('perihelionAU') ? d.perihelionAU : d.periapsisAU;
		
		let calc = Math.round(((a + p / 2) * AU) / scale);
		
		return {
			'width': `${calc}${unit}`,
			'height': `${calc}${unit}`,
		};
	}

	
	function _mass(d) {
		let unit = 'px';
		let scale = 1000;
		let calc = Math.round((d.radiusKM * 2) / scale);
		
		console.log(d, type);
		
		let mass = {
			'width': function(d) { return (`${calc}${unit}`); },
			'height': function(d) { return (`${calc}${unit}`); },
		};
		
		if(d.hasOwnProperty('orbitVelocityKMS')) {
			mass['margin-right'] = function(d) { return (`${-Math.round(calc/2)}${unit}`); };
		};
		
		return mass;
	}
	
	// ! Private Events
	config.ids.toggle2d.onclick = () => {
		system.classed('animate-2d', function() { return !d3.select(this).classed('animate-2d') });
	}
	config.ids.toggle3d.onclick = () => {
		system.classed('animate-3d', function() { return !d3.select(this).classed('animate-3d') });
	}

	// ! Add functionality to the module's init()-ialising method
	function init() {
		//_moduleMethod();
	}

	// ! Add init, and any other methods, to obj
	module["init"] = init;

	// ! Return the the module as a Public API
	return module;

}();


// When the DOM is ready, run the module
/*
document.addEventListener("DOMContentLoaded", function() {
	d3System.init();
});
*/
