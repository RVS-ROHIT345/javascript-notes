/* Storing the values into the local storage */
let Todo = getSavedTodos()/* this getSavedTodos is to fetch the data if present in the local storage */

const searchText = {
    searchText: ''
}

renderFunction(Todo, searchText.searchText)

document.querySelector('#todo_form').addEventListener('submit', function(e){
    Todo.push({
        'title': e.target.elements.todoTitle.value,
        'status': e.target.elements.todoStatus.value
    })
    e.target.elements.todoTitle.value = ''
    e.target.elements.todoStatus.value = ''
    // localStorage.setItem('user',JSON.stringify(Todo))
    saveTodos(Todo)
    renderFunction(Todo, searchText.searchText)
})