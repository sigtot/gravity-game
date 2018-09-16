// Colors
//	Créme de la créme
var cBackGround = "#F4F1DE";
var cBox = "#BFBCAE";
var cGoal = "#3D405B";
var cDrop = "#E07A5F";
var cDropTransparent = "#FCCBBD";
var cObject100 = "#5985B2";
var cObject1000 = "#E07A5F";
var cCircleAnimation = "#ee8888";
var cLine = "#E07A5F";
var cMassLess = "#F2CC8F";
var cRing = "#8BC34A";
/*
//	Colorful
var cBackGround = "#F7FFF7";
var cBox = "#292F36";
var cGoal = "#4ECDC4";
var cDrop = "#3D405B";
var cDropTransparent = "#9497B5";
var cObject100 = "#ccc";
var cObject1000 = "#FF6B6B";
var cCircleAnimation = "#ee8888";
var cLine = "#FF6B6B";
var cMassLess = "#FFE66D";
var cRing = "#3ED673";
*/

// Draw functions
function background(){
	ctx.fillStyle = cBackGround;
	ctx.fillRect(0,0,cWidth,cHeight);
}

function drawBoxes(){
	// Draw box
	for(i = 0; i < box.length; i++){
		var theBox = box[i];
		ctx.fillStyle = cBox;
		ctx.fillRect(theBox.x,theBox.y,theBox.w,theBox.h);
	}

	// Draw goal
	for(i = 0; i < goals.length; i++){
		var theGoal = goals[i];
		ctx.fillStyle = cGoal;
		ctx.fillRect(theGoal.x,theGoal.y,theGoal.w,theGoal.h);
	}
}

function drawDrops(){
	ctx.strokeStyle = cDrop;
	for(i = 0; i < drops.length; i++){
		ctx.fillStyle = cDropTransparent;
		ctx.beginPath();
		ctx.arc(drops[i][0],drops[i][1],pointRing,0,2*Math.PI);
		ctx.stroke();
		if(Math.sqrt((hoverX-drops[i][0])*(hoverX-drops[i][0]) + (hoverY-drops[i][1])*(hoverY-drops[i][1])) < pointRing) ctx.fill();

		ctx.fillStyle = cDrop;
		ctx.beginPath();
		ctx.arc(drops[i][0],drops[i][1],pointSize,0,2*Math.PI);
		ctx.fill();
	}
}

function drawObjects(){
	for (var i = 0; i < objects.length; i++) {

		//var rad = scale * 2 * Math.log(objects[i].mass) - 7;
		//var rad = 50 / (1 + 50 * Math.pow(Math.E,-0.00001 * objects[i].mass));
		
		if(objects[i].mass == 0){
			drawMassLess(objects[i]);
			continue;
		}
		var rad = calcRad(objects[i].mass,objects[i].massMult);
		while(rad <= 0) rad++;

		switch(objects[i].massMult){
			case 100: ctx.fillStyle = cObject100;
			break;

			case 1000: ctx.fillStyle = cObject1000;
			break;

			default: ctx.fillStyle = "#eee"; // Never used
		}
		ctx.beginPath();
		ctx.arc(objects[i].posX,objects[i].posY,rad,0,2*Math.PI);
		ctx.fill();
	};
}

function circleAnimation(){
	if(!animateCircle || !dropping) return;

	//var rad = scale * 2 * Math.log(mass) - 7;
	//var rad = scale * 20 * Math.log(mass) + mass;
	//var rad = 50 / (1 + 50 * Math.pow(Math.E,-0.00001 * mass));

	ctx.fillStyle = cCircleAnimation;
	ctx.beginPath();
	ctx.arc(drops[currentDrop][0],drops[currentDrop][1],dragRad,0,2*Math.PI);
	ctx.fill();
}

function drawLine(){
	if(!drag || !dropping) return;
	ctx.beginPath();
	ctx.strokeStyle = cLine;
	ctx.moveTo(drops[currentDrop][0],drops[currentDrop][1]);
	ctx.lineTo(toX,toY);
	ctx.stroke();
}

function massTextAnimation(){
	if(!animateCircle || !dropping) return;
	mass = Math.round(mass);
	var yOffset = Math.pow(mass / (4/3 * Math.PI * massMultiplier),1/3) + 5;
	var xOffset = mass.toString().length * 4.5;

	if(drops[currentDrop][1] - yOffset <= 15) yOffset = drops[currentDrop][1] - 15;

	var x = mass.toString().length;
	ctx.fillStyle = "#333";
	ctx.font = "15px Courier";
	ctx.fillText(mass,drops[currentDrop][0] - xOffset,drops[currentDrop][1] - yOffset);
}

function drawMassLess(obj){
	ctx.fillStyle = cMassLess;
	ctx.beginPath();
	ctx.arc(obj.posX,obj.posY,massLessRad,0,2*Math.PI);
	ctx.fill();
}

function drawRings(){
	for(i = 0; i < rings.length; i++){
		var ring = rings[i];
		ctx.fillStyle = cRing;

		// Check oriantation
		if(ring.horisontal){
			// Ring is horisontal - width is width
			var width = ring.w;
			var height = ringWidth;
		}else{
			// Vertical - opposite
			var width = ringWidth;
			var height = ring.w;
		}
		
		ctx.fillRect(ring.posX,ring.posY,width,height);
	}
}