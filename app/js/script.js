const numSpheresSlider = document.getElementById("numSpheresSlider")
const speedSlider = document.getElementById("speedSlider")
let numSpheres = numSpheresSlider.value;

//When number of spheres slider value changes
function numSpheresSliderChanged() {
	if (numSpheres != numSpheresSlider.value) {
		numSpheres = numSpheresSlider.value;
		document.documentElement.style.setProperty('--num-spheres', numSpheres)

		//Clear all spheres and shadows
		document.getElementById("sphere-container").innerHTML = "";
		document.getElementById("shadow-container").innerHTML = "";

		for (i = 1; i <= numSpheres; i++) {
			document.getElementById("sphere-container").appendChild(document.createElement("div"));
			document.getElementById("sphere-container").lastChild.classList.add('sphere');
			document.getElementById("shadow-container").appendChild(document.createElement("div"));
			document.getElementById("shadow-container").lastChild.classList.add('shadow');
		}
	}
}

//When animation speed slider value changes
function speedSliderChanged() {
	document.documentElement.style.setProperty('--animation-speed', speedSlider.value)
}

document.getElementById('colorButton')
	.addEventListener('click', function (event) {

		let randomColor = getRandomColor();
		document.documentElement.style.setProperty('--sphereColor', randomColor);
	})

function getRandomColor() {
	var color = Math.floor(Math.random() * 16777215).toString(16);
	while (color.length < 6) color = "0" + color;
	color = "#" + color;
	return color;
}