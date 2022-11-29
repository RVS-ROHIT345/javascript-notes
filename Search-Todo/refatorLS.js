/*Challenge to refactor localStorage.js file
1> fetch existing todo from localStorage [getSavedTodos]
2> save todo to localStorage [saveTodos]
3> render application todo based on filters [renderTodos]
4> get the dom Elements for an individual note [generateTodoDOM]
*/
// 1>
const getSavedTodos = function(){
    let storeData = localStorage.getItem('user')
    if(storeData !== null){
        return JSON.parse(storeData)
    }else{
        return [{
            title: 'Do the car wash',
            status: false
        }, {
            title: 'Need to learn cooking',
            status: true
        }, {
            title: 'Look for good place to visit in delhi',
            status: false
        }, {
            title: 'watch youtube videos',
            status: true
        }, {
            title: 'Do Dishes',
            status: false
        }]
    }
}
//2 
const saveTodos = (todosItem) => {
    localStorage.setItem('user',JSON.stringify(todosItem))
}
//3 
const renderFunction = function (todo, text) {
    const matchedElement = todo.filter(function (item, index) {
        return item.title.toLowerCase().includes(text.toLowerCase());
    })

    document.querySelector('#display_content').innerHTML = ''
    matchedElement.forEach(function (todos, index) {
        const elementTodo = generateTodoDOM(todos)
        document.querySelector('#display_content').appendChild(elementTodo)
    })
}
// 4
/* advance dom rendering challenge 
    1>setup a root div
    2>setup and append checkbox(set type attribute)
    3>setup and append span(set text value)
    4>setup and append button(set text 'delete task')
*/
const generateTodoDOM = (taskItem)=> {
    const containerBlock = document.createElement('div')
    const checkbox = document.createElement('input')
    const contentBlock = document.createElement('span')
    const deleteButton = document.createElement('button')
    // setup of the checkbox
    checkbox.setAttribute('type', 'checkbox')
    containerBlock.appendChild(checkbox)
    // setup of the span textContent
    contentBlock.textContent = taskItem.title
    containerBlock.appendChild(contentBlock)
    // setup of the button and it's content
    deleteButton.textContent = 'Delete Task'
    containerBlock.appendChild(deleteButton)
    
    return containerBlock
}
