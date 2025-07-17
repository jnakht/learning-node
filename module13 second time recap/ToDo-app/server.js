
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log({req, res});
    // console.log(req.url, req.method);
    // res.end("Welcome to TO DO application server");


    if (req.url === '/todos' && req.method === 'GET') {
        res.end('ALL TODOS');
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        res.end('ToDo Created');
    } else {
        res.end('Route not found');
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is running on port 5000");
})