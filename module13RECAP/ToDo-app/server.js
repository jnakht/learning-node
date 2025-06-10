
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req, res);
    // console.log(req.url, req.method);
    // res.end('Welcome to ToDo App');

    if (req.url === '/todos' && req.method === 'GET') {
        res.end('All ToDos');
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        res.end('Create ToDo');
    } else {
        res.end('Route Not Found');
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening on port: 5000');
})