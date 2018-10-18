//first function, multiplication with parameters

function multiply(first_number,second_number) {
	product = first_number * second_number;
	return product;
	//console.log('I just multiplied two numbers: ' + product);
}

// let first_number = 3;
// let second_number = 3;
// let answer = multiply(first_number, second_number);
// console.log("The answer is: " + answer);

function displayCalculation() {
	let first_number = document.getElementById('firstNumber').value;
	let second_number = document.getElementById('secondNumber').value;
	product = multiply(first_number, second_number);
	document.getElementById('displayProduct').innerHTML = "The Product is: " + product;
	//displayProduct.innerHTML = "The Product is: " + product; 
}

function changeBackground() {
	let userColor = document.getElementById('changeBackground').value;
	document.body.bgColor = userColor;
}

//on mouseenter, changeText
//on mouseleave, go back to original

function changeText() {
	// body...
}
