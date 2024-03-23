// pop one by one

setTimeout(function() {
var strings = ["H ", "e ", "l ", "l ", "o", "\n", "W ", "o ", "r ", "l ", "d", "E N T E R"];
var milisec = 1000;

function displayStrings(index) {

  if (index < strings.length) {

    var textNode = document.createTextNode(strings[index]);

    document.getElementById(`a${index}`).appendChild(textNode);

    index++;

    if (index < 2) {
    	milisec = 100;
    }
    if (index == 2){
    	milisec = 400;
    }
    if (index > 2 && index < 5) {
    	milisec = 100;
    }
    if (index == 5) {
    	milisec = 800;
    }
    if (index > 5 && index < 11) {
    	milisec = 100;
    }
    if (index == 11){
    	milisec = 800;
    }

    setTimeout(function() {
      displayStrings(index);
    }, milisec);
  }
}

displayStrings(0);

}, 1200);

// visibility switch

const myDiv = document.getElementById('last');

function toggleVisibility() {
  myDiv.classList.toggle('hidden');
}

setInterval(toggleVisibility, 1000);
