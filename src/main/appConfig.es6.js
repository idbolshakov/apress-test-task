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
				height: 85
			}			
		},
			
		leftPan: {
				
            verticalMotion: 60,
			image: 'static/img/scales/pan.svg',
		
			measurement: {
			
				x: 595,
				y: 487,
				width: 415,
				height: 125,
                offset: 35
			}
		},	
			
		rightPan: {
				
            verticalMotion: 60,
			image: 'static/img/scales/pan.svg',
		
			measurement: {
			
				x: 1080,
				y: 487,
				width: 415,
				height: 125,
                offset: 35
			}				
		},

        arrow: {

            measurement: {

                x: 1046, 
                y: 570,
                width: 7,
                height: 50
            }
        }
	},
	
	// конфиг чемоданов
	trunks: [
		
		{
            id: 1,
            weight: 50,
			image: 'static/img/trunks/trunk1.svg',	
						
			measurement: {		
				
				x: 10,
				y: 600,
				width: 100,
				height: 100,
			},		
					
			action: 0
		},
				
		{
            id: 2,
            weight: 80,
			image: 'static/img/trunks/trunk2.svg',		
					
			measurement: {		
				
				x: 60,
				y: 620,
				width: 75,
				height: 75,
			},		
					
			action: 0
		},
		
		{
            id: 3,
            weight: 40,
			image: 'static/img/trunks/trunk3.svg',		
					
			measurement: {		
				
				x: 130,
				y: 590,
				width: 75,
				height: 100,
			},		
					
			action: 0
		},	
		
		{
            id: 4,
            weight: 30,
			image: 'static/img/trunks/trunk4.svg',		
					
			measurement: {		
				
				x: 200,
				y: 605,
				width: 120,
				height: 90,
			},		
					
			action: 0
		},
		
		{
            id: 5,
            weight: 25,
			image: 'static/img/trunks/trunk5.svg',		
					
			measurement: {		
				
				x: 170,
				y: 650,
				width: 50,
				height: 50,
			},		
					
			action: 0
		},	
		
		{
            id: 6,
            weight: 25,
			image: 'static/img/trunks/trunk6.svg',		
					
			measurement: {		
				
				x: 270,
				y: 609,
				width: 90,
				height: 90,
			},		
					
			action: 0
		},
		
		{
            id: 7,
            weight: 40,
			image: 'static/img/trunks/trunk7.svg',		
					
			measurement: {		
				
				x: 350,
				y: 470,
				width: 70,
				height: 220,
			},		
					
			action: 0
		},
		
		{
            id: 8,
            weight: 60,
			image: 'static/img/trunks/trunk8.svg',		
					
			measurement: {		
				
				x: 350,
				y: 610,
				width: 95,
				height: 85,
			},		
					
			action: 0
		},
		
		{
            id: 9,
            weight: 65,
			image: 'static/img/trunks/trunk9.svg',		
					
			measurement: {		
				
				x: 400,
				y: 625,
				width: 75,
				height: 70,
			},		
					
			action: 0
		},
		
		{
            id: 10,
            weight: 70,
			image: 'static/img/trunks/trunk10.svg',		
					
			measurement: {		
				
				x: 440,
				y: 575,
				width: 90,
				height: 120,
			},		
					
			action: 0
		},
		
		{
            id: 11,
            weight: 65,
			image: 'static/img/trunks/trunk11.svg',		
					
			measurement: {		
				
				x: 490,
				y: 615,
				width: 50,
				height: 85,
			},		
					
			action: 0
		},
		
		{
            id: 12,
            weight: 50,
			image: 'static/img/trunks/trunk12.svg',		
					
			measurement: {		
				
				x: 535,
				y: 555,
				width: 80,
				height: 140,
			},		
					
			action: 0
		}																							
	]
};

export default appConfig;

