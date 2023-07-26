function addLi(){

const input = document.getElementById('input-text').value;
if (input.trim() === '') {
  return; // If null dont add new element
}
const list = document.querySelector('ul');
const input_add = document.createElement('li');
input_add.classList.add("input_add");
input_add.textContent = input;


const btn = document.createElement('button')
const iconTrash = document.createElement('i');
iconTrash.classList.add("fas", "fa-trash");


btn.appendChild(iconTrash);

btn.addEventListener('click', function() {
  list.removeChild(input_add);
});

input_add.appendChild(btn);
list.appendChild(input_add);

document.getElementById('input-text').value = '';
}
function handleKeyPress(event) {
  if (event.keyCode === 13) { // 13 = "Enter"
    event.preventDefault();
    addLi();
    document.getElementById('input-text').value = '';
  }
}

function removeLi(){
  const list = document.querySelector('ul');
  const toremove = document.querySelectorAll('li');
  for(let i=0; i < toremove.length; i++ ){
    toremove[i].remove();
  }
}
