var headerbox = document.getElementById("infoHere");
var eventbox = document.getElementById("main");

var btnComm = document.getElementById("comm");
var btnDay = document.getElementById("day");
var btnEarthR = document.getElementById("earthR");
var btnEarthT = document.getElementById("earthT");
var btnMarsTAR = document.getElementById("marsTAR");
var btnCDR = document.getElementById("CDR");
var btnCommE = document.getElementById("commE");
var btnFE1 = document.getElementById("FE1");
var btnFE2 = document.getElementById("FE2");
var btnFE3 = document.getElementById("FE3");
var btnTech1 = document.getElementById("TECH1");
var btnTech2 = document.getElementById("TECH2");
var btnMCC = document.getElementById("MCC");
var btnST = document.getElementById("ST");

var fileData;


fetch ('https://cors-anywhere.herokuapp.com/http://gw2.mvctc.com/Class2019/plan.json')
	.then(res =>res.json())
	.then ((fileData) => {
		
		renderEvents(fileData);
		
		btnFE1.onclick = function(){sortEvents(fileData, "FE1")};
		btnFE2.onclick = function(){sortEvents(fileData, "FE2")};
		btnFE3.onclick = function(){sortEvents(fileData, "FE3")};
		btnTech1.onclick = function(){sortEvents(fileData, "TECH1")};
		btnTech2.onclick = function(){sortEvents(fileData, "TECH2")};
		btnMCC.onclick = function(){sortEvents(fileData, "MCCCOORD")};
		btnST.onclick = function(){sortEvents(fileData, "ST")};
		btnComm.onclick = function(){sortEvents(fileData, "COMM_LATENCY")};
		btnDay.onclick = function(){sortEvents(fileData, "DayNight")};
		btnEarthR.onclick = function(){sortEvents(fileData, "EARTH_RECEIVE")};
		btnEarthT.onclick = function(){sortEvents(fileData, "EARTH_TRANSMIT")};
		btnMarsTAR.onclick = function(){sortEvents(fileData, "MARS_TRANSMIT_AND_RECEIVE")};
		btnCDR.onclick = function(){sortEvents(fileData, "CDR")};
		btnCommE.onclick = function(){sortEvents(fileData, "true")};
		
	}).catch(err => console.error(err));


function renderEvents(file){
	var rawTemp = document.getElementById("eventTemp").innerHTML;
	var compTemp = Handlebars.compile(rawTemp);
	var genHTML = compTemp(file);
	
	eventbox.innerHTML = genHTML;
}


function sortEvents(file, sorter) {

	var rows; 
	var id;
	
	for(var i = 0; i < file.activities.length; i++){
		rows = file.activities[i].rows;
		id = document.getElementById(file.activities[i].id);
		for(var j = 0; j < rows.length; j++){
			if(rows[j] == sorter){
				id.style.display = "block";
				break;
			}
			else{
				id.style.display = "none";
			}
		}
	}
	
}