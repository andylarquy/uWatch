
var url="https://www.youtube.com/watch?v=CfKVU0i7w_w&list=PLU8oAlHdN5BmpobVmj1IlneKlVLJ84TID&index=10";
var i;
var indexArrayNombres1 = new Array();
var indexArrayNombres2 = new Array();
var indexArrayLinks = new Array();

function prueba(response){
	alert(localStorage.prueba);
	alert(response.substring(indexArrayNombres1[0],indexArrayNombres2[1]));
	alert(response.indexOf('Curso JavaScript desde 0. Presentac'));
	
}

function analyze(response){

	var sourceArray=response.split('playlistPanelVideoRenderer');

	for(i=0;i<sourceArray.length;i++){
		alert("iteracion "+i+": "+sourceArray[i]);
	}

}

function check(){
	if(localStorage.prueba) url = localStorage.prueba;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			analyze(xmlhttp.responseText);
			prueba(xmlhttp.responseText);
			
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	

}

check();
