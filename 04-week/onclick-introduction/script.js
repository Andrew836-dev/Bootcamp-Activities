var decrementButton = document.getElementById('decrement');
var incrementButton = document.getElementById('increment');
var countObject = document.getElementById('count');
var h4Object = document.body.firstElementChild.firstElementChild;
var notNegative = document.createElement('h5');
notNegative.textContent = "This is a positive zone, no negativity here";

decrementButton.addEventListener('click', function () {
    if (parseInt(countObject.textContent) > 0) {
        countObject.textContent = countObject.textContent - 1;
    }
    else {
        h4Object.appendChild(notNegative);
        // alert("This is a positive zone, no negativity here");
    }
})

incrementButton.addEventListener('click', function () {
    countObject.textContent = parseInt(countObject.textContent) + 1;
})