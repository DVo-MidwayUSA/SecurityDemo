let count = 0

function demo2() {

    let todo = document.getElementById('input'),
        checkbox = document.createElement('input'),
        listItem = document.createElement('li'),
        span = document.createElement('span'),
        textNode = document.createTextNode(todo.value)

    checkbox.type = 'checkbox'
    span.appendChild(textNode)

    listItem.appendChild(checkbox)
    listItem.appendChild(span)

    document.getElementById('list').appendChild(listItem)

    todo.value = ''
    count++
}