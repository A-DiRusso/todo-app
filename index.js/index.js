const http = require('http');

const Todo = require('../models/todo.js');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer( async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/todo') {
        const allTodos = await Todo.getAll();
        const todosJSON = JSON.stringify(allTodos);
        res.end(todosJSON);
    } else {
        res.end(`{
            message: "Thank you for your patronage. Please send bitcoin!"
        }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is runing at http://${hostname}:${port}`);
});