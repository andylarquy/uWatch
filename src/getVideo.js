var url;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	
	url = tabs[0].url;
	check();
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
	
	var temp2 = 'https://www.youtube.com/watch?v='+temp1;
	//that's the link without the playlist, for now that's the only way
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
		});
}
	


