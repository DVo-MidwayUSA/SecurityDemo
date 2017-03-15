'use strict';

window.todos = [];

function demo0() {

    document.getElementById('button').addEventListener('click', function (e) {

        e.preventDefault();

        var todo = document.getElementById('input');

        window.todos.push(todo.value);

        document.body.innerHTML = '';
        document.write(buildView());
    });
}

function buildTodos() {

    var dom = '';

    todos.forEach(function (todo) {

        dom += '<li><input type="checkbox" /><span>' + todo + '</span></li>';
    });

    return dom;
}

function buildView() {

    return '\n    \n    <!DOCTYPE html>\n\n    <html lang="en">\n\n    <head>\n        <meta charset="utf-8">\n\n        <title>MidwayUSA - XSS Demo</title>\n        <meta name="description" content="MidwayUSA - XSS Demo">\n        <meta name="author" content="dvo@midwayusa.com">\n\n        <!-- Latest compiled and minified CSS -->\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"\n            crossorigin="anonymous">\n\n        <!-- Optional theme -->\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"\n            crossorigin="anonymous">\n\n        <link rel="stylesheet" href="css/main.css" />\n    </head>\n\n    <body>\n\n        <div class="container">\n            <div class="header clearfix">\n                <nav>\n                    <ul class="nav nav-pills pull-right">\n                        <li role="presentation" class="active">\n                            <a href="/SecurityDemo">Demo 1</a>\n                        </li>\n                        <li role="presentation">\n                            <a href="/SecurityDemo/demo1.html">Demo 2</a>\n                        </li>\n                        <li role="presentation">\n                            <a href="/SecurityDemo/demo2.html">Demo 3</a>\n                        </li>\n                    </ul>\n                </nav>\n                <h3 class="text-muted">MidwayUSA - XSS Demo</h3>\n            </div>\n\n            <div class="jumbotron">\n                <h1>Awesome Todos</h1>\n                <p class="lead">\n                    The most vulnerable to do list ever...This would be a great application if it were protected against XSS\n                </p>\n                <div class="form-inline">\n                    <div class="form-group">\n                        <input type="text" class="form-control input-lg" id="input" placeholder="Thing to do..." />\n                        <button type="button" class="btn btn-lg btn-success" id="button">Do it!</button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="row marketing">\n                <ul class="list-unstyled">\n\n                ' + buildTodos() + '\n\n                </ul>\n            </div>\n\n            <footer class="footer">\n                <p>&copy; 2016 MidwayUSA</p>\n            </footer>\n\n        </div>\n\n        <script src="js/main.js"></script>\n        <script>\n            demo0();\n        </script>\n    </body>\n\n    </html>\n    ';
}
'use strict';

var count = 0;

function demo1() {

    var todo = document.getElementById('input'),
        node = document.createElement('li');

    node.innerHTML = '<input type="checkbox" /><span>' + todo.value + '</span>';

    document.getElementById('list').appendChild(node);

    todo.value = '';
    count++;
}
'use strict';

var count = 0;

