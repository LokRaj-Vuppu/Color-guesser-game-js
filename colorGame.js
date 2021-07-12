var numSquares = 6;
var color = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;
var clickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");

	numSquares = 3;

	color = generateRandomColor(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change all squares to right color
	for (var i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.background = color[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");

	numSquares = 6;
	color = generateRandomColor(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change all squares to right color
	for (var i=0;i<squares.length;i++){
			squares[i].style.background = color[i];
			squares[i].style.display = "block";
	}


});

resetButton.addEventListener("click",function(){
	//generate all new colors
	color = generateRandomColor(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change all squares to right color
	this.textContent = "New Colors!";
	for (var i=0;i<squares.length;i++){
		squares[i].style.background = color[i];
	}
	h1.style.background = "steelblue";
});

	colorDisplay.textContent = pickedColor;

for (var i=0 ; i<squares.length; i++) {
	squares[i].style.background = color[i];

	squares[i].addEventListener("click",function(){

	 	clickedColor = this.style.background;

		if (clickedColor == pickedColor) {
			//alert("correct");
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "PlayAgain!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			//alert("wrong");
			this.style.background = "black";
			//resetButton.textContent = "NewGame";
			messageDisplay.textContent = "TryAgain";

		}
	});
}

function changeColor(color){
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var randomColor = Math.floor(Math.random() * color.length);
	return color[randomColor];
}

function generateRandomColor(num) {
	//create an array and push the randomly generated colors
	var arr = [];

	for(var i=0;i<num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//generate random color for red ,greean and blue

	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}