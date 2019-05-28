var delayTime = 1800; //Still figuring out the best value
setTimeout(check,delayTime);
setTimeout(startLoading,delayTime);


function startLoading(){
	var tempStr='';//Necessary because append automatically closes the tags

		tempStr+=('<p>It may crashes a bit when you open a video but after a few seconds starts to working right</p>');
		
		
		tempStr+="<ol>";
	

	for(i = 0; i < titlesArray.length; i++){
		tempStr+='<li><p>'+titlesArray[i]+'</p>';
		tempStr+='<p><a href="'+linksArray[i]+'" target="_blank" draggable="false">';
		tempStr+='<img draggable="false" height="64" width="84" src='+thumbnailsArray[i]+'>';
		tempStr+='</a></p>';
		tempStr+='</li>';



	}
	tempStr+='</ol>';

	$('#list').append(tempStr);



}	
