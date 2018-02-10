var inStock = true;
var shipping = false;

/* Imagine something happen here and we have to change that value */

inStock = false;
shipping = true;

document.getElementById("stock").className = inStock;
document.getElementById("shipping").className = shipping;