const Todo = [{
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

const searchText = {
    searchText: ''
}

const renderFunction = function (todo, text) {
    const matchedElement = todo.filter(function (item, index) {
        return item.title.toLowerCase().includes(text.toLowerCase());
    })
    /*debugger key word is used to debug the error and checking if the data is coming as we wanted */
    debugger
    document.querySelector('#display_content').innerHTML = ''
    matchedElement.forEach(function (todos, index) {
        const contentBlock = document.createElement('div')
        contentBlock.textContent = todos.title
        document.querySelector('#display_content').appendChild(contentBlock)
    })
}

renderFunction(Todo, searchText.searchText)

document.querySelector('#todo').addEventListener('input', function (e) {
    searchText.searchText = e.target.value;
    renderFunction(Todo, searchText.searchText);
})

/*Challenge steps
  1> create a form with a input field that is enter the todo
  2> setup the submit handeler and prevent the default behaviour of the package
  3> Add a new item in the todo array with the text data and status a incomplete
  4> Re-render the application
  5> Create the input field value
*/

document.querySelector('#todo_form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(Todo)
    Todo.push({ title: e.target.elements.todoTitle.value, status: e.target.elements.todoStatus.value === true ? true : false })
    renderFunction(Todo, searchText.searchText)
    e.target.elements.todoTitle.value = ''
    e.target.elements.todoStatus.value = ''
})

/*
    challenge steps
    1> create a checkbox and setup event listener ->"hide completed"
    2> create new hideCompleted filter (default false)
    3> update hideCompleted and rerender list on checkbox change
    4> setup renderTodos to remove completed items
*/

document.querySelector('#todo_completed').addEventListener('change', function (e) {
    if (e.target.checked) {
        const hideCompleted = Todo.filter(function (item1, index) {
            return !item1.status
        })
        renderFunction(hideCompleted, searchText.searchText)
    }
    else {
        renderFunction(Todo, searchText.searchText)
    }
})

/*Local storage CURD operation 
    local storage only store string values, if you have a object you need to convert it to string

    1> to create the element in the local storage
        command localStorage.setItem('key','value')

    2> to read the value in the local storage
        command localStorage.getItem('key')
    3> to update the value of localStorage use the 1st command with different value
    4> to delete the element in the local storage
        command localStorage.removeItem()
                localStorage.remove()
                localStorage.clear()
*/

// localStorage.setItem('passion','coding')
localStorage.setItem('passion', 'dancing')
localStorage.clear()
// localStorage.removeItem('passion')
console.log(localStorage.getItem('passion'))

// localStorage.removeItem('passion')
/* if you want to store the object to the local storage need to use two methods
    1> use global object JSON[javascript object notation]
    2> as the local storage only accept string value need to use JSON.stringify(object name you want to convert) and it return 
    a new string which is in object format. Then create the element using localStorage.setItem(enter the variable which has string 
        representation of object.)
    3> if you want to use the string value from local storage into the object format use JSON.parse(enter the string value that you get
        from localStorage.getItem())
    
*/
const user = {
    name: "samson",
    age: 36,
}
const userString = JSON.stringify(user)
localStorage.setItem('user', userString);
const userData = localStorage.getItem('user')
const userObj = JSON.parse(userData)
console.log(`Hi! i am ${userObj.name} and age is ${userObj.age}`)