// Event based functions
function hoverDrops(event){
	hoverX = event.x - c.offsetLeft;
	hoverY = event.y - c.offsetTop;
}

function mouseIsDown(event){
	mass = 2;
	//console.log("mouse down, setting mass to 2");
	var x = event.x;
	var y = event.y;

	x -= c.offsetLeft;
	y -= c.offsetTop;

	cursorX = x;
	cursorY = y;
	mouseIsCurrentlyDown = true;
	var z = 0;

	animateCircle = true;

	if(tutorialVisible){
		tips.innerHTML = "";
		tutorialVisible = false;
	}

	// Reset when mouse is down
	halfReset();
}

function mouseIsUp(event){
	if(dropping){
		addObject(drops[currentDrop][0],drops[currentDrop][1],mass);

		// Reset one more time
		halfReset();

		// Then fire the cannons again
		cannonCount = 512;
		}
	drag = false;
	mouseIsCurrentlyDown = false;
	animateCircle = false;
	dragRad = 1;
	dropping = false;
}

function checkDrag(event){
	hoverDrops(event);
	var x = event.x;
	var y = event.y;

	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	for(i = 0; i < drops.length; i++){
		if(Math.sqrt((x-drops[i][0])*(x-drops[i][0]) + (y-drops[i][1])*(y-drops[i][1])) < pointRing){
			// Cursor inside a drop
			dropping = true;
			currentDrop = i;
		}

		for(j = 0; j < objects.length; j++){
			if(drag && objects[j].mass > 0 && objects[j].posX == drops[i][0] && objects[j].posY == drops[i][1]){
				var rad = calcRad(objects[j].mass,massMultiplier);
				if(Math.sqrt((x-objects[j].posX)*(x-objects[j].posX) + (y-objects[j].posY)*(y-objects[j].posY)) < rad){
					dropping = true;
					objects[j].gone = true;
				}
			}
		}
	}

	if(!mouseIsCurrentlyDown) return;
	if(mouseIsCurrentlyDown) drag = true;
	if(!dropping) return;

	toX = x;
	toY = y;

	var dispX = toX - drops[currentDrop][0];
	var dispY = toY - drops[currentDrop][1];
	//console.log("dispX: " + dispX + ", dispY: " + dispY);

	// Calculate distance (length of the vector)
	// Radius is 1/4 the length
	dragRad = 0.25 * Math.sqrt(dispX*dispX+dispY*dispY);

	mass = 4/3 * Math.PI * Math.pow(dragRad,3) * massMultiplier;
}