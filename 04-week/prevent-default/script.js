var priceInput = document.getElementById('meal-price');
var tipPercentInput = document.getElementById('tip-percent');
var tipOutput = document.getElementById('tip-amount');
var newTotal = document.getElementById('new-total');
var submitButton = document.getElementById('submit');
var price = 10.00;
var tipPercent = 0.10;
var tipTotal = price*tipPercent;
var workingTotal = tipTotal + price;

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    price = priceInput.value;
    tipPercent = tipPercentInput.value * .01;
    tipTotal = price*tipPercent;
    workingTotal = parseFloat(tipTotal) + parseFloat(price);
    tipOutput.textContent = tipTotal.toFixed(2);
    newTotal.textContent = workingTotal;
})