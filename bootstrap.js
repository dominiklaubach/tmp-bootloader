var jsList = ['core.js', 'tmp.js', 'page1.js'];
var loadList = [];

var pageList = ['page2.js', 'page3.js', 'page4.js', 'page5.js'];
var pageLoadList = [];

jsList.forEach(function(i) {
	if(i) {
		var js = document.createElement("script"); 
		js.src = i; 
		js.onload = function(){
			loadList.push(i);
			console.log(i + ' DID LOAD');
			
			checkIfBootstrapDone();
		}; 
	
		document.body.appendChild(js);	
	}
});

function checkIfBootstrapDone() {
	if(jsList.length === loadList.length) {
		//trigger event
		console.log('BOOTSTRAPING DONE');
		console.log('SHOW PAGE 1');
		window.setTimeout(function() {
			pageList.forEach(function(i) {
				loadPage(i);
			});
		}, 0);
	}	
}

function loadPage(url) {
		var js = document.createElement("script"); 
		js.src = url; 
		js.onload = function(){
			pageLoadList.push(url);
			console.log(url + ' DID LOAD');
			
			checkIfPageLoadDone();
		}; 
	
		document.body.appendChild(js);		
}

function checkIfPageLoadDone() {
	if(pageList.length === pageLoadList.length) {
		//trigger event
		console.log('APPLICATION LOADING DONE');
	}	
}