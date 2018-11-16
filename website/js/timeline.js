var headerbox = document.getElementById("infoHere");
var eventbox = document.getElementById("main");
var btn = document.getElementById("btn");
var testBox = document.getElementById("test");
var counter = 0;



fetch ('https://cors-anywhere.herokuapp.com/http://gw2.mvctc.com/Class2019/plan.json')
	.then(res =>res.json())
	.then ((data) => {
		
		//renderHeader(data);
		renderEvents(data);
	/* 	btn.addEventListener("click", function(){
			renderEvents(data.activities[counter]);//for button
			//renderEvents(data);//for all
			
			counter++;
	
		}); */
	}).catch(err => console.error(err));


		
function renderHeader(file){
	var rawTemp = document.getElementById("headerTemp").innerHTML;
	var compTemp = Handlebars.compile(rawTemp);
	var genHTML = compTemp(file);
	
	headerbox.innerHTML = genHTML;
}

function renderEvents(file){
	var rawTemp = document.getElementById("eventTemp").innerHTML;
	var compTemp = Handlebars.compile(rawTemp);
	var genHTML = compTemp(file);
	
	eventbox.innerHTML = genHTML;
}

