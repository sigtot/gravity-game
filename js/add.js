// Add fuctions
function addObject(x,y,m,vx,vy,mm,static){
	var obj = {};

	// Position given x and y
	if(x >= 0 && y >= 0){
		obj.posX = x;
		obj.posY = y;
	}else{
		// Otherwise, use current drop
		obj.posX = drops[currentDrop][0];
		obj.posX = drops[currentDrop][1];
	}
	
	// Velocity
	obj.velX = 0;
	obj.velY = 0;

	// Acceleration
		obj.accX = 0;
		obj.accY = 0;
	
	// Mass
	obj.mass = m;

	// If a velocity has been provided
	if(typeof vx !== 'undefined'){
		obj.velX = vx;
		obj.velY = vy;
	}else{
		// Dragged objects need 100 massmultiplier
		obj.massMult = massMultiplier;

		// Non-moving objects are static
		obj.static = true;
	}

	if(mm){
		// Mass multiplier has been provided
		obj.massMult = mm;
	}

	if(static){
		obj.static = true;
	}

	// And go!
	objects.push(obj);

	// Reset mass again just in case
	//mass = 2;
	//mouseIsCurrentlyDown = false;
}

function addCannon(x,y,velX,velY){
	var cannon = {};
	cannon.posX = x;
	cannon.posY = y;
	cannon.velX = velX;
	cannon.velY = velY;
	cannons.push(cannon);
	fireCannons();
}

function addDrop(x,y){
	var drop = [x,y];
	drops.push(drop);
}

function addRing(x,y,w,horisontal){
	var ring = {};
	ring.posX = x;
	ring.posY = y;
	ring.w = w;
	ring.horisontal = horisontal;
	ring.passed = false;
	rings.push(ring);
}

function fireCannons(){
	for(i = 0; i < cannons.length; i++){
		cannon = cannons[i];
		addObject(cannon.posX,cannon.posY,0,cannon.velX,cannon.velY);
	}
}