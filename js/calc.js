// Calculation functions
function calcForce(){
	for (var i = 0; i < objects.length; i++) {
		objects[i].accX = 0;
		objects[i].accY = 0;
		for (var j = 0; j < objects.length; j++) {
			if(i == j) continue; // Don't calculate with itself

			// Define objects
			var obj1 = objects[i];
			var obj2 = objects[j];
			
			// Calculate displacement
 			var dispX = obj2.posX - obj1.posX;
			var dispY = obj2.posY - obj1.posY;
			var disp = Math.sqrt((dispX * dispX) + (dispY * dispY));
			var angleX = Math.atan(dispY/dispX);

			// Calculate position ratio
			var ratioX = Math.atan(dispY/dispX);
			var ratioY = Math.atan(dispX/dispY);

			// Calculate gravitational acceleration
			var acc = gConst * obj2.mass / (disp * disp);

			// Apply ratio to acceleration
			var accX = acc * Math.cos(angleX);
			var accY = acc * Math.sin(angleX);

			// Remove any pesky signs
			accX = Math.abs(accX);
			accY = Math.abs(accY);

			// Add the correct signs, that correspond with the displacement
			var signX = sign(dispX);
			var signY = sign(dispY);

			accX = signX * accX;
			accY = signY * accY;

			// Write acceleration
			obj1.accX += accX;
			obj1.accY += accY;

			/*console.log(dispX);
			console.log(dispY);
			console.log(ratioX);
			console.log(i + ": accX = " + accX + ". accY = " + accY);*/
			//console.log(angleX);
		};
	};
}

function calcSpeed(){
	for (var i = 0; i < objects.length; i++) {
		if(objects[i].static) continue; // Disregard physics if static
		var obj = objects[i];
		// Velocity
		obj.velX += obj.accX * ppM * timeScale;
		obj.velY += obj.accY * ppM * timeScale;

		// Position
		obj.posX += obj.velX * ppM * timeScale;
		obj.posY += obj.velY * ppM * timeScale;
	};
}

function calcRemoves(){
	for (var i = 0; i < objects.length; i++) {
		if(objects[i].gone){
			objects.splice(i,1);
		}
	};
}

// Check if massless object crashes with a box
// Heavy particles don't matter
function calcAbsorbs(){
	
	for(i = 0; i < objects.length; i++){
		if(objects[i].mass != 0) continue;
		var obj = objects[i];

		// Absorbed by box
		for(j = 0; j < box.length; j++){
			var theBox = box[j];

			if(	obj.posX + massLessRad >= theBox.x &&
			 	obj.posY + massLessRad >= theBox.y &&
			 	obj.posX - massLessRad <= theBox.x + theBox.w &&
			 	obj.posY - massLessRad <= theBox.y + theBox.h){
				// Collides, go away pls
				obj.gone = true;
			}
		}

		// Absorbed by goal
		for(j = 0; j < goals.length; j++){
			var theGoal = goals[j];

			if(	obj.posX + massLessRad >= theGoal.x &&
			 	obj.posY + massLessRad >= theGoal.y &&
			 	obj.posX - massLessRad <= theGoal.x + theGoal.w &&
			 	obj.posY - massLessRad <= theGoal.y + theGoal.h){
				// Collides, go away pls
				obj.gone = true;

				// If all rings have been passed, we win
				for(k = 0; k < rings.length; k++){
					if(!rings[k].passed) return;
				}
				won();
			}
		}
	}
}

function calcRings(){
	for(i = 0; i < objects.length; i++){
		var obj = objects[i]
		for(j = 0; j < rings.length; j++){
			var ring = rings[j];

			// Check oriantation
			if(ring.horisontal){
				// Ring is horisontal - width is width
				var width = ring.w;
				var height = ringWidth + ringMargin;
			}else{
				// Vertical - opposite
				var width = ringWidth + ringMargin;
				var height = ring.w;
			}

			if(	obj.posX + massLessRad >= ring.posX &&
			 	obj.posY + massLessRad >= ring.posY &&
				obj.posX - massLessRad <= ring.posX + width &&
				obj.posY - massLessRad <= ring.posY + height){
				
				// Collides, go away pls
				ring.passed = true;

			}	
		}
	}
}

function slow(){
	if(timeScale > 0.25){
		timeScale *= 0.996;
	}else{
		if(timeScale != 0.25){
			timeScale = 0.25;
		}
		
	}
}

function calcCannons(){
	if(cannonCount * timeScale >= 130){
		fireCannons();
		cannonCount = 0;
	}
	cannonCount++;
}

function calcRad(m,mm){
	return Math.pow(m / (4/3 * Math.PI * mm),1/3);
}

function calcPulse(){
	naturalTick += pulseSpeed;
	pointRing += Math.sin(naturalTick) * 0.02;
}