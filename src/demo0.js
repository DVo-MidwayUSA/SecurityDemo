'use strict'

window.todos = []

function demo0() {

    document.getElementById('button').addEventListener('click', (e) => {

        e.preventDefault();

        let todo = document.getElementById('input')

        window.todos.push(todo.value)

        document.body.innerHTML = ''
        document.write(buildView())
    })
}

function buildTodos() {

    let dom = ''

    todos.forEach((todo) => {

        dom += '<li><input type="checkbox" /><span>' + todo + '</span></li>'
    })

    return dom
}

function buildView() {

    return `
    
    <!DOCTYPE html>

    <html lang="en">

    <head>
        <meta charset="utf-8">

        <title>MidwayUSA - XSS Demo</title>
        <meta name="description" content="MidwayUSA - XSS Demo">
        <meta name="author" content="dvo@midwayusa.com">

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
            crossorigin="anonymous">

        <link rel="stylesheet" href="css/main.css" />
    </head>

    <body>

        <div class="container">
            <div class="header clearfix">
                <nav>
                    <ul class="nav nav-pills pull-right">
                        <li role="presentation" class="active">
                            <a href="/SecurityDemo">Demo 1</a>
                        </li>
                        <li role="presentation">
                            <a href="/SecurityDemo/demo1.html">Demo 2</a>
                        </li>
                        <li role="presentation">
                            <a href="/SecurityDemo/demo2.html">Demo 3</a>
                        </li>
                    </ul>
                </nav>
                <h3 class="text-muted">MidwayUSA - XSS Demo</h3>
            </div>

            <div class="jumbotron">
                <h1>Awesome Todos</h1>
                <p class="lead">
                    The most vulnerable to do list ever...This would be a great application if it were protected against XSS
                </p>
                <div class="form-inline">
                    <div class="form-group">
                        <input type="text" class="form-control input-lg" id="input" placeholder="Thing to do..." />
                        <button type="button" class="btn btn-lg btn-success" id="button">Do it!</button>
                    </div>
                </div>
            </div>

            <div class="row marketing">
                <ul class="list-unstyled">

                ${buildTodos()}

                </ul>
            </div>

            <footer class="footer">
                <p>&copy; 2016 MidwayUSA</p>
            </footer>

        </div>

        <script src="js/main.js"></script>
        <script>
            demo0();
        </script>
    </body>

    </html>
    `
}