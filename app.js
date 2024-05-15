const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divs=document.querySelectorAll('.search');
const buts=document.querySelector('.but');

button.addEventListener('click',addtodo)
list.addEventListener('click',deletes)

function addtodo(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('lists');

    const addList = document.createElement('li');
    addList.innerText=input.value;
    addList.classList.add('add-List');
    listDiv.appendChild(addList)

    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML='<i class= \'fa-solid fa-circle-check fa-2x\'></i>';
    buttonAdd.classList.add('add-btn');
    listDiv.appendChild(buttonAdd)

    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML='<i class= \'fa-solid fa-trash fa-2x\'></i>';
    buttonRemove.classList.add('remove-btn');
    listDiv.appendChild(buttonRemove)

    list.appendChild(listDiv);
}

function deletes(e){
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove()
    }

    if(e.target.classList.contains('fa-circle-check')){
        e.target.closest('.lists').classList.toggle('check')
    }
}

buts.addEventListener('click',function(e){
    e.preventDefault()
    divs[0].classList.toggle('expand')
})
