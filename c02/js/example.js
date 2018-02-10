var greeting = "Howdy";
var name = "Pablo";
var message = "please check your order:";

var welcome = greeting + " " + name + "! " + message;

var sign = "Pablo Rocks!";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 0.5 * tiles;
var grandTotal = subTotal + shipping;

document.getElementById("greeting").textContent = welcome;
document.getElementById("userSign").textContent = sign;
document.getElementById("tiles").textContent = tiles;
document.getElementById("subTotal").textContent = "$" + subTotal;
document.getElementById("shipping").textContent = "$" + shipping;
document.getElementById("grandTotal").textContent = "$" + grandTotal;