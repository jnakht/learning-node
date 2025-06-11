
const http = require('http');
const fs = require('fs');
const path = require('path');


const pathName = path.join(__dirname, './db/todos.json');

const server = http.createServer((req, res) => {
    if (req.url === '/todos' && req.method === 'GET') {
        const data = fs.readFileSync(pathName, { encoding: 'utf-8'}); 
        res.writeHead(200, {
            "content-type": "application/json",
        })
        res.end(data);
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
       let data = "";
       req.on("data", (chunk) => {
         data = data + chunk;
       })
       req.on("end", () => {
        const {todos, id} = JSON.parse(data);
        const createdAt = new Date().toLocaleString();
        const allTodos = fs.readFileSync(pathName, {encoding: 'utf-8'});
        const parsedAllTodos = JSON.parse(allTodos);
        const newTodo = {todos, id, createdAt};
        parsedAllTodos.push(newTodo);

        fs.writeFileSync(pathName, JSON.stringify(parsedAllTodos, null, 2), {encoding: 'utf-8'});

        res.end(JSON.stringify(newTodo, null, 2));
       })
        
    }

})


server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port: 5000');
})