let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let order = ["th", "st", "nd", "rd"];

for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
	if (colorIndex == 0) {
			document.getElementById("display").innerHTML += `The 1${order[1]} color is  ${colors[colorIndex]}<br>`;
		} else if (colorIndex == 1) {
			document.getElementById("display").innerHTML += `The 2${order[2]} color is  ${colors[colorIndex]}<br>`;
		} else if (colorIndex == 2) {
			document.getElementById("display").innerHTML += `The 3${order[3]} color is ${colors[colorIndex]}<br>`;
		} else {
			document.getElementById("display").innerHTML += `The ${colorIndex + 1}${order[0]} color is ${colors[colorIndex]}<br>`;
		}
	}

// function filterArray(arr){
//   //code here
//   let newArr = [];
//   for (arrIndex = 0; arrIndex < arr.length; arrIndex++) {
//     if(typeof(arr[arrIndex]) == "number") {
//       newArr.push(arr[arrIndex]);
//   }
//   return newArr;
// 	}
// }