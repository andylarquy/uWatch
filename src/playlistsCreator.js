var delayTime = 1800; //Still figuring out the best value
setTimeout(check,delayTime);
setTimeout(startLoading,delayTime);


function startLoading(){
		document.write('<!DOCTYPE html>');
		document.write('<link rel="stylesheet" type="text/css" href="popup.css">');
		document.write(	'<p>It may crashes a bit when you open a video but after a few seconds starts to working right</p>');

		document.write("<ol>");
	for(i = 0; i < titlesArray.length; i++){

		document.write("<li>"+titlesArray[i]+"</li>");
		document.write('<a href="'+linksArray[i]+'" target="_blank" draggable="false">');
		document.write('<img draggable="false" height="64" width="84" src='+thumbnailsArray[i]+'></a>');
	}
	document.write("</ol>");

}	
