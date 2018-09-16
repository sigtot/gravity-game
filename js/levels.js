var levels = [
	// Level 1
	{
		drops: [
			[400,400]
		],

		goals: [
			{
				x: 100,
				y: 450,

				w: 200,
				h: 20 
			}
		],

		boxes: [
			{
				x: -20,
				y: 0,

				w: 20,
				h: 200,
			}
		],

		cannons: [
			{
				posX: 800,
				posY: 50,
				velX: -0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [],

		cleared: false
	},

	// Level 2
	{
		drops: [
			[600,400],
			[250,250]
		],

		goals: [
			{
				x: 50,
				y: 50,

				w: 150,
				h: 20 
			}
		],

		boxes: [],

		cannons: [
			{
				posX: 800,
				posY: 200,
				velX: -0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [],

		cleared: false
	},

	// Level 3
	{
		drops: [
			[650,300],
			[650,400]
		],

		goals: [
			{
				x: 50,
				y: 50,

				w: 150,
				h: 20 
			}
		],

		boxes: [
			{
				x: 450,
				y: 40,

				w: 300,
				h: 20 
			},

			{
				x: 50,
				y: 30,

				w: 150,
				h: 20 
			},

			{
				x: 575,
				y: 480,

				w: 150,
				h: 20 
			}

		],

		cannons: [
			{
				posX: 1,
				posY: 150,
				velX: 0.001,
				velY: 0.0005
			}
		],

		objects: [
			{
				posX: 400,
				posY: 100,
				mass: 3000000,
				massMult: 1000,
				static: true
			}
		],

		rings: [],

		cleared: false
	},

	// Level 4
	{
		drops: [
			[250,150],
			[250,350],
			[550,350]
		],

		goals: [
			{
				x: 350,
				y: 470,

				w: 100,
				h: 20 
			}
		],

		boxes: [],

		cannons: [
			{
				posX: 400,
				posY: 1,
				velX: 0,
				velY: 0.001
			}
		],

		objects: [],

		rings: [
			{
				posX:600,
				posY:200,
				w:100,
				horisontal:true
			}
		],

		cleared: false
	},

	// Level 5
	{
		drops: [
			[350,110],
			[700,200],
			[700,370]
		],

		goals: [
			{
				x: 200,
				y: 320,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			{
				x: 650,
				y: 505,

				w: 150,
				h: 20
			}
		],

		cannons: [
			{
				posX: 0,
				posY: 0,
				velX: 0.0005,
				velY: 0.00035
			}
		],

		objects: [],

		rings: [
			{
				posX:600,
				posY:80,
				w:100,
				horisontal:false
			},

			{
				posX:300,
				posY:320,
				w:100,
				horisontal:false
			}
		],

		cleared: false
	},

	// Level 6
	{
		drops: [
			[100,110],
			[300,110],
			[500,110],
			[700,110]
		],

		goals: [
			{
				x: 750,
				y: 200,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			{
				x: 25,
				y: 150,

				w: 750,
				h: 20
			},

			{
				x: 25,
				y: 330,

				w: 750,
				h: 20
			}
		],

		cannons: [
			{
				posX: 0,
				posY: 250,
				velX: 0.001,
				velY: 0
			}
		],

		objects: [
			{
				posX: 400,
				posY: 390,
				mass: 30000000,
				massMult: 1000,
				static: true
			}
		],

		rings: [],

		cleared: false
	},

	// Level 7
	{
		drops: [
			[120,60],
			[300,220],
			[720,130]
		],

		goals: [
			{
				x: 750,
				y: 200,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			// First barrier
			{
				x: 250,
				y: 25,

				w: 20,
				h: 125,
			},

			{
				x: 250,
				y: 250,

				w: 20,
				h: 225
			},

			// Second barrier
			{
				x: 500,
				y: 25,

				w: 20,
				h: 225,
			},

			{
				x: 500,
				y: 350,

				w: 20,
				h: 125
			},

			// Top and bottom barriers
			{
				x: 545,
				y: 25,

				w: 230,
				h: 20,
			},

			{
				x: 545,
				y: 455,

				w: 230,
				h: 20
			}
		],

		cannons: [
			{
				posX: 0,
				posY: 400,
				velX: 0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [],

		cleared: false
	},

	// Level 8
	{
		drops: [
			[400,150],
			[420,350],
			[380,350],
		],

		goals: [
			{
				x: 300,
				y: 5,

				w: 200,
				h: 20 
			}
		],

		boxes: [
			{
				x: -30,
				y: 250,

				w: 20,
				h: 200,
			},
		],

		cannons: [
			{
				posX: 380,
				posY: 30,
				velX: -0.0007,
				velY: 0.0005
			}
		],

		objects: [],

		rings: [
			// Left side
			{
				posX:270,
				posY:150,
				w:70,
				horisontal:true
			},

			{
				posX:260,
				posY:350,
				w:70,
				horisontal:true
			},

			// Right side
			{
				posX:460,
				posY:150,
				w:70,
				horisontal:true
			},

			{
				posX:470,
				posY:350,
				w:70,
				horisontal:true
			}
		],

		cleared: false
	},

	// Level 9
	{
		drops: [
			[150,170],
			[130,90],
			[550,150],
			[670,400],
			[200,420],

		],

		goals: [
			{
				x: 550,
				y: 475,

				w: 100,
				h: 20 
			}
		],

		boxes: [
			{
				x: -30,
				y: 300,

				w: 20,
				h: 200,
			},
		],

		cannons: [
			{
				posX: 800,
				posY: 350,
				velX: -0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [
			{
				posX:460,
				posY:290,
				w:70,
				horisontal:false
			},

			{
				posX:330,
				posY:30,
				w:70,
				horisontal:false
			}
		],

		cleared: false
	},

	// Level 10
	{
		drops: [
			[700,100],
			[600,400]
		],

		goals: [
			{
				x: 420,
				y: 200,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			{
				x: 5,
				y: 175,

				w: 20,
				h: 150,
			},
		],

		cannons: [
			{
				posX: 380,
				posY: 250,
				velX: -0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [
			{
				posX:50,
				posY:200,
				w:100,
				horisontal:false
			},
		],

		cleared: false
	},

	// Level 11
	{
		drops: [
			[120,70],
			[280,190],
			[340,250],
			[550,100],
			[700,100],
			[90,460],
			[400,400],
			[680,390],
			[250,320],
			[90,250],

		],

		goals: [
			{
				x: 760,
				y: 250,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			{
				x: 810,
				y: 150,

				w: 20,
				h: 200,
			},

			// Bottom left star
			{
				x: 120,
				y: 280,

				w: 20,
				h: 40,
			},

			{
				x: 120,
				y: 380,

				w: 20,
				h: 40,
			},

			{
				x: 60,
				y: 340,

				w: 40,
				h: 20,
			},

			{
				x: 160,
				y: 340,

				w: 40,
				h: 20,
			},

			{
				x: 120,
				y: 340,

				w: 20,
				h: 20,
			},

			// Top right thing
			{
				x: 540,
				y: 20,

				w: 170,
				h: 20,
			},

			{
				x: 580,
				y: 50,

				w: 90,
				h: 20,
			},
		],

		cannons: [
			{
				posX: 0,
				posY: 200,
				velX: 0.0005,
				velY: 0
			}
		],

		objects: [],

		rings: [
			{
				posX:150,
				posY:150,
				w:50,
				horisontal:false
			},

			{
				posX:335,
				posY:110,
				w:50,
				horisontal:true
			},

			{
				posX:450,
				posY:380,
				w:50,
				horisontal:true
			},
		],

		cleared: false
	},

	// Level 12
	{
		drops: [
			[720,290],
			[720,210],
			[660,400],
			[660,100]
		],

		goals: [
			{
				x: 480,
				y: 380,

				w: 20,
				h: 100 
			},

			{
				x: 480,
				y: 20,

				w: 20,
				h: 100 
			}
		],

		boxes: [
			// Catcher
			{
				x: 820,
				y: 150,

				w: 20,
				h: 200,
			},

			// Top
			{
				x: 200,
				y: 20,

				w: 20,
				h: 100,
			},

			{
				x: 240,
				y: 20,

				w: 20,
				h: 120,
			},

			{
				x: 280,
				y: 20,

				w: 20,
				h: 140,
			},

			{
				x: 320,
				y: 20,

				w: 20,
				h: 160,
			},

			{
				x: 360,
				y: 20,

				w: 20,
				h: 180,
			},

			{
				x: 400,
				y: 20,

				w: 20,
				h: 200,
			},

			{
				x: 440,
				y: 20,

				w: 20,
				h: 220,
			},

			// Bottom
			{
				x: 200,
				y: 380,

				w: 20,
				h: 100,
			},

			{
				x: 240,
				y: 360,

				w: 20,
				h: 120,
			},

			{
				x: 280,
				y: 340,

				w: 20,
				h: 140,
			},

			{
				x: 320,
				y: 320,

				w: 20,
				h: 160,
			},

			{
				x: 360,
				y: 300,

				w: 20,
				h: 180,
			},

			{
				x: 400,
				y: 280,

				w: 20,
				h: 200,
			},

			{
				x: 440,
				y: 260,

				w: 20,
				h: 220,
			},

			// Top horisontal
			{
				x: 20,
				y: 20,

				w: 160,
				h: 20,
			},

			{
				x: 20,
				y: 60,

				w: 160,
				h: 20,
			},

			{
				x: 20,
				y: 100,

				w: 160,
				h: 20,
			},

			// Bottom horisontal
			{
				x: 20,
				y: 380,

				w: 160,
				h: 20,
			},

			{
				x: 20,
				y: 420,

				w: 160,
				h: 20,
			},

			{
				x: 20,
				y: 460,

				w: 160,
				h: 20,
			},

			// Middles
			{
				x: 480,
				y: 140,

				w: 100,
				h: 20,
			},

			{
				x: 480,
				y: 180,

				w: 120,
				h: 20,
			},

			{
				x: 480,
				y: 300,

				w: 120,
				h: 20,
			},

			{
				x: 480,
				y: 340,

				w: 100,
				h: 20,
			},
		],

		cannons: [
			{
				posX: 0,
				posY: 250,
				velX: 0.0005,
				velY: 0
			}
		],

		objects: [],

		rings: [
		],

		cleared: false
	},

	// Level 13
	{
		drops: [
			[100,140],
			[200,165],
			[300,140],
			[400,120],
			[500,95],
			[600,90],
			[700,115],

			[100,370],
			[200,395],
			[300,370],
			[400,340],
			[500,315],
			[600,310],
			[700,330],

		],

		goals: [
			{
				x: 10,
				y: 220,

				w: 20,
				h: 60,
			},
		],

		boxes: [

			// Top row
			{
				x: 10,
				y: 10,

				w: 20,
				h: 200,
			},

			{
				x: 50,
				y: 10,

				w: 20,
				h: 220,
			},

			{
				x: 90,
				y: 10,

				w: 20,
				h: 230,
			},

			{
				x: 130,
				y: 10,

				w: 20,
				h: 240,
			},

			{
				x: 170,
				y: 10,

				w: 20,
				h: 250,
			},

			{
				x: 210,
				y: 10,

				w: 20,
				h: 250,
			},

			{
				x: 250,
				y: 10,

				w: 20,
				h: 240,
			},

			{
				x: 290,
				y: 10,

				w: 20,
				h: 230,
			},

			{
				x: 330,
				y: 10,

				w: 20,
				h: 220,
			},

			{
				x: 370,
				y: 10,

				w: 20,
				h: 210,
			},

			{
				x: 410,
				y: 10,

				w: 20,
				h: 200,
			},

			{
				x: 450,
				y: 10,

				w: 20,
				h: 190,
			},

			{
				x: 490,
				y: 10,

				w: 20,
				h: 180,
			},

			{
				x: 530,
				y: 10,

				w: 20,
				h: 170,
			},

			{
				x: 570,
				y: 10,

				w: 20,
				h: 170,
			},

			{
				x: 610,
				y: 10,

				w: 20,
				h: 180,
			},

			{
				x: 650,
				y: 10,

				w: 20,
				h: 190,
			},

			{
				x: 690,
				y: 10,

				w: 20,
				h: 200,
			},

			{
				x: 730,
				y: 10,

				w: 20,
				h: 210,
			},

			{
				x: 770,
				y: 10,

				w: 20,
				h: 220,
			},

			// Bottom row
			{
				x: 10,
				y: 290,

				w: 20,
				h: 200,
			},

			{
				x: 50,
				y: 270,

				w: 20,
				h: 220,
			},

			{
				x: 90,
				y: 280,

				w: 20,
				h: 210,
			},

			{
				x: 130,
				y: 290,

				w: 20,
				h: 200,
			},

			{
				x: 170,
				y: 300,

				w: 20,
				h: 190,
			},

			{
				x: 210,
				y: 300,

				w: 20,
				h: 190,
			},

			{
				x: 250,
				y: 290,

				w: 20,
				h: 200,
			},

			{
				x: 290,
				y: 280,

				w: 20,
				h: 210,
			},

			{
				x: 330,
				y: 270,

				w: 20,
				h: 220,
			},

			{
				x: 370,
				y: 260,

				w: 20,
				h: 230,
			},

			{
				x: 410,
				y: 250,

				w: 20,
				h: 240,
			},

			{
				x: 450,
				y: 240,

				w: 20,
				h: 250,
			},

			{
				x: 490,
				y: 230,

				w: 20,
				h: 260,
			},

			{
				x: 530,
				y: 220,

				w: 20,
				h: 270,
			},

			{
				x: 570,
				y: 220,

				w: 20,
				h: 270,
			},

			{
				x: 610,
				y: 230,

				w: 20,
				h: 260,
			},

			{
				x: 650,
				y: 240,

				w: 20,
				h: 250,
			},

			{
				x: 690,
				y: 250,

				w: 20,
				h: 240,
			},

			{
				x: 730,
				y: 260,

				w: 20,
				h: 230,
			},

			{
				x: 770,
				y: 270,

				w: 20,
				h: 220,
			},
		],

		cannons: [
			{
				posX: 800,
				posY: 250,
				velX: -0.001,
				velY: 0
			}
		],

		objects: [],

		rings: [
		],

		cleared: false
	},

	// Level 14
	{
		drops: [
			[670,80],
			[520,70],
			[330,110],
			[120,20],
			[80,220],
			[720,320],
			[600,450]
		],

		goals: [
			{
				x: 100,
				y: 390,

				w: 20,
				h: 90 
			}
		],

		boxes: [
			{
				x: -20,
				y: 50,

				w: 20,
				h: 200,
			},

			{
				x: 20,
				y: 350,

				w: 600,
				h: 20,
			}
		],

		cannons: [
			{
				posX: 800,
				posY: 100,
				velX: -0.0005,
				velY: 0
			}
		],

		objects: [
		],

		rings: [
			{
				posX:550,
				posY:40,
				w:30,
				horisontal:false
			},

			{
				posX:350,
				posY:120,
				w:30,
				horisontal:false
			},

			{
				posX:150,
				posY:20,
				w:30,
				horisontal:false
			},
		],

		cleared: false
	}
]

function loadLevel(n){
	objects = [];
	rings = [];
	var level = levels[n];
	slowing = false;
	timeScale = 1;
	hideMainMenu();
	hideClearedScreen();
	loadTutorial(n);

	playing = true;
	draw();

	// Add drops
	drops = level.drops;
	goals = level.goals;
	box = level.boxes;
	cannons = level.cannons;
	for(i = 0; i < level.objects.length; i++){
		var obj = level.objects[i];
		addObject(obj.posX,obj.posY,obj.mass,0,0,obj.massMult,obj.static);
	}
	for(i = 0; i < level.rings.length; i++){
		var ring = level.rings[i];
		addRing(ring.posX,ring.posY,ring.w,ring.horisontal);
	}

	currentLevel = n;
}