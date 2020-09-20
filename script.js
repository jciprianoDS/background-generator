var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";	
}

function getRandomIntInclusive() {
  min = Math.ceil(0);
  max = Math.floor(255);

  var intNum = Math.floor(Math.random() * (max - min + 1) + min); 
  if (intNum < 16) {
  	return "0" + intNum.toString(16);
  } else {
  	return intNum.toString(16);
  } 
  //The maximum is inclusive and the minimum is inclusive 
}

function generateRandom() {
	var randCol1 = "#"+getRandomIntInclusive()
	+getRandomIntInclusive()
	+getRandomIntInclusive();

	var randCol2  = "#"+getRandomIntInclusive()
	+getRandomIntInclusive()
	+getRandomIntInclusive();

	body.style.background = 
	"linear-gradient(to right, " + randCol1 + ", " + randCol1 + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", generateRandom);

setGradient();