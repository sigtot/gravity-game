function checkStorage(){
	// Check if existss
	if(localStorage.getItem("storedClearedLevels") === null) return false;
	else{
		var clearedLevels = localStorage.getItem("storedClearedLevels");
		for(i = 0; i < levels.length; i++){
			for(j = 0; j < clearedLevels.length; j++){
				if(clearedLevels[j] == i) levels[i].cleared = true;
			}
		}
	}
}

function storeCleared(){
	// Create array
	var clearedLevels = [];
	for(i = 0; i < levels.length; i++){
		if(levels[i].cleared) clearedLevels.push(i);
	}

	// Push array to localStorage
	localStorage.setItem("storedClearedLevels",clearedLevels);
}

function checkSettings(){
	if(localStorage.getItem("tutorial") == "false"){
		tutorial = false;
		checkBox.checked = false;
	}
}