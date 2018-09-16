var cWidth = 800;
var cHeight = 500;

var calcRate = 516;
var ppM = 1000;

var scale = 1;

var sizeScale = 0.0001;

var gConst = 0.0000000000667408;

var mass = 2;
var minMass = 34; // Magic

var c = document.getElementById("canvas");
ctx = c.getContext("2d");

c.width = cWidth;
c.height = cHeight

var cursorX;
var cursorY;
var cursorDownTime;

var animateCircle = false;
var drag = false;
var mouseIsCurrentlyDown = false;
var toX;
var toY;
var dispToVel = 0.00001;

var resetButton = document.getElementById("resetButton");
var mainButton = document.getElementById("homeButton");

var massMultiplier = 100;

var maxHeight = 50;

var dragRad = 1;

var pulseSpeed = 0.01;

var fireRate = 1000;

var pointSize = 2;
var pointRing = 10;
var naturalTick = 0;
var hoverX = 0;
var hoverY = 0;

var massLessRad = 5;

var dropping = false;
var currentDrop = 0;
var currentLevel = 0;

var drops = [];
var goals = [];
var objects = [];
var cannons = [];
var box = [];
var rings = [];

var ringWidth = 5;
var ringMargin = 5;

var timeScale = 1;
var slowing = false;
var cannonInterval;

var cannonCount = 0;

var playing = false;

var play = document.getElementById("play");

function sign(x) {
	return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
}

function randBetween(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function reset(){
	if(!playing) return false;
	objects = [];
	rings = [];
	loadLevel(currentLevel);
}

function main(){
	tips.innerHTML = "";
	hideClearedScreen();
	revealMainMenu();
}

function inheritShit(parent,child){
	child.static = parent.static;
	child.posX = parent.posX;
	child.posY = parent.posY;
}

function won(){
	if(!slowing){
		levels[currentLevel].cleared = true;

		slowing = true;
		revealClearedScreen();

		storeCleared();
	}
}

play.onclick = playNow;
function playNow(){
	for(i = 0; i < levels.length; i++){
		if(!levels[i].cleared) return loadLevel(i);
	}
}

function calc(){
	if(!playing) return;
	calcForce();
	calcSpeed();
	calcRemoves();
	calcAbsorbs();
	calcPulse();
	calcRings();

	calcCannons();
	if(slowing) slow();

}

function halfReset(){
	// Remove all massless
	for(i = 0; i < objects.length; i++){
		if(objects[i].mass == 0) objects[i].gone = true;
	}

	// Reset all passed rings
	for(i = 0; i < rings.length; i++){
		rings[i].passed = false;
	}
}

// Calculation tick
window.setInterval(function(){
	calc();
},1000/calcRate);

// Fire cannons tick
/*function startCannons(){
	fireCannons();
	cannonInterval = setInterval(function(){
		fireCannons();
	},(fireRate/timeScale));
}*/


function draw(){
	if(!playing) return;

	requestAnimationFrame(draw);

	background();
	drawBoxes();
	drawDrops();
	drawObjects();
	circleAnimation();
	drawLine();
	massTextAnimation();
	drawRings();
}

window.onload = function(){
	checkStorage();
	checkSettings();
	createMainMenuLevels();
	revealMainMenu();
}

document.addEventListener("keydown",function(e){
	if(e.keyCode == 82) reset();
});

resetButton.onclick = reset;
mainButton.onclick = main;

canvas.addEventListener("mousedown", mouseIsDown, false);
canvas.addEventListener("mouseup", mouseIsUp, false);
canvas.addEventListener("mousemove", checkDrag, false);