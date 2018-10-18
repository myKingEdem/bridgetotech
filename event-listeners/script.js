function getFormValue() {
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;

	let full_name = fname + " " + lname;

	document.getElementById('display').innerHTML = "Hello " + full_name;
}