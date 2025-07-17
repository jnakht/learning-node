
const http = require('http');

const allTodos = [
    {"name": "prisma", "learned" : "true"}
]

const server = http.createServer((req, res) => {
    // console.log({req, res});
    // console.log(req.url, req.method);
    // res.end("Welcome to TO DO application server");


    if (req.url === '/todos' && req.method === 'GET') {
        res.writeHead(201, {
            "content-type" : "application/json"
        })
        // res.setHeader("name", "Prisma");
        // res.setHeader("email", "ph@gmail.com");
        // res.statusCode = 201;
        res.end(JSON.stringify(allTodos))
        // res.end(`<h1>Hello World</h1> <h2>Hello World</h2> <h3>Hello World</h3>`)
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        res.end('ToDo Created');
    } else {
        res.end('Route not found');
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is running on port 5000");
})