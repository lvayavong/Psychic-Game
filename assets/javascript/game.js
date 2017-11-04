
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	var userGuess = 0;
	var userWins = 0;
	var userLosses = 0;
	var compGuess = 0;
	

	

	document.onkeypress = function(event){
		var userGuess = event.key;
		

		var compGuess = letters[Math.floor(Math.random()*26)];
			console.log(compGuess);


	if (userGuess === compGuess){
		document.getElementById("wins").innerHTML = "Wins:" + 1;
		document.getElementById("guesses").innerHTML = "Your Guesses so far:" + 1
	} else {
			document.getElementById("losses").innerHTML = "Losses:" + 1; 
		document.getElementById("guesses").innerHTML = "Your Guesses so far:" + letters
      }

     
 
};
