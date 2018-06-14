const d3System = function(){

	// Create the return module and its configuration
	const module = {},
				config = {
					ids:{
						//universe: document.getElementById('universe'),
						toggle2d: document.getElementById('toggle-2d'),
						toggle3d: document.getElementById('toggle-3d'),
						starScale: document.getElementById('starInput'),
					},
					d3s:{
						galaxy: d3.select('#galaxy'),
					},
				},
				data = [{"hierarchies":[{"planets":[{"satellites":[],"_id":"5b0f8c4315315be81de5fcff","name":"Mercury","radiusKM":2439.7,"rotationVelocityKMH":10.892,"aphelionAU":0.466697,"perihelionAU":0.307499,"orbitVelocityKMS":47.362,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd00","name":"Venus","radiusKM":6051.8,"rotationVelocityKMH":6.52,"aphelionAU":0.728213,"perihelionAU":0.71844,"orbitVelocityKMS":35.02,"__v":0},{"satellites":[{"name":"Moon","radiusKM":1738.1,"rotationVelocityKMH":16.6572,"apoapsisAU":0.00270993162,"periapsisAU":0.00242383129,"orbitVelocityKMS":1.022,"_id":"5b0f8e02da4a86e83cbf6276"}],"_id":"5b0f8c4315315be81de5fd01","name":"Earth","radiusKM":6371,"rotationVelocityKMH":1674.4,"aphelionAU":1.017,"perihelionAU":0.98327,"orbitVelocityKMS":29.78,"__v":1},{"satellites":[],"_id":"5b0f8c4315315be81de5fd02","name":"Mars","radiusKM":3389.5,"rotationVelocityKMH":868.22,"aphelionAU":1.666,"perihelionAU":1.382,"orbitVelocityKMS":24.007,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd03","name":"Jupiter","radiusKM":69911,"rotationVelocityKMH":45000,"aphelionAU":5.4588,"perihelionAU":4.9501,"orbitVelocityKMS":13.07,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd04","name":"Saturn","radiusKM":58232,"rotationVelocityKMH":35500,"aphelionAU":10.1238,"perihelionAU":9.0412,"orbitVelocityKMS":9.68,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd05","name":"Uranus","radiusKM":25362,"rotationVelocityKMH":9320,"aphelionAU":20.11,"perihelionAU":18.33,"orbitVelocityKMS":6.8,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd06","name":"Neptune","radiusKM":24622,"rotationVelocityKMH":9650,"aphelionAU":30.33,"perihelionAU":29.81,"orbitVelocityKMS":5.43,"__v":0}],"name":"alpha","star":{"_id":"5b0f8c4315315be81de5fcfe","name":"Sol","radiusKM":695700,"rotationVelocityKMH":7189,"__v":0},"_id":"5b0f8ceeda4a86e83cbf6274"}],"_id":"5b0f8ceeda4a86e83cbf6275","name":"Solar System","__v":0}];

	const orbits = data[0].hierarchies[0].planets.map((orbit) => {
		return (((orbit.aphelionAU + orbit.perihelionAU) /2) * 10)
	});

	// THIS HAS TO CHANGE
	let starfoo = data[0].hierarchies[0].star.radiusKM / config.ids.starScale.value;

	// Scale
	const orbitsScaled = d3.scaleLinear()
		.domain([0, d3.max(orbits)])
		.range([starfoo, 90]);


	// Main Render
	function _render(data) {


		// ! Render Systems
		// ----------------
		
		// data join
		let system = config.d3s.galaxy.selectAll('.system')
			.data(data);
		
		// remove old systems
		system.exit().remove();

		// add and update new systems
		system = system.enter() // enter add div
				.append('div')
			.merge(system) // enter and update
				.attr('class', 'system')
				.attr('id', function(d) { return d.name.replace(' ','-').toLowerCase(); })


		// ! Render Hierarchies
		// --------------------
	
		// data join
		let hierarchy = system.selectAll('.system')
			.data(function(d) { return d.hierarchies })

		// remove old hierarchies
		hierarchy.exit().remove();

		// add and update new hierarchies
		hierarchy = hierarchy.enter()
				.append('div')
			.merge(hierarchy)
				.attr('class','hierarchy')


		// ! Render Stars
		// --------------

		// data join
		let star = hierarchy.selectAll('.star')
			.data(function(d) { return [d.star] })
			
		// remove old stars
		star.exit().remove();
		
		// add and update new stars
		star = star.enter()
				.append('div')
			.merge(star)
				.attrs({
					'class': 'star',
					'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
				})
				.styles(function(d) { return _mass(d, type = 'star'); })


		// ! Render Planets
		// ----------------

		// data join
		let planets = hierarchy.selectAll('.hierarchy')
			.data(function(d) { return d.planets })
		
		// remove old planets
		planets.exit().remove();
			
		// add and update new planets
		planets = planets.enter()
				.append('div')
			.merge(planets)
					.attrs({
						'class': 'orbit',
						'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					})
					.styles(function(d) {
						const parent = d3.select(this.parentNode).datum();
						return _orbit(d, parent);
					})
				.append('div')
					.attrs({'class': 'planet'})
					.styles(function(d) { return _mass(d, type = 'planet'); })
					//.text(function(d, i) { return d.name })
		
		console.log('planets done');
		
		// ! Satellites
		const satellites = planets.selectAll('.planet')
			.data(function(d) { return d.satellites }).enter()
				.append('div')
					.attrs({
						'class': 'orbit',
						'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					})
					.styles(function(d) {
						const parent = d3.select(this.parentNode).datum();
						return _orbit(d, parent);
					})
				.append('div')
					.attrs({'class': 'satellite'})
					.styles(function(d) { return _mass(d, type = 'satellite'); })
					//.text(function(d, i) { return d.name })
					
		console.log('satellites done');
	
	}



	// ! Private methods
	function _orbit(d, parent) {
		let unit = '%';
		let AU = 1495; //149597870.7
		let scale = 100;
		
		//console.log(parent);
		
		const star = parent.hasOwnProperty('star') ? parent.star.radiusKM / 100000 : 1
		
		const a = d.hasOwnProperty('aphelionAU') ? d.aphelionAU : d.apoapsisAU;
		const p = d.hasOwnProperty('perihelionAU') ? d.perihelionAU : d.periapsisAU;
		
		//let calc = Math.round((((a + p / 2) * AU) / scale) + star);
		let calc = (((a + p) / 2) * 10);
		//let calc = Math.round((a + p) / 2);
		
		
		let foo = Math.round(orbitsScaled(calc));
		
		console.log(`calc = ${calc}`);
		console.log(`foo = ${foo}`);
		
		return {
			'width': `${foo}${unit}`,
			'height': `${foo}${unit}`,
		};
		
		
	}

	
	function _mass(d, type) {
		
		console.log(`starfoo in mass = ${starfoo}`)
		
		let unit = 'px';
		let scale = type === 'star' ? 100000 : 1000;
		let calc = Math.round((d.radiusKM) / scale);
		
		//let foo = Math.round(orbitsScaled(calc));
		
		let mass = {};
		//console.log(type);
		
		if(type === 'star') {
			console.log(`loggging ${starfoo}`);
			mass = {
				'width': function(d) { return (`${starfoo}%`); },
				'height': function(d) { return (`${starfoo}%`); },
			};
		} else {
			mass = {
				'width': function(d) { return (`${calc}${unit}`); },
				'height': function(d) { return (`${calc}${unit}`); },
			};
		}
		
		if(d.hasOwnProperty('orbitVelocityKMS')) {
			mass['margin-right'] = function(d) { return (`${-Math.round(calc/2)}${unit}`); };
		};
		
		return mass;
	}
	
/*
	function _universeSize() {
		console.log(config.ids.universe.offsetWidth)
	}
*/
	
	// ! Private Events
	config.ids.toggle2d.onclick = () => {
		config.d3s.galaxy.selectAll('.system').classed('animate-2d', function() { return !d3.select(this).classed('animate-2d') });
	}
	config.ids.toggle3d.onclick = () => {
		config.d3s.galaxy.selectAll('.system').classed('animate-3d', function() { return !d3.select(this).classed('animate-3d') });
	}
	
	config.ids.starScale.onchange = () => {
		console.log(config.ids.starScale.value);
		starfoo = data[0].hierarchies[0].star.radiusKM / config.ids.starScale.value;
		console.log(starfoo);
		//_render(data);
		
		
	}

	// ! Add functionality to the module's init()-ialising method
	function init() {
		//_moduleMethod();
		//_universeSize();
		_render(data);
	}

	// ! Add init, and any other methods, to obj
	module["init"] = init;

	// ! Return the the module as a Public API
	return module;

}();


// When the DOM is ready, run the module

document.addEventListener("DOMContentLoaded", function() {
	d3System.init();
});

