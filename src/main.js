'use strict'

let count = 0

function addToDo() {

    let todo = document.getElementById('input'),
        node = document.createElement('li')

    node.innerHTML = `<input type="checkbox" /><span>${todo.value}</span>`

    document.getElementById('column' + (count % 2 + 1)).appendChild(node)

    todo.value = ''
    count++
}