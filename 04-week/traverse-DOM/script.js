var arty = document.getElementById('articles');
var mainy = document.getElementById('main');

arty.style.fontSize = '50px';
arty.firstElementChild.lastElementChild.style.color = 'blue';
arty.previousElementSibling.style.backgroundColor = 'black';

mainy.childNodes[1].style.textDecoration = 'underline';
mainy.lastElementChild.style.fontSize = '50px';
mainy.firstElementChild.style.color = 'orange';
mainy.lastElementChild.parentElement.style.fontSize = '40px';