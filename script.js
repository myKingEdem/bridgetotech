console.log('Hello from external JS file');
//making variables, letters, underscore
// can contain, but can't start with numbers
let age = 46;
let year = 2018;
let name = "Raymond";

console.log(name + ", " + "your age is " + age);
console.log(name + ", " + "you were born in " + (year - age));

// get name from prompt and saves it in the user variable
let user = prompt("Enter Your Name Here:");

//prints welcome message to the console
console.log('Welcome ' + user);

//gets element with id=message
let messageH1 = document.getElementById('message');
messageH1.innerHTML = "Welcome " + user;

let userColor = prompt('Enter Color:');
messageH1.style.color = userColor;

//assuming word starts with consenant
//get first letter from word
//get word without first letter
//add first letter to end
//add ay to end
let word = prompt('Enter word to convert to pig latin:');
let pigLatin = word.slice(1) + word.charAt(0) + "ay";
alert(pigLatin.toLowerCase());

messageH1.innerHTML += " " + pigLatin;