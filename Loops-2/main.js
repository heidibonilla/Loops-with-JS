let name = 'Mustafa';
let input = document.querySelector('input');
let btn = document.querySelector('button');
let para = document.createElement('p');

let phonebook = [
 { name: 'Chris', number: '1549' },
 { name: 'Li Kang', number: '9634' },
 { name: 'Anne', number: '9065' },
 { name: 'Francesca', number: '3001' },
 { name: 'Mustafa', number: '6888' },
 { name: 'Tina', number: '4312' },
 { name: 'Bert', number: '7780' },
 { name: 'Jada', number: '2282' },
]

// Add your code here
btn.addEventListener('click', function () {
 let i = 0;
 para.textContent = '';
 while (i < phonebook.length) {
  if (input.value === phonebook[i].name) {
   para.textContent = `${phonebook[i].name} ${phonebook[i].number}`;
   break;
  };
  i++;
 };
})
// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);