function demo2() {

    var todo = document.getElementById('input'),
        checkbox = document.createElement('input'),
        listItem = document.createElement('li'),
        span = document.createElement('span'),
        textNode = document.createTextNode(todo.value);

    checkbox.type = 'checkbox';
    span.appendChild(textNode);

    listItem.appendChild(checkbox);
    listItem.appendChild(span);

    document.getElementById('list').appendChild(listItem);

    todo.value = '';
    count++;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8wLmpzIiwiZGVtbzEuanMiLCJkZW1vMi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ0b2RvcyIsImRlbW8wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2RvIiwicHVzaCIsInZhbHVlIiwiYm9keSIsImlubmVySFRNTCIsIndyaXRlIiwiYnVpbGRWaWV3IiwiYnVpbGRUb2RvcyIsImRvbSIsImZvckVhY2giLCJjb3VudCIsImRlbW8xIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImRlbW8yIiwiY2hlY2tib3giLCJsaXN0SXRlbSIsInNwYW4iLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLE9BQU9DLEtBQVAsR0FBZSxFQUFmOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7O0FBRWJDLGFBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxVQUFDQyxDQUFELEVBQU87O0FBRS9EQSxVQUFFQyxjQUFGOztBQUVBLFlBQUlDLE9BQU9MLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWDs7QUFFQUosZUFBT0MsS0FBUCxDQUFhUSxJQUFiLENBQWtCRCxLQUFLRSxLQUF2Qjs7QUFFQVAsaUJBQVNRLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixFQUExQjtBQUNBVCxpQkFBU1UsS0FBVCxDQUFlQyxXQUFmO0FBQ0gsS0FWRDtBQVdIOztBQUVELFNBQVNDLFVBQVQsR0FBc0I7O0FBRWxCLFFBQUlDLE1BQU0sRUFBVjs7QUFFQWYsVUFBTWdCLE9BQU4sQ0FBYyxVQUFDVCxJQUFELEVBQVU7O0FBRXBCUSxlQUFPLHdDQUF3Q1IsSUFBeEMsR0FBK0MsY0FBdEQ7QUFDSCxLQUhEOztBQUtBLFdBQU9RLEdBQVA7QUFDSDs7QUFFRCxTQUFTRixTQUFULEdBQXFCOztBQUVqQiw2NEVBNERjQyxZQTVEZDtBQStFSDtBQ2hIRDs7QUFFQSxJQUFJRyxRQUFRLENBQVo7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjs7QUFFYixRQUFJWCxPQUFPTCxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQVg7QUFBQSxRQUNJZ0IsT0FBT2pCLFNBQVNrQixhQUFULENBQXVCLElBQXZCLENBRFg7O0FBR0FELFNBQUtSLFNBQUwsR0FBaUIsb0NBQW9DSixLQUFLRSxLQUF6QyxHQUFpRCxTQUFsRTs7QUFFQVAsYUFBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ2tCLFdBQWhDLENBQTRDRixJQUE1Qzs7QUFFQVosU0FBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQVE7QUFDSDs7O0FDZkQsSUFBSUEsUUFBUSxDQUFaOztBQUVBLFNBQVNLLEtBQVQsR0FBaUI7O0FBRWIsUUFBSWYsT0FBT0wsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFYO0FBQUEsUUFDSW9CLFdBQVdyQixTQUFTa0IsYUFBVCxDQUF1QixPQUF2QixDQURmO0FBQUEsUUFFSUksV0FBV3RCLFNBQVNrQixhQUFULENBQXVCLElBQXZCLENBRmY7QUFBQSxRQUdJSyxPQUFPdkIsU0FBU2tCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FIWDtBQUFBLFFBSUlNLFdBQVd4QixTQUFTeUIsY0FBVCxDQUF3QnBCLEtBQUtFLEtBQTdCLENBSmY7O0FBTUFjLGFBQVNLLElBQVQsR0FBZ0IsVUFBaEI7QUFDQUgsU0FBS0osV0FBTCxDQUFpQkssUUFBakI7O0FBRUFGLGFBQVNILFdBQVQsQ0FBcUJFLFFBQXJCO0FBQ0FDLGFBQVNILFdBQVQsQ0FBcUJJLElBQXJCOztBQUVBdkIsYUFBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ2tCLFdBQWhDLENBQTRDRyxRQUE1Qzs7QUFFQWpCLFNBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0FRO0FBQ0giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxud2luZG93LnRvZG9zID0gW11cclxuXHJcbmZ1bmN0aW9uIGRlbW8wKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKVxyXG5cclxuICAgICAgICB3aW5kb3cudG9kb3MucHVzaCh0b2RvLnZhbHVlKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoYnVpbGRWaWV3KCkpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFRvZG9zKCkge1xyXG5cclxuICAgIGxldCBkb20gPSAnJ1xyXG5cclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuXHJcbiAgICAgICAgZG9tICs9ICc8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PHNwYW4+JyArIHRvZG8gKyAnPC9zcGFuPjwvbGk+J1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZG9tXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVmlldygpIHtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgXHJcbiAgICA8IURPQ1RZUEUgaHRtbD5cclxuXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuXHJcbiAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHJcbiAgICAgICAgPHRpdGxlPk1pZHdheVVTQSAtIFhTUyBEZW1vPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTWlkd2F5VVNBIC0gWFNTIERlbW9cIj5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImR2b0BtaWR3YXl1c2EuY29tXCI+XHJcblxyXG4gICAgICAgIDwhLS0gTGF0ZXN0IGNvbXBpbGVkIGFuZCBtaW5pZmllZCBDU1MgLS0+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtQlZZaWlTSUZlSzFkR21KUkFreWN1SEFIUmczMk9tVWN3dzdvbjNSWWRnNFZhK1BtU1Rzei9LNjh2YmRFamg0dVwiXHJcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcblxyXG4gICAgICAgIDwhLS0gT3B0aW9uYWwgdGhlbWUgLS0+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLXRoZW1lLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtckh5b04xaVJzVlhWNG5EMEp1dGxuR2FzbENKdUM3dXdqZHVXOVNWckx2Ullvb1BwMmJXWWdtZ0pRSVh3bC9TcFwiXHJcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcblxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21haW4uY3NzXCIgLz5cclxuICAgIDwvaGVhZD5cclxuXHJcbiAgICA8Ym9keT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1NlY3VyaXR5RGVtb1wiPkRlbW8gMTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvU2VjdXJpdHlEZW1vL2RlbW8xLmh0bWxcIj5EZW1vIDI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1NlY3VyaXR5RGVtby9kZW1vMi5odG1sXCI+RGVtbyAzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtbXV0ZWRcIj5NaWR3YXlVU0EgLSBYU1MgRGVtbzwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkF3ZXNvbWUgVG9kb3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIG1vc3QgdnVsbmVyYWJsZSB0byBkbyBsaXN0IGV2ZXIuLi5UaGlzIHdvdWxkIGJlIGEgZ3JlYXQgYXBwbGljYXRpb24gaWYgaXQgd2VyZSBwcm90ZWN0ZWQgYWdhaW5zdCBYU1NcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnXCIgaWQ9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGhpbmcgdG8gZG8uLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcIiBpZD1cImJ1dHRvblwiPkRvIGl0ITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYXJrZXRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAke2J1aWxkVG9kb3MoKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPiZjb3B5OyAyMDE2IE1pZHdheVVTQTwvcD5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL21haW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0PlxyXG4gICAgICAgICAgICBkZW1vMCgpO1xyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgPC9ib2R5PlxyXG5cclxuICAgIDwvaHRtbD5cclxuICAgIGBcclxufSIsIid1c2Ugc3RyaWN0J1xyXG5cclxubGV0IGNvdW50ID0gMFxyXG5cclxuZnVuY3Rpb24gZGVtbzEoKSB7XHJcblxyXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSxcclxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG5cclxuICAgIG5vZGUuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxzcGFuPicgKyB0b2RvLnZhbHVlICsgJzwvc3Bhbj4nXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKS5hcHBlbmRDaGlsZChub2RlKVxyXG5cclxuICAgIHRvZG8udmFsdWUgPSAnJ1xyXG4gICAgY291bnQrK1xyXG59IiwibGV0IGNvdW50ID0gMFxyXG5cclxuZnVuY3Rpb24gZGVtbzIoKSB7XHJcblxyXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSxcclxuICAgICAgICBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksXHJcbiAgICAgICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLFxyXG4gICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcbiAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2RvLnZhbHVlKVxyXG5cclxuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXHJcbiAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KVxyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3BhbilcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmFwcGVuZENoaWxkKGxpc3RJdGVtKVxyXG5cclxuICAgIHRvZG8udmFsdWUgPSAnJ1xyXG4gICAgY291bnQrK1xyXG59Il19
