var delayTime = 1800; //Still figuring out the best value
setTimeout(check,delayTime);
setTimeout(startLoading,delayTime);


function startLoading(){

		$('#list').append('<p>It may crashes a bit when you open a video but after a few seconds starts to working right</p>');

		$('#list').append("<ol>");

	for(i = 0; i < titlesArray.length; i++){
		$('#list').append("<li>"+titlesArray[i]+"</li>");
		$('#list').append('<a href="'+linksArray[i]+'" target="_blank" draggable="false">');
		$('#list').append('<img draggable="false" height="64" width="84" src='+thumbnailsArray[i]+'></a>');


	}
	$('#list').append('</ol>');

}	
