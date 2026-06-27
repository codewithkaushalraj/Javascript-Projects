const btn = document.querySelector('.add')
const input = document.querySelector('input')
const list = document.querySelector('.todolist')


btn.addEventListener('click', () => {
    const value = input.value;
    if (value.trim() === "") {
        alert('Please Enter a Task')
        return;
    }
    list.innerHTML += `<div class="li">
                    <h3>${value}</h3>
                    <div class="btn">
                        <button class='edit'>Edit</button>
                        <button class ='delete'>Delete</button>
                    </div>
                </div>`
    input.value = ""
    child = list.children;
    // arr=Array.from(list.children);
})

list.addEventListener('click', (event) => {
    // delete an Element
    if (event.target.classList.contains('delete'))
        event.target.closest('.li').remove()
    // Edit  and Element
    else if (event.target.classList.contains('edit')) {
        let editedTask = prompt("Edit Task : ");
        let elem = event.target.closest('.li').children[0]
        elem.innerHTML = editedTask;
    }

})





