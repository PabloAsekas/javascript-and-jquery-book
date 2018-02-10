var today = new Date();
var hour = today.getHours();
var greeting;

if (hour > 21) {
	greeting = "Good night";
} else if (hour > 12) {
	greeting = "Good afternoon";
} else {
	greeting = "Good morning";
}

document.write("<h3>" + greeting + "</h3>");