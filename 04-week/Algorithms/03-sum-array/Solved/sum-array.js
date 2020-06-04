// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // console.log(arr);
    var x = 0;
    arr.forEach(elemnt => {
        x += elemnt;
    })
    // console.log(x);
    return x;
};
