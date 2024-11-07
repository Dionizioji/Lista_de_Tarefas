const addButton = document.getElementById('add-task-btn')
const deleteButton = document.getElementById('delete-btn')
const doneButton = document.getElementById('confirm-btn')

addButton.addEventListener('click', (event) => {
    event.preventDefault()
    addTask()
})

deleteButton.addEventListener('click', (event) => {
    event.preventDefault()
    deleteTasks()
})

doneButton.addEventListener('click', (event) => {
    event.preventDefault()
    confirmTasks()
})

function addTask(){
    const inputField = document.getElementById('input-field')
    const lineThree = document.getElementById('line3')

    if(inputField.value === ''){
        alert('Campo em branco!\n\nDigite alguma tarefa para ser adicionada!')
    } else {
        const newTask = document.createElement('div')
        newTask.className = 'new-input-form'
        newTask.innerText = inputField.value
        lineThree.insertAdjacentElement('afterend', newTask)

        const selectedElem = document.createElement('input')
        selectedElem.setAttribute('type', 'checkbox')
        selectedElem.className = 'selected-item'
        newTask.appendChild(selectedElem)

        inputField.value = ''  
    }
}

function deleteTasks(){
    const tasks = document.querySelectorAll('.new-input-form')
    tasks.forEach(task => {
        const checkbox = task.querySelector('.selected-item')
        if (checkbox.checked) {
            task.remove()
        }
    })
}

function confirmTasks(){
    const tasks = document.querySelectorAll('.new-input-form')
    tasks.forEach(task => {
        const checkbox = task.querySelector('.selected-item')
        if (checkbox.checked) {
            task.style.textDecoration = 'line-through'
            checkbox.checked = false  
        }
    })
}




