let num = 1;
while (num <= 100) { // num < 101
	if ((num % 3 === 0) && (num % 5 === 0)) {
		console.log("FizzBuzz");
	} else if (num % 3 === 0) {
		console.log("Fizz");
	} else if (num % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(num);
	}
	num++;
}

for (let lap = 0; lap < 5; lap++) {
	console.log("I am on lap " + lap);
}

let food = ["Pizza", "Cherry Pie","Kale Salad", "Hot Dog", "Ice Cream"];
for (let index = 0; index < food.length; index++) {
	console.log("I want to eat " + food[index]);
}