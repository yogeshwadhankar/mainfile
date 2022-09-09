console.log (document.getElementById('header-title'));
var headertitle = document.getElementById('header-title');
console.log(headertitle)
headertitle.textContent='Hello';
// console.log(headertitle)
headertitle.style.borderBottom ='solid 3px #000';
// var item =document.getElementsByClassName('list-group-item');
// console.log(item);

// item[0].textContent ='Hello'
// item[1].style.fontWeight='bold';
// item[2].style.backgroundColor ='green';
var header =document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc';
var itemlast =document.querySelector('.list-group-item:last-Child');
itemlast.style.color='green';
var odd =document.querySelectorAll('li:nth-Child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4';
}