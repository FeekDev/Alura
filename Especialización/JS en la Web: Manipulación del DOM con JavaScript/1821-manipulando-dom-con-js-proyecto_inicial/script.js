import checkComplete from './components/completeTask.js';
import deleteIcon from "./components/deleteTask.js";

(() => {
    const btn = document.querySelector('[data-button-add]');

    const createTask = (evento) => {
        evento.preventDefault()
        const input = document.querySelector('[data-input-text]');
        let value = input.value;
        input.value = ' ';
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerHTML = value;
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }

    btn.addEventListener('click', createTask);
})();