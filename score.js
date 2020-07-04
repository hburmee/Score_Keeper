var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0; 
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
	if(!gameOver){p1Score++
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	p1display.textContent = p1Score;
}
	
});

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2display.textContent = p2Score;
	}
	
});

reset.addEventListener("click", function(){
	location.reload();
})

function res(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	res();

})

