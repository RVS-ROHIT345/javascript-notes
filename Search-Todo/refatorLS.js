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
        const elementTodo = generatedContent(todos)
        document.querySelector('#display_content').appendChild(elementTodo)
    })
}
// 4
const generatedContent = (taskItem)=> {
    const contentBlock = document.createElement('div')
    contentBlock.textContent = taskItem.title
    return contentBlock
}
