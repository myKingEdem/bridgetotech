function checkAge() {
	let userAge = prompt("Please enter your age: ");
	if (userAge > 21) {
		console.log("You're grown up!");
		document.getElementById("displayAge").innerHTML = "You're grown up!";
	} else if (userAge > 17){
		console.log("You're a young adult!");
		document.getElementById("displayAge").innerHTML = "You're a young adult!";
	}else {
		console.log("You're a child!");
		document.getElementById("displayAge").innerHTML = "You're a child!";
	}
}

function checkNumbers() {
	let numberOne = parseInt(prompt("Enter Your 1st Number: "));
	let numberTwo = parseInt(prompt("Enter Your 2nd Number: "));
	let numberThree = parseInt(prompt("Enter Your 3rd Number: "));
	
	if ((numberOne > numberTwo) && (numberOne > numberThree)) {
		console.log(numberOne + " is the largest number.");
		document.getElementById('displayNumber').innerHTML = numberOne + " is the largest number.";
	} else if (numberTwo > numberThree) {
		 console.log(numberTwo + " is the largest number.");
		 document.getElementById('displayNumber').innerHTML = numberTwo + " is the largest number.";
	} else {
		console.log(numberThree + " is the largest number.");
		document.getElementById('displayNumber').innerHTML = numberThree + " is the largest number.";
	}
}

let weekday = new Date().getDay(); 
switch (weekday) {
	case 0:
		weekday = "Sunday!";
		break;
	case 1:
		weekday = "Monday!";
		break;
	case 2:
		weekday = "Tuesday!";
		break;
	case 3:
		weekday = "Wednesday!";
		break;
	case 4:
		weekday = "Thursday!";
		break;
	case 5:
		weekday = "Friday!";
		break;
	default:
		weekday = "Saturday!";
	}
document.getElementById('today').innerHTML = weekday;