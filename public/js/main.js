'use strict';

const d3System = function(){

	// Create the return module and its configuration
	const module = {},
				config = {
					ids:{
						//universe: document.getElementById('universe'),
						toggle2d: document.getElementById('toggle-2d'),
						toggle3d: document.getElementById('toggle-3d'),
						starScale: document.getElementById('starScale'),
						planetScale: document.getElementById('planetScale'),
						orbitScale: document.getElementById('orbitScale'),
						heliosphere: document.getElementById('heliosphere'),
						sScale: document.getElementById('sScale'),
						sOrbit: document.getElementById('sOrbit'),
					},
					d3s:{
						galaxy: d3.select('#galaxy'),
					},
				},
				//data = [{"hierarchies":[{"planets":[{"satellites":[],"_id":"5b0f8c4315315be81de5fcff","name":"Mercury","radiusKM":2439.7,"rotationVelocityKMH":10.892,"aphelionAU":0.466697,"perihelionAU":0.307499,"orbitVelocityKMS":47.362,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd00","name":"Venus","radiusKM":6051.8,"rotationVelocityKMH":6.52,"aphelionAU":0.728213,"perihelionAU":0.71844,"orbitVelocityKMS":35.02,"__v":0},{"satellites":[{"name":"Moon","radiusKM":1738.1,"rotationVelocityKMH":16.6572,"apoapsisAU":0.00270993162,"periapsisAU":0.00242383129,"orbitVelocityKMS":1.022,"_id":"5b0f8e02da4a86e83cbf6276"}],"_id":"5b0f8c4315315be81de5fd01","name":"Earth","radiusKM":6371,"rotationVelocityKMH":1674.4,"aphelionAU":1.017,"perihelionAU":0.98327,"orbitVelocityKMS":29.78,"__v":1},{"satellites":[],"_id":"5b0f8c4315315be81de5fd02","name":"Mars","radiusKM":3389.5,"rotationVelocityKMH":868.22,"aphelionAU":1.666,"perihelionAU":1.382,"orbitVelocityKMS":24.007,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd03","name":"Jupiter","radiusKM":69911,"rotationVelocityKMH":45000,"aphelionAU":5.4588,"perihelionAU":4.9501,"orbitVelocityKMS":13.07,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd04","name":"Saturn","radiusKM":58232,"rotationVelocityKMH":35500,"aphelionAU":10.1238,"perihelionAU":9.0412,"orbitVelocityKMS":9.68,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd05","name":"Uranus","radiusKM":25362,"rotationVelocityKMH":9320,"aphelionAU":20.11,"perihelionAU":18.33,"orbitVelocityKMS":6.8,"__v":0},{"satellites":[],"_id":"5b0f8c4315315be81de5fd06","name":"Neptune","radiusKM":24622,"rotationVelocityKMH":9650,"aphelionAU":30.33,"perihelionAU":29.81,"orbitVelocityKMS":5.43,"__v":0}],"name":"alpha","star":{"_id":"5b0f8c4315315be81de5fcfe","name":"Sol","radiusKM":695700,"rotationVelocityKMH":7189,"__v":0},"_id":"5b0f8ceeda4a86e83cbf6274"}],"_id":"5b0f8ceeda4a86e83cbf6275","name":"Solar System","__v":0}];
				data = [
  {
    "hierarchies": [
      {
        "planets": [
          {
            "satellites": [],
            "_id": "5b0f8c4315315be81de5fcff",
            "name": "Mercury",
            "radiusKM": 2439.7,
            "rotationVelocityKMH": 10.892,
            "aphelionAU": 0.466697,
            "perihelionAU": 0.307499,
            "orbitVelocityKMS": 47.362,
            "__v": 0
          },
          {
            "satellites": [],
            "_id": "5b0f8c4315315be81de5fd00",
            "name": "Venus",
            "radiusKM": 6051.8,
            "rotationVelocityKMH": 6.52,
            "aphelionAU": 0.728213,
            "perihelionAU": 0.71844,
            "orbitVelocityKMS": 35.02,
            "__v": 0
          },
          {
            "satellites": [
            ],
            "_id": "5b0f8c4315315be81de5fd01",
            "name": "Earth",
            "radiusKM": 6371,
            "rotationVelocityKMH": 1674.4,
            "aphelionAU": 1.017,
            "perihelionAU": 0.98327,
            "orbitVelocityKMS": 29.78,
            "__v": 1
          },
          {
            "satellites": [
              
              ],
            "_id": "5b0f8c4315315be81de5fd02",
            "name": "Mars",
            "radiusKM": 3389.5,
            "rotationVelocityKMH": 868.22,
            "aphelionAU": 1.666,
            "perihelionAU": 1.382,
            "orbitVelocityKMS": 24.007,
            "__v": 0
          },
          {
            "satellites": [],
            "_id": "5b0f8c4315315be81de5fd03",
            "name": "Jupiter",
            "radiusKM": 69911,
            "rotationVelocityKMH": 45000,
            "aphelionAU": 5.4588,
            "perihelionAU": 4.9501,
            "orbitVelocityKMS": 13.07,
            "__v": 0
          },
          {
            "satellites": [],
            "_id": "5b0f8c4315315be81de5fd04",
            "name": "Saturn",
            "radiusKM": 58232,
            "rotationVelocityKMH": 35500,
            "aphelionAU": 10.1238,
            "perihelionAU": 9.0412,
            "orbitVelocityKMS": 9.68,
            "__v": 0
          },
          {
            "satellites": [{
                "name": "Moon",
                "radiusKM": 1738.1,
                "rotationVelocityKMH": 16.6572,
                "apoapsisAU": 0.00270993162,
                "periapsisAU": 0.00242383129,
                "orbitVelocityKMS": 1.022,
                "_id": "5b0f8e02da4a86e83cbf6276"
              },
              {
                "name": "Moon 2",
                "radiusKM": 2300,
                "rotationVelocityKMH": 16.6572,
                "apoapsisAU": 0.05,
                "periapsisAU": 0.05,
                "orbitVelocityKMS": 2,
                "_id": "5b0f8e02da4a86e83cbf6276"
              }],
            "_id": "5b0f8c4315315be81de5fd05",
            "name": "Uranus",
            "radiusKM": 25362,
            "rotationVelocityKMH": 9320,
            "aphelionAU": 20.11,
            "perihelionAU": 18.33,
            "orbitVelocityKMS": 6.8,
            "__v": 0
          },
          {
            "satellites": [],
            "_id": "5b0f8c4315315be81de5fd06",
            "name": "Neptune",
            "radiusKM": 24622,
            "rotationVelocityKMH": 9650,
            "aphelionAU": 30.33,
            "perihelionAU": 29.81,
            "orbitVelocityKMS": 5.43,
            "__v": 0
          }
        ],
        "name": "alpha",
        "star": {
          "_id": "5b0f8c4315315be81de5fcfe",
          "name": "Sol",
          "radiusKM": 695700,
          "rotationVelocityKMH": 7189,
          "__v": 0
        },
        "_id": "5b0f8ceeda4a86e83cbf6274"
      }
    ],
    "_id": "5b0f8ceeda4a86e83cbf6275",
    "name": "Solar System",
    "__v": 0
  }
];

	// Max planetary orbit
	const planetMaxOrbit = Math.max(...data[0].hierarchies[0].planets.map(_apsisAvg));
	console.log(planetMaxOrbit);
	
	// Count of planets
	const planetCount = data[0].hierarchies[0].planets.length;
	console.log(planetCount);

	// Scale Planet Orbits
	let orbitsScaled = d3.scaleLinear()
		.domain([0, planetMaxOrbit])
		.range([data[0].hierarchies[0].star.radiusKM / 100000 * config.ids.starScale.value, config.ids.heliosphere.value]);
		
	function _rescale() {
		orbitsScaled.range([data[0].hierarchies[0].star.radiusKM / 100000 * config.ids.starScale.value, config.ids.heliosphere.value]);
	}

	// returns a position: x that is n percent between y0 and y1
	// As orbits are x only, y values are fixed to 0(start) - 1(end)
	function _lerp(n, x0, x1) {
		const y0 = 1;
		const y1 = 2;
		const x = ((y1 - n)*x0 + (n - y0)*x1) / (y1 - y0);

		return x;
	}
	
	// Kepler's 3rd Law
	function _kepler3(Rp) {
		const Tp = 1.0 * Math.pow((Rp/1.0), 3/2);
		return Tp;
	}

	// Average out a body's orbit and apply a scale
	function _apsisAvg(body) {
		const s = body.hasOwnProperty('aphelionAU') ? 10 : 1495.97871; // *10 is just to have easier numbers to work with
		const a = body.hasOwnProperty('aphelionAU') ? body.aphelionAU : body.apoapsisAU;
		const p = body.hasOwnProperty('perihelionAU') ? body.perihelionAU : body.periapsisAU;

		return Math.round((a + p) / 2 * s);
	}

 //// STAR /////
 ///////////////

	// Scale Star
	function _massStar(d) {
		let unit = '%';
		let calc = Math.round(d.radiusKM / 100000 * config.ids.starScale.value);
		
		return {
			'width': `${calc}${unit}`,
			'height': `${calc}${unit}`,
		};
	}

 //// PLANET /////
 /////////////////

	// Apply lerp to planet orbits
	function _orbitPlanet(d, i, nodes) {
		const unit = '%';
		const orbit = _apsisAvg(d);
		const evenOrbit = Math.round((planetMaxOrbit/planetCount) * (i + 1));
		const orbitDuration = _kepler3(orbit);
		let scaledOrbit = Math.round(orbitsScaled(_lerp(config.ids.orbitScale.value, orbit, evenOrbit)));
		
		console.log(`${orbit} - ${evenOrbit} - ${scaledOrbit} - ${d.name}`);
		
		return {
			'width': `${scaledOrbit}${unit}`,
			'height': `${scaledOrbit}${unit}`,
			'animation-duration': `${parseFloat(orbitDuration/4).toFixed(2)}s`,
		};
	}
	
	// Scale Planet
	function _massPlanet(d) {
		
		let unit = 'px';
		let scale = 1000;
		let calc = Math.round((d.radiusKM) / scale * config.ids.planetScale.value);
		
		const orbit = _apsisAvg(d);
		const orbitDuration = _kepler3(orbit);
		
		return {
				'width': `${calc}${unit}`,
				'height': `${calc}${unit}`,
				'margin-right': `${-Math.round(calc/2)}${unit}`,
				'animation-duration': `${parseFloat(orbitDuration/4).toFixed(2)}s`,
			};
	}

 //// SATELLITE /////
 ////////////////////

	// Apply lerp to satellite orbits
	function _orbitSatellite(d, i, nodes) {
		const unit = 'px';
		const planetMass = Math.round(d3.select(this.parentNode).datum().radiusKM / 1000 * config.ids.planetScale.value);
		const orbit = _apsisAvg(d);
		const orbitCount = d3.select(this.parentNode).datum().satellites.length;
		const orbitMax = Math.max(...d3.select(this.parentNode).datum().satellites.map(_apsisAvg));
		const evenOrbit = Math.round((orbitMax/orbitCount) * (i + 1));
		let scaledOrbit = Math.round(_lerp(config.ids.sOrbit.value, orbit, evenOrbit));
		
		console.log(`${orbit} - ${evenOrbit} - ${scaledOrbit} - ${d.name}`);
		//console.log(`${orbit} - ${orbitCount} - ${orbitMax} - ${d.name}`);
		
		return {
			'width': `${scaledOrbit+planetMass}${unit}`,
			'height': `${scaledOrbit+planetMass}${unit}`,
			'left': `${-(scaledOrbit)/2}${unit}`,
			'top': `${-(scaledOrbit)/2}${unit}`,
		};
	}
	
	// Scale Satellite
	function _massSatellite(d) {
		
		let unit = 'px';
		let scale = 1000;
		let calc = Math.round((d.radiusKM) / scale * config.ids.sScale.value);
		
		return {
				'width': `${calc}${unit}`,
				'height': `${calc}${unit}`,
				'margin-right': `${-Math.round(calc/2)}${unit}`
			};
	}

//// Main Render ////
/////////////////////

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
				.attr('class', 'system')
				.attr('id', function(d) { return d.name.replace(' ','-').toLowerCase(); })
			.merge(system) // enter and update


		// ! Render Hierarchies
		// --------------------
	
		// data join
		let hierarchy = system.selectAll('.hierarchy')
			.data(function(d) { return d.hierarchies });

		// remove old hierarchies
		hierarchy.exit().remove();

		// add and update new hierarchies
		hierarchy = hierarchy.enter()
				.append('div')
				.attr('class','hierarchy')
			.merge(hierarchy);


		// ! Render Stars
		// --------------

		// data join
		let star = hierarchy.selectAll('.star')
			.data(function(d) { return [d.star] })
			
		star
			.transition()
			.duration(1000)
			.styles(_massStar)
			
		// remove old stars
		star.exit().remove();
		
		// add and update new stars
		star = star.enter()
				.append('div')
				.attrs({
					'class': 'star',
					'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
				})
				.styles(_massStar)
			.merge(star)


		// ! Render Planets
		// ----------------

		// data join
		let pOrbit = hierarchy.selectAll('.orbit').data(function(d) { return d.planets })

		// update orbits
		pOrbit
			.transition()
			.duration(1000)
			.styles(_orbitPlanet)

		// remove old orbits
		pOrbit.exit().remove();

		// add new orbits
		pOrbit = pOrbit.enter()
				.append('div')
					.attrs({
						'class': 'orbit',
						'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					})
					.styles(_orbitPlanet)
				.merge(pOrbit)


		// data join
		let planet = pOrbit.selectAll('.planet').data(function(d) { return [d] })

		// update planets
		planet
			.transition()
			.duration(1000)
			.styles(_massPlanet)

		// remove old planets
		planet.exit().remove();

		// add new planets
		planet = planet.enter()
				.append('div')
					.attrs({'class': 'planet'})
					.styles(_massPlanet)
			.merge(planet)

			
			
		// ! Render Satellites
		// -------------------


		// data join
		let sOrbit = planet.selectAll('.orbit-sat').data(function(d) { return d.satellites })

		// update orbits
		sOrbit
			.transition()
			.duration(1000)
			.styles(_orbitSatellite)

		// remove old orbits
		sOrbit.exit().remove();

		// add new orbits
		sOrbit = sOrbit.enter()
				.append('div')
					.attrs({
						'class': 'orbit-sat',
						'id': function(d) { return d.name.replace(' ','-').toLowerCase(); },
					})
					.styles(_orbitSatellite)
				.merge(sOrbit)

		// data join
		let satellite = sOrbit.selectAll('.satellite').data(function(d) { return [d] })

		// update satellite
		satellite
			.transition()
			.duration(1000)
			.styles(_massSatellite)

		// remove old satellite
		satellite.exit().remove();

		// add new planets
		satellite = satellite.enter()
				.append('div')
					.attrs({'class': 'satellite'})
					.styles(_massSatellite)
			.merge(satellite)


	}


	// ! Private Events
	config.ids.toggle2d.onclick = () => {
		config.d3s.galaxy.selectAll('.system').classed('animate-2d', function() { return !d3.select(this).classed('animate-2d') });
	}
	config.ids.toggle3d.onclick = () => {
		config.d3s.galaxy.selectAll('.system').classed('animate-3d', function() { return !d3.select(this).classed('animate-3d') });
	}
	
	config.ids.starScale.addEventListener('change', function() {
		_rescale()
		_render(data);
	});
	
	config.ids.planetScale.addEventListener('change', function() {
		_render(data);
	});
	
	config.ids.orbitScale.addEventListener('change', function() {
		_render(data);
	});
	
	config.ids.sScale.addEventListener('change', function() {
		_render(data);
	});
	
	config.ids.sOrbit.addEventListener('change', function() {
		_render(data);
	});
	
	config.ids.heliosphere.addEventListener('change', function() {
		_rescale()
		_render(data);
	});

	// ! Add functionality to the module's init()-ialising method
	function init() {
		_render(data);
	}

	// ! Add init, and any other methods, to obj
	module['init'] = init;

	// ! Return the the module as a Public API
	return module;

}();


// When the DOM is ready, run the module

document.addEventListener('DOMContentLoaded', function() {
	d3System.init();
});

