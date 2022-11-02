const Todo = [{
    title: 'Do the car wash',
    status: false
},{
    title: 'Need to learn cooking',
    status: true
},{
    title: 'Look for good place to visit in delhi',
    status: false
},{
    title: 'watch youtube videos',
    status: true
},{
    title: 'Do Dishes',
    status: false
}]

const searchText = {
    searchText:''
}

const renderFunction = function(todo, text){
    const matchedElement = todo.filter(function(item,index){
        return item.title.toLowerCase().includes(text.toLowerCase());
    })

    document.querySelector('#display_content').innerHTML = ''
    matchedElement.forEach(function(todos,index){
        const contentBlock = document.createElement('div')
        contentBlock.textContent = todos.title
        document.querySelector('#display_content').appendChild(contentBlock)
    })
}

renderFunction(Todo, searchText.searchText)

document.querySelector('#todo').addEventListener('input',function(e){
    searchText.searchText = e.target.value;
    renderFunction(Todo, searchText.searchText);
})