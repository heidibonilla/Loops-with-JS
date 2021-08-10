let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here
list.textContent = 'Here is my list: ';
for(let i = 0; i < myArray.length; i++) {
 if(i !== myArray.length -1) {
  list.textContent += myArray[i] + ', ';
 } else {
  list.textContent += 'and ' + myArray[i] + '.';
 }
}
// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);