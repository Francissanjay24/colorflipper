
var final = document.getElementById("res")
var flip = document.getElementById("box")
// var btncolor = document.getElementById("btn")
// function rgba(){
//     div.style.marginLeft = ""
//     flip.style.marginLeft = ""

// }

function rgb() {


    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + "," + green + "," + blue + ")";

    flip.style.backgroundColor = color;




    // btncolor.style.backgroundColor=color

    final.style.color = color
    final.textContent = "" + " " + color

}





var div = document.querySelector(".des")
var but = document.getElementById("btn2")
var final = document.getElementById("res")

function hex() {



    var flip = document.getElementById("box")

    var val = "#"
    for (let i = 0; i < 6; i++) {
        val += check()

    }

    flip.style.backgroundColor = val
    final.textContent = "" + " " + val
    final.style.color = val

}

function check() {

    var hexval = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    var randomvalue = Math.floor(Math.random() * 16)
    return hexval[randomvalue]
}

//dark mode

var container = document.getElementById("con")
var spn = document.getElementById("spn")
function dark() {


    var element = document.body;
    element.classList.toggle("dark-mode");

    container.style.backgroundColor = "black"
    container.style.color = "white"
    spn.style.color = "white"
    //  document.body.style.backgroundColor = "black"
    // document.body.toggle.style.color = "white"
    flip.style.backgroundColor = "#ccc"

}
