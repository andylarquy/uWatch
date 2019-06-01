function clearData(){
	localStorage.clear();
	alert('Memory cleared')
}

function startLoading(){

	

	if(thisPlayListIsNew()){
		//Load empty from youtube
		
		//setTimeout(startOnlineLoading(),delayTime);
		startOnlineLoading();
	}else{
		
		//Load from HDD
		//setTimeout(startLocalLoading(),delayTime);
		startLocalLoading();
	}
}

function startLocalLoading(){
	alert('starting local loading...');
	
	//================================== GET DATA FROM LOCAL SAVE ==================================
	titlesArray = JSON.parse(localStorage.getItem('TITLES'+getListId()));
	linksArray = JSON.parse(localStorage.getItem('LINKS'+getListId()));
	thumbnailsArray = JSON.parse(localStorage.getItem('THUMBNAILS'+getListId()));
	//================================== GET DATA FROM LOCAL SAVE ==================================
	
	writeOnPopup();


}

function thisPlayListIsNew(){
	
	return localStorage.getItem('TITLES'+getListId()) === null;

}


function startOnlineLoading(){
	alert('starting online loading...');

	//By defalut the app gets the online information, so if you dont overwite it you just use it
	writeOnPopup();

	//================================== STORE DATA ON LOCAL ==================================
	
	//I'm assuming (not sure) that the code after the &list is unique to every playlist
	localStorage.setItem('TITLES'+getListId(),JSON.stringify(titlesArray));
	localStorage.setItem('LINKS'+getListId(),JSON.stringify(linksArray));
	localStorage.setItem('THUMBNAILS'+getListId(),JSON.stringify(thumbnailsArray));
	//================================== STORE DATA ON LOCAL ==================================

}



function writeOnPopup(){

	//================================== WRITE ON POPUAP LOADED DATA  ==================================
	
	var tempStr='';//Necessary because append automatically closes the tags

		tempStr+=('<p>It may crashes a bit when you open a video but after a few seconds starts to working right</p>');
		
		
		tempStr+="<ol>";
	

	for(i = 0; i < titlesArray.length; i++){
		tempStr+='<li><p>'+titlesArray[i]+'</p>';
		//TODO - Check if it's required on click execute a clear intervalId;
		tempStr+='<p><a href="'+linksArray[i]+'" target="_blank" draggable="false">';
		tempStr+='<img draggable="false" height="64" width="84" src='+thumbnailsArray[i]+'>';
		tempStr+='</a></p>';
		tempStr+='</li>';



	}
	tempStr+='</ol>';

	$('#list').append(tempStr);

	//Start clock to record video time
	alert(linksArray);
	chrome.extension.getBackgroundPage().startRecordClock(url,linksArray);

	//================================== WRITE ON POPUAP LOADED DATA ==================================

}


