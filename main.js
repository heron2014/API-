var request = new XMLHttpRequest(); // creates a new HTTP object called 'request'

request.open('GET', 'name.txt', true); //.open(method, url, async) this is synchronously

request.send(null);

console.log(request.responseText);

// document.getElementById('response').innerHTML = request.responseText; this is was used to synchrounsly call responseText

request.onreadystatechange = function() {
	if (request.readyState === 4) {
		console.log(request);
		document.getElementById('response').innerHTML = request.responseText;
	};
};