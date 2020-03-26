//These are the 6 colors for the different sqares 
var numSquares=6;
var colors = randomColorGenerator(6);
var displayColor= document.querySelector("#displayColor");
var pickedColor = colorPicker();
var squares = document.querySelectorAll(".square");
var displayResult = document.querySelector("#displayResult");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#button");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");

easyButton.addEventListener("click",function(){
	numSquares = 3;
	h1.style.background = "steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = randomColorGenerator( numSquares);
	pickedColor=colorPicker();
	displayColor.textContent = pickedColor;
	for (var i=0;i<squares.length;i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.background = "none";
		}
	}
});

hardButton.addEventListener("click",function(){
	numSquares = 6;
	h1.style.background = "steelblue";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = randomColorGenerator( numSquares);
	pickedColor=colorPicker();
	displayColor.textContent = pickedColor;
	for (var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
		
	}
});


displayColor.textContent = pickedColor;

button.addEventListener("click",function(){
	button.textContent="New Colour??"
	colors=randomColorGenerator(numSquares);
	pickedColor = colorPicker();
	displayColor.textContent = pickedColor;
	for(i=0;i<squares.length ; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background="steelblue";
	displayResult.textContent="";

});
// console.log(pickedColor);
for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.background = colors[i];
	
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if (clickedColor===pickedColor){
			displayResult.style.color= "black";
			displayResult.textContent = "Correct";
			h1.style.background=pickedColor;
			button.textContent="Play Again?"
			changeColors();
		}else{
			this.style.background = "#2b2a27";
			displayResult.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0 ; i < colors.length ; i++){
		squares[i].style.background = pickedColor;
	}
}

function colorPicker(){
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];
}


function randomColorGenerator(num){
	//Make an array
	var arr = [];
	//add 6 random colors for the array
	for(i=0;i<num;i++){
		//make a random color
		arr.push(randomColor());
	}
	// Return the array
	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	c = "rgb("+r+", "+g+", "+b+")";
	// console.log("random color is "+c);
	return c;
}