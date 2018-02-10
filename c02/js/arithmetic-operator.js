var subtotal = (15 + 2) * 6;
var shipping = 0.5 * (15 + 2);

var total = subtotal + shipping;

document.getElementById("subtotal").textContent = subtotal;
document.getElementById("shipping").textContent = shipping;
document.getElementById("total").textContent = total;