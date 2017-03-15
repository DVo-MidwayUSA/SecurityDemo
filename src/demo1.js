'use strict'

let count = 0

function demo1() {

    let todo = document.getElementById('input'),
        node = document.createElement('li')

    node.innerHTML = '<input type="checkbox" /><span>' + todo.value + '</span>'

    document.getElementById('list').appendChild(node)

    todo.value = ''
    count++
}