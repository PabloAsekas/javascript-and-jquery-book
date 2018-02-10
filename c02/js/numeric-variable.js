var price;
var quantity;
var total;

price = 3;
quantity = 14;
total = price * quantity;

var element = document.getElementById('cost');
element.textContent = "$" + total;