
const http = require('http');
const { json } = require('stream/consumers');
const data = [
    {
        "title": "prisma",
        "body": "learning node",
        "createdAt": "05/18/2025, 01:25:02 AM"
    },
    {
        "title": "typeScript",
        "body": "learning typescript",
        "createdAt": "10/18/2025, 01:25:02 AM"
    }
]
const server = http.createServer((req, res) => {
    // console.log(req, res);
    // console.log(req.url, req.method);
    // res.end('Welcome to ToDo app server');

    if (req.url === '/todos' && req.method === 'GET') {
        // res.end('All Todos');
        // cannot get json data this way 
        // res.end({
        //     "name": 4,
        // })

        // res.writeHead(201, {
        //     "content-type": "text/plain",
        //     "email": "admin@gmail.com"
        // })

        // res.writeHead(200, {
        //     "content-type": "application/json",
        //     // "email": "admin@gmail.com"
        // })

        res.writeHead(200, {
            "content-type": "text/html",
            // "email": "admin@gmail.com"
        })

        // res.setHeader('content-type', 'text/plain');
        // res.setHeader('email', 'a@gmail.com');
        // res.statusCode = 201;
        // res.end('Hello Todos');

        // res.end(JSON.stringify(data));

        res.end(`<h1>Hello World</h1> <h2>Hello World</h2> <h3>Hello World</h3>`);


    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        res.end('Todo created');
    } else {
        res.end('Route Not Found');
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server listening to port: 5000');
})