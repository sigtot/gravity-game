var tutorial = true;
var tutorialVisible = true;
var tips = document.getElementById("tips");
var checkBox = document.getElementById("tutorialToggle");

function loadTutorial(lvl){
	if(lvl > 3 || !tutorial) return false;
	switch(lvl){
		case 0: 
			addTip(290,300,"Streer the particles into the goal by adding a gravity point (drag)");
			break;
		case 1:
			addTip(145,275,"Sometimes there are more than one drop point...");
			addTip(485,330,"...but you don't always need them all");
			break;
		case 2:
			addTip(200,380,"Obstacles and gravity points may get in your way");
			break;
		case 3:
			addTip(540,100,"Green rings have to be passed before reaching the goal")
	}
}

function addTip(x,y,tip){
	// Don't add duplicates
	for(i = 0; i < document.getElementsByClassName("tip").length; i++){
		if(tip == document.getElementsByClassName("tip")[i].innerHTML) return false;
	}
	tutorialVisible = true;
	var newElement = document.createElement("div");
	var textNode = document.createTextNode(tip);

	newElement.className = "tip";
	newElement.style.left = x + "px";
	newElement.style.top = y + "px";

	newElement.appendChild(textNode);
	tips.appendChild(newElement);
}

function checkCheckBox(){
	if(checkBox.checked){
		tutorial = true;
		localStorage.setItem("tutorial","true");
	}else{
		tutorial = false;
		localStorage.setItem("tutorial","false");
	}
}

checkBox.onclick = function(){checkCheckBox()};