//shorthand n1
var price1 = 5;
var quantity1 = 14;
var total1 = price1 * quantity1;

//shorthand n2
var price2, quantity2, total2;
price2 = 5;
quantity2 = 14;
total2 = price2 * quantity2;

//shorthand n3
var price3 = 5; quantity3 = 14;
var total3 = price3 * quantity3;

var elementCost = document.getElementById("cost");
elementCost.textContent = "$" + total3;