'use strict'

let count = 0

function demo0() {

    let todo = document.getElementById('input')

    document.write(todo.value)
}

function demo1() {

    let todo = document.getElementById('input'),
        node = document.createElement('li')

    node.innerHTML = '<input type="checkbox" /><span>' + todo.value + '</span>'

    document.getElementById('column' + (count % 2 + 1)).appendChild(node)

    todo.value = ''
    count++
}

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

    document.getElementById('column' + (count % 2 + 1)).appendChild(listItem)

    todo.value = ''
    count++
}