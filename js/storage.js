window.onload = function () {
    let todos = [];
    init();

    function init() {
        todos = JSON.parse(localStorage.getItem('todos')) || []; // OR it with empty array for undefined        
        renderItems();
        bindInputEvents();

    }

    function bindInputEvents() {
        document.getElementById('to-do-input').addEventListener('keypress', function (event) {
            let task = this.value;
            if (event.key === 'Enter') {
                // console.log('ENTER key is pressed');
                createTodo(task);
                syncLocalStorage();
                renderItems();
                this.value = '';
            }
        });

    }

    function createTodo(task) {
        // console.log(task);
        todos.push({
            id: todos.length,
            task: task,
            done: false
        });
    }

    function syncLocalStorage() {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderItems() {
        let pEl = document.getElementById('todo-tasks-list');
        pEl.innerHTML = '';
        let list = '';
        for (var i = 0; i < todos.length; i++) {
            var item = createItemTemplate(todos[i]);
            list += item;
        }
        pEl.innerHTML = list;

        document.querySelectorAll('#todo-tasks-list li button').forEach(function (item) {
            item.addEventListener('click', function (event) {
                let dataId = item.getAttribute('data-id');
                removeItem(dataId);
                syncLocalStorage();
                renderItems();
            });

        });
        document.querySelectorAll('#todo-tasks-list li input').forEach(function (item) {
            item.addEventListener('click', function (event) {
                let dataId = item.getAttribute('data-id');

                if (item.getAttribute('checked')) {
                    // update the "done" parameter as true
                    item.setAttribute('checked', false);
                    updateItem(dataId, false);
                } else {
                    // update the "done" parameter as false
                    // lagyan ng check
                    item.setAttribute('checked', true);
                    updateItem(dataId, true);
                }
                syncLocalStorage();
                renderItems();
            })
        });
    }

    function createItemTemplate(todo) {
        var item = '<li class="todo-item ' + (todo.done ? 'done' : '') + '">';
        item += '<label class="control--checkbox">';
        item += todo.task;
        item += '<input data-id="' + todo.id + '" type="checkbox" ' + (todo.done ? 'checked' : '') + ' />';
        item += '<div class="checked-icon"></div>';
        item += '</label>';
        item += '<button data-id="' + todo.id + '" class="btn remove-todo-btn"><i class="fa fa-trash">DELETE</i></button>';
        item += '</li>';

        return item;
    }

    function updateItem(id, isDone) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos[i].done = isDone;
                break;
            }
        }
    }

    function removeItem(id) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos.splice(i, 1);
            }
        }
    }

};