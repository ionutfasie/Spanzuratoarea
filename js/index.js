var wordList = [
["A", "S", "T", "R", "O", "N", "O", "M", "I", "E"],
  ["J","O","A","C","A"],
  ["B","A","L","A","N","S","O","A","R"],
  ["E","D","U","C","A","T","I","E"],
  ["C","A","N","T","E","C"],
  ["S","T","I","L","O","U"],
  ["S","T","E","A"],
  ["P","I","S","I","C","A"],
  ["A","S","T","E","R","O","I","D"],
  ["U","N","I","V","E","R","S"]
]
var random = Math.floor((Math.random()*(wordList.length-1))); 

var chosenWord = wordList[random]; // cuvantul de ghicit va fi ales din vectorul de mai sus
var wordPlace = new Array(chosenWord.length); //creeaza un vector de lungimea cuvantului ales
var mistakeNumber = 0;

// fiecare litera e caracterizata de un underscore
for (var i = 0; i < wordPlace.length; i++){
	wordPlace[i] = "_ "; //se adauga _ pentru fiecare litera din cuvantul ales
}
// printeaza campul de ghicit
function printWordPlace(){
	for (var i = 0; i < wordPlace.length; i++){
	var spaces = document.getElementById("spaces"); //se refera la paragraful in care vor aparea liniile _ in HTML
	var letter = document.createTextNode(wordPlace[i]); 
	spaces.appendChild(letter);  //inlocuieste _ cu litera ghicita 
	}
}

//verifica daca litera introdusa se potriveste o data sau de mai multe ori
var checkGuess = function(){
	var f = document.wordformular; 
	var b = f.elements["element"]; //se iau elementele din input
	var insertedLetter = b.value; // litera pusa de utilizator
	insertedLetter = insertedLetter.toUpperCase();
	for (var i = 0; i < chosenWord.length; i++){
		if(chosenWord[i] === insertedLetter){ //verifica daca litera introdusa este corecta
			wordPlace[i] = insertedLetter + " ";
			var correct = true;
		}
	b.value = "";
	}
	
	//sterge campul de ghicit si este inlocuit cu ceva nou
	var spaces = document.getElementById("spaces");
	spaces.innerHTML=""; 
	printWordPlace();
	
	// daca o litera nu e ghicita aceasta este pusa pe lista gresita si spanzuratul creste
	if(!correct){
		var wrongletter = document.getElementById("wrongletter"); //se refera la literele gresite
		var letter = document.createTextNode(" " + insertedLetter);
		wrongletter.appendChild(letter); //se adauga in lista literelor gresite 
		mistakeNumber++;
		var hangman = document.getElementById("hangman"); //se refera la partea de desenat
    hangman.src = "images/hangman" + mistakeNumber + ".png"; //schimba imaginile pentru fiecare greseala
	}
	
	//verifica daca toate literele au fost ghicite
	var endGame = true;
	for (var i = 0; i < wordPlace.length; i++){
		if(wordPlace[i] === "_ "){
			endGame = false;
		}
	}
	if(endGame){
		window.alert("Ai castigat!");
		location.reload();
	}
	
	//odata ce ai 6 litere gresite, vei pierde
	if(mistakeNumber === 6){
		window.alert("Ai murit.");
		location.reload();
	}
}

function init(){
	printWordPlace();
}

window.onload = init;


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}