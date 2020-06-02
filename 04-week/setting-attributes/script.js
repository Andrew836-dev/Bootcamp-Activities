var aTags = document.querySelectorAll('a');
var imgTags = document.querySelectorAll('img');
var imgAlts = ["Person using a computer", "Seven people around a computer", "Seven different people around computers"];

for (var i = 0; i< aTags.length; i++) {
    aTags[i].setAttribute("href", "http://google.com");
    imgTags[i].setAttribute("src", "./images/image_" + (i + 1) + ".jpg");
    imgTags[i].setAttribute("alt", imgAlts[i]);
    imgTags[i].setAttribute("style", "margin: 20px; padding: 10px;")
}

document.body.style.backgroundColor = "lightgrey";