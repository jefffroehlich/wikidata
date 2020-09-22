var x = 6;

document.getElementById("leftBtn").addEventListener("click", function() {
	if (x > 5) {
	document.getElementById("response").innerHTML = "Correct!";
	}
	else{
	document.getElementById("response").innerHTML = "Wrong!";
	}
});