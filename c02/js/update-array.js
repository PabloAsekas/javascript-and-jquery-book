var colors = ["black", "white", "custom"];

colors[2] = "beige";

var element = document.getElementById("colors");
element.textContent = colors[2];