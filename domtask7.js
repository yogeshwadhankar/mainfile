var itemList =document.querySelector('#items');
console.log(itemList);
console.log (itemList.parentNode);
itemList.parentNode.style.backgroundColor='#ccc';
console.log(itemList.parentNode.parentNode.parentNode);
itemList.parentNode.parentNode.parentNode.style.backgroundColor ='red';


console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow';

console.log(itemList.fristChild);
itemList.firstElementChild.textContent ='Hello1';
var newdiv =document.createElement('div');
newdiv.className ='hello';
newdiv.className='hello1';
newdiv.setAttribute('title','hello sir');
newdiv.appendChild(newdivtext);
