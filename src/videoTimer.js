var timeLapse = 1000;
var intervalId;
function startRecordClock(url,linksArray){
	intervalId = setInterval(function() { recordTime(url,linksArray); },timeLapse);
}