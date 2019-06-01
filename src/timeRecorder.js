function recordTime(url,linksArray){
	console.log('The index of the video you are watching is: '+getCurrentUrlFromData(url,linksArray));
}

function getTime(){
	//TODO - Gets the current time of the video
}

function getCurrentUrlFromData(url,linksArray){
	var i;
	var flagUrlChecker = false;
	for(i=0;i<linksArray.length;i++){

		if(linksArray[i].includes(url)){
			flagUrlChecker = true;
			break; 
		}

	}

	if(!flagUrlChecker){
		throw 'There was an error while loading the playilists URL, please reset de memory';
	}else{
		return i;
	}

}
