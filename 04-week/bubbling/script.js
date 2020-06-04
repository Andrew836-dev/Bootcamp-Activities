var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var imgBox = document.querySelector('.carouselbox');
var buttons = document.querySelector('.buttons');
var images = [
    "https://placekitten.com/200/300",
    "https://placehold.it/300x200",
    "https://placekitten.com/200/200",
    "https://placehold.it/300x202",
    "https://placekitten.com/201/301",
    "https://placehold.it/300x203"
];
var pointer = 0;
imgBox.style.backgroundImage = "url('" + images[pointer] + "')";

function incrementPointer() {
    pointer++;
    if (pointer >= images.length) {
        pointer = 0;
    }
}

function decrementPointer() {
    pointer--;
    if (pointer < 0) {
        pointer = images.length - 1;
    }
}
function nextPic(event) {
    // event.stopPropagation();
    incrementPointer();
    imgBox.setAttribute("style", "background-image: url('" + images[pointer] + "')");
}
function prevPic(event) {
    // event.stopPropagation();
    decrementPointer();
    imgBox.setAttribute("style", "background-image: url('" + images[pointer] + "')");
}

function followLink(event) {
    window.open(images[pointer], "_blank");
}

next.addEventListener('click', nextPic);
prev.addEventListener('click', prevPic);
buttons.addEventListener('click', function(event){
    event.stopPropagation();
})
imgBox.addEventListener('click', followLink);