const db = require('./conn');


class Todo {
    constructor(id, content, status) {
        this.id = id;
        this.content = content;
        this.status = status;
    }

    static getById(id) {
        return db.one(`select * from todo where id=${id}`)
                    .then((todoData) => {
                        return new Todo(todoData.id, todoData.content, todoData.status);
                    })
                    .catch(() => {
                        return null;
                    });
    }

    static getAll() {
        return db.any(`select * from todo`) 
            .then((arrayOfTodos) => {
                return arrayOfTodos.map((todoData) => {
                    const todoList = new Todo(
                        todoData.id,
                        todoData.content,
                        todoData.status
                    );
                    console.log(todoList);
                    return todoList;
                }); 
            });
    }

    save() {
        return db.result(`
        update todo set
        content='${this.content}',
        status='${this.status}'
    where id=${this.id}
    `)
    }
}

   
module.exports = Todo;