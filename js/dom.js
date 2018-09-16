// DOM related functions
var canvasOverlay = document.getElementById("canvasOverlay");
var mainMenuOverlay = document.getElementById("mainMenuOverlay");

var winTimingArray = [400,2000,2300,2700,5000,5200];
// Title, title upwards, levels in, new level, levels out, proceed

var levelMargin = 5;
var levelWidth = 60;
var topLevel = 230;

function createAndAppend(type,text,parent,id){
	var newTextNode = document.createTextNode(text);
	var newElement = document.createElement(type);
	newElement.id = id;

	newElement.appendChild(newTextNode);
	parent.appendChild(newElement);
}

function makeLessThanSeven(n){
	if(n > 6){
		n -= 7;
		return makeLessThanSeven(n);
	}else{
		return n;
	}
}

function createLevels(){
	for(i = 0; i < levels.length; i++){
		var level = levels[i];
		var newElement = document.createElement("div");
		var newClass = "clearLevel";

		var nInRow = makeLessThanSeven(i);

		newElement.style.left = (800 - 2 * levelMargin * 7 - levelWidth * 7)/2 + nInRow * (2 * levelMargin + levelWidth) + "px";
		newElement.style.transitionDelay = 0.03 * i + "s";
		newElement.innerHTML = i + 1;

		// Make blues
		if(levels[i].cleared){
			newClass += " clear";
			newElement.setAttribute("onclick","loadLevel(" + i + ");");
		}

		newElement.className = newClass;

		canvasOverlay.appendChild(newElement);
	}
}

function moveLevels(){
	var lvls = document.getElementsByClassName("clearLevel");
	for(i = 0; i < lvls.length; i++){
		if(i < 7 ) lvls[i].style.top = topLevel + "px";
		if(i >= 7 && i < 14) lvls[i].style.top = topLevel + 2 * levelMargin + levelWidth + "px";
		if(i >= 14) lvls[i].style.top = topLevel + 2 * (2 * levelMargin + levelWidth) + "px";
	}
}

function revealClearedScreen(){
	canvasOverlay.style.background = "rgba(0,0,0,0.4)";
	canvasOverlay.style.pointerEvents = "all";
	var t = winTimingArray;
	var lvl = currentLevel + 1;


	createAndAppend("h3","Level " + lvl + " cleared!", canvasOverlay,"levelClearTitle");
	createLevels();

	setTimeout(function(){document.getElementById("levelClearTitle").style.top = "240px"},t[0]);
	setTimeout(function(){document.getElementById("levelClearTitle").style.top = "100px"},t[1]);
	setTimeout(function(){moveLevels()},t[2]);
	setTimeout(function(){makeGreen()},t[3]);
}

function makeGreen(){
	for(i = 0; i < levels.length; i++){
		if(!levels[i].cleared && (i == 0 || levels[i - 1].cleared)){
			document.getElementsByClassName("clearLevel")[i].setAttribute("onclick","loadLevel(" + i + ");");
			document.getElementsByClassName("clearLevel")[i].className = "clearLevel new";
		}
	}
}

function hideClearedScreen(){
	canvasOverlay.style.background = "rgba(255,255,255,0)";
	canvasOverlay.style.pointerEvents = "none";
	setTimeout(function(){canvasOverlay.innerHTML = ""},5);	
}

function createMainMenuLevels(){
	for(i = 0; i < levels.length; i++){
		var level = levels[i];
		var newElement = document.createElement("div");
		var newClass = "mainMenuLevel";
		
		var nInRow = makeLessThanSeven(i);
		newElement.innerHTML = i + 1;

		// Make blues
		if(levels[i].cleared){
			newClass += " clear";
			newElement.setAttribute("onclick","loadLevel(" + i + ");");
		}

		// Make greens
		if(!levels[i].cleared && (i == 0 || levels[i - 1].cleared)){
			newElement.setAttribute("onclick","loadLevel(" + i + ");");
			newClass += " new";
		}

		newElement.className = newClass;
		newElement.style.left = (800 - 2 * levelMargin * 7 - levelWidth * 7)/2 + nInRow * (2 * levelMargin + levelWidth) + "px";
		if(i < 7 ) newElement.style.top = topLevel + "px";
		if(i >= 7 && i < 14) newElement.style.top = topLevel + 2 * levelMargin + levelWidth + "px";
		mainMenuOverlay.appendChild(newElement);
	}
}

function revealMainMenu(){
	for(i = 0; i < levels.length; i++){
		// Make blues
		if(levels[i].cleared){
			document.getElementsByClassName("mainMenuLevel")[i].setAttribute("onclick","loadLevel(" + i + ");");
			document.getElementsByClassName("mainMenuLevel")[i].className = "mainMenuLevel clear";
		}

		// Make greens
		if(!levels[i].cleared && (i == 0 || levels[i - 1].cleared)){
			document.getElementsByClassName("mainMenuLevel")[i].setAttribute("onclick","loadLevel(" + i + ");");
			document.getElementsByClassName("mainMenuLevel")[i].className = "mainMenuLevel new";
		}
	}
	mainMenuOverlay.className = "visible";
}

function hideMainMenu(){
	mainMenuOverlay.className = "";
}