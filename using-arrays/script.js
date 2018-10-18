let carList = ["BMW", "Volvo", "KIA"];

function addCarToFront() {
	let newCar = prompt("Please enter new car: ");
	carList.unshift(newCar);
	document.getElementById('currentCars').innerHTML = "I have" + " " + carList.join(" and a ");
 }

 function addCarToBack() {
 	let newCar = document.getElementById('newCar').value;
 	carList.push(newCar);
 	document.getElementById('currentCars').innerHTML = "WOW! 20% OFF NEW " + carList.join(" ");
 }