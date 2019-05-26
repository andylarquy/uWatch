
var url="https://www.youtube.com/watch?v=CfKVU0i7w_w&list=PLU8oAlHdN5BmpobVmj1IlneKlVLJ84TID&index=10";
var i;
var titlesArray = new Array()
var thumbnailsArray = new Array()


function titleArrayParse(text, initialFlag, finalFlag){

	return text[i].substring(text[i].indexOf(initialFlag) +25, text[i].indexOf(finalFlag));

}

function thumbnailArrayParse(text, initialFlag, finalFlag,offset){

	return text[i].substring(text[i].indexOf(initialFlag,offset)+6, text[i].indexOf(finalFlag,offset));

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
		alert(thumbnailsArray[i]);
	}
}

function check(){
	if(localStorage.prueba) url = localStorage.prueba;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			analyze(xmlhttp.responseText);
			
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	

}

check();
