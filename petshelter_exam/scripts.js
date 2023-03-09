var petsCounter = [3, 5, 8];

/*
For some reason the .innerHTML wouldn't update with this code so I used if statements instead

var petsQuery = [document.getElementById("pepperpets"), document.getElementById("brucepets"), document.getElementById("oscarpets")];
*/

function selectSpecies() {
    alert("You are looking for a: " + document.getElementById("species").value);
}

function pet(index) {
    petsCounter[index]++;
    if(index == 0) {
        document.querySelector("#pepperpets").innerHTML = petsCounter[index] + " petting(s)";
    } else if(index == 1) {
        document.querySelector("#brucepets").innerHTML = petsCounter[index] + " petting(s)";
    } else {
        document.querySelector("#oscarpets").innerHTML = petsCounter[index] + " petting(s)";
    }
}