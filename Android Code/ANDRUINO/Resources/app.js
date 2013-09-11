/**
 * 
 * Autor: Mario Pérez Esteso
 * www.geekytheory.com
 * Android + Arduino = ANDRUINO
 * 
 */
var ventana=Ti.UI.createWindow({
	title: "ANDRUINO",
	backgroundColor:'white'
});
if(Ti.App.Properties.getBool("encendido")==null) Ti.App.Properties.setBool("encendido",false);
if(Ti.App.Properties.getBool("encendido")==false){
	 ventana.backgroundImage='bombillaapagada.jpg';
	} else {
	 ventana.backgroundImage='bombillaencendida.jpg';	
	}
ventana.addEventListener('click', function(){
	if(Ti.App.Properties.getBool("encendido")==false){
	 var url = 'http://192.168.0.100/?LED=F';
	 Ti.App.Properties.setBool("encendido",true);
	 ventana.backgroundImage='bombillaencendida.jpg';
	} else {
	 var url = 'http://192.168.0.100/?LED=T';
	 Ti.App.Properties.setBool("encendido",false);
	 ventana.backgroundImage='bombillaapagada.jpg';	
	}
 var client = Ti.Network.createHTTPClient({
     onerror : function(e) {
         alert('error');
     },
     timeout : 5000
 });
 client.open("GET", url);
//Mandar la petición
 client.send(); 
});
ventana.open();