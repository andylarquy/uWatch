var timeLapse = 1000;

function startRecordClock(url,linksArray){
	setInterval(function() { recordTime(url,linksArray); },timeLapse);
}