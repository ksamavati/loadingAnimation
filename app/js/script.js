const numCircles = '$numCircles'

//console.log(document.documentElement.style.getPropertyValue(numCircles));

//const document.documentElement.style.getPropertyValue(numCircles)

function on_load() {

    //var button = document.getElementsByClassName("colorButton");

    console.log('Hello')

    document.getElementsByClassName('colorButton')[0]
        .addEventListener('click', function(event) {
            var numSpheres = document.getElementById('spheres').value
            console.log(numSpheres)
            var randomColor = getRandomColor()
            document.documentElement.style.setProperty('--sphereColor', randomColor)

            //var spheres = document.getElementsByClassName('circle')
            //for (i = 0; i < spheres.length; i++) {
            //    spheres[i].style.setProperty('--sphereColor', 'green')
            //     console.log(i)
            //}
        })

}

function getRandomColor() {
    var color = Math.floor(Math.random() * 16777215).toString(16)
    while (color.length < 6) color = "0" + color;
    color = "#" + color;
    return color;
}

window.onload = on_load();