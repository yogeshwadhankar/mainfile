console.log (document.getElementById('header-title'))
var headertitle = document.getElementById('header-title');
console.log(headertitle)
headertitle.textContent='Hello'
// console.log(headertitle)
headertitle.style.borderBottom ='solid 3px #000';
var item =document.getElementsByClassName('list-group-item');
console.log(item)
item[0].textContent ='Hello'
item[1].style.fontWeigth ='bold';
item[1].style.backgroundColor ='yellow';
