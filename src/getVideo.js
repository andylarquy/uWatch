var url;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	
	url = tabs[0].url;

	check(); //I'm actually not sure why this has to be here, but it has to, otherwise nothing works.
});

var i;
var titlesArray = [];
var thumbnailsArray = [];
var linksArray = [];


function titleArrayParse(text, initialFlag, finalFlag){

	return text[i].substring(text[i].indexOf(initialFlag) +25, text[i].indexOf(finalFlag));

}

function thumbnailArrayParse(text, initialFlag, finalFlag,offset){

	return text[i].substring(text[i].indexOf(initialFlag,offset)+6, text[i].indexOf(finalFlag,offset));

}

function videoLinksArrayParse(text){
	var temp1= thumbnailArrayParse(text, '"url":',',"width":',266+titlesArray[i].length);
	temp1.replace('"','') //remove quotes from link
	
	temp1 = temp1.substring(24,temp1.indexOf('/hqdefault'));

	temp1 += getListFromUrl();

	var temp2 = 'https://www.youtube.com/watch?v='+temp1;
	
	return temp2


}

function analyze(response){

	var sourceArray=response.split('playlistPanelVideoRenderer');
	sourceArray.shift(); //The first element is trash

	for(i=0;i<sourceArray.length;i++){
		titlesArray[i] = titleArrayParse(sourceArray, '":{"title":{"simpleText":', '}');
		
	}

	for(i=0;i<sourceArray.length;i++){												//That sum prevents the offset be too low
		thumbnailsArray[i] = thumbnailArrayParse(sourceArray, '"url":',',"width":',266+titlesArray[i].length);
	}

	for(i=0;i<sourceArray.length;i++){
		linksArray[i] = videoLinksArrayParse(sourceArray)
	}



}


function check(){

		$.get(url, function(responseText) {
    		analyze(responseText);
    		startLoading();
		});

		

}

function getListFromUrl(){
	return url.substring(url.indexOf('&list'),url.length);
}

function getListId(){
	//When you click a video on a playlist it changes the 'index' value, so I remove it
	return getListFromUrl().substring(0,getListFromUrl().indexOf('&index'));
}
	


