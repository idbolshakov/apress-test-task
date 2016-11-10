'use strict';

let appConfig = {
	
	// конфиг отображения canvas'a
	canvas: {
		
		image: 'static/img/background.svg',
		
		width: 1500,
		height: 700
	},
	
	// конфиг весов
	scales: {
		
		screen: {
			
			image: 'static/img/scales/screen.svg',
		
			measurement: {
			
				x: 985,
				y: 482,
				width: 120,
				height: 130
			}			
		},			
		
		base: {
			
			image: 'static/img/scales/base.svg',
		
			measurement: {
			
				x: 600,
				y: 605,
				width: 900,
				height: 75
			}			
		},
			
		leftPan: {
				
			image: 'static/img/scales/pan.svg',
		
			measurement: {
			
				x: 595,
				y: 487,
				width: 415,
				height: 125
			}
		},	
			
		rightPan: {
				
			image: 'static/img/scales/pan.svg',
		
			measurement: {
			
				x: 1080,
				y: 487,
				width: 415,
				height: 125
			}				
		}
	},
	
	// конфиг чемоданов
	trunks: [
		
		{
			image: 'static/img/trunks/trunk1.svg',	
						
			measurement: {		
				
				x: 10,
				y: 600,
				width: 100,
				height: 100,
			},		
					
			state: 0
		},
				
		{
			image: 'static/img/trunks/trunk2.svg',		
					
			measurement: {		
				
				x: 60,
				y: 620,
				width: 75,
				height: 75,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk3.svg',		
					
			measurement: {		
				
				x: 130,
				y: 590,
				width: 75,
				height: 100,
			},		
					
			state: 0
		},	
		
		{
			image: 'static/img/trunks/trunk4.svg',		
					
			measurement: {		
				
				x: 200,
				y: 605,
				width: 120,
				height: 90,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk5.svg',		
					
			measurement: {		
				
				x: 170,
				y: 650,
				width: 50,
				height: 50,
			},		
					
			state: 0
		},	
		
		{
			image: 'static/img/trunks/trunk6.svg',		
					
			measurement: {		
				
				x: 270,
				y: 609,
				width: 90,
				height: 90,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk7.svg',		
					
			measurement: {		
				
				x: 350,
				y: 470,
				width: 70,
				height: 220,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk8.svg',		
					
			measurement: {		
				
				x: 350,
				y: 610,
				width: 95,
				height: 85,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk9.svg',		
					
			measurement: {		
				
				x: 400,
				y: 625,
				width: 75,
				height: 70,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk10.svg',		
					
			measurement: {		
				
				x: 440,
				y: 575,
				width: 90,
				height: 120,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk11.svg',		
					
			measurement: {		
				
				x: 490,
				y: 615,
				width: 50,
				height: 85,
			},		
					
			state: 0
		},
		
		{
			image: 'static/img/trunks/trunk12.svg',		
					
			measurement: {		
				
				x: 535,
				y: 555,
				width: 80,
				height: 140,
			},		
					
			state: 0
		}																							
	]
};

export default appConfig;

