
const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    // console.log({req, res});
    // console.log(req.url, req.method);
    // res.end("Welcome to TO DO application server");
    const url = new URL(req.url, `http://${req.headers.host}`);
    // console.log(url);
    // console.log(req.headers.host);
    // console.log(url.pathname);
    const pathName = path.join(__dirname, './db/todos.json');

    if (url.pathname === '/todos' && req.method === 'GET') {
        res.writeHead(201, {
            "content-type" : "application/json"
        })
        // res.setHeader("name", "Prisma");
        // res.setHeader("email", "ph@gmail.com");
        // res.statusCode = 201;
        const pathName = path.join(__dirname, './db/todos.json');
        const todos = fs.readFileSync(pathName, { encoding : "utf-8" });


        res.end(todos)
        // res.end(`<h1>Hello World</h1> <h2>Hello World</h2> <h3>Hello World</h3>`)
    } else if (url.pathname === '/todos/create-todo' && req.method === 'POST') {
        let data = "";
        let createdAt = '';
        req.on("data", (chunk) => {
            data = data + chunk;
            // console.log(data);
        })
        req.on('end', () => {
            // console.log('This is the data', data);
            const {title, body} = JSON.parse(data);
            createdAt = new Date().toLocaleString();
            const pathName = path.join(__dirname, './db/todos.json');
            const todos = fs.readFileSync(pathName, { encoding: "utf-8"});
            const allTodos = JSON.parse(todos);
            allTodos.push({title, body, createdAt});
            console.log(allTodos);
            fs.writeFileSync(pathName, JSON.stringify(allTodos, null, 2), { encoding: "utf-8"});
            res.end(JSON.stringify({title, body, createdAt}, null, 2));
        })
        
    } else if (url.pathname === '/todo' && req.method === "GET") {
        // console.log(url.searchParams.get('title'));
        const title = url.searchParams.get('title');
        console.log(title);
        const Todos = fs.readFileSync(pathName, { encoding: "utf-8" });
        const allTodos = JSON.parse(Todos);
        const singleTodo = allTodos.find(todo => todo.title === title);
        // console.log(singleTodo);
        res.end(JSON.stringify(singleTodo, null, 2));
    }
    
    
    
    else {
        res.end('Route not found');
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is running on port 5000");
})