const path = require('path');
const http = require('http');
const fs = require('fs');

const { json } = require('stream/consumers');
const todosPath = path.join(__dirname, './db/todos.json');
const server = http.createServer((req, res) => {

    if (req.url === '/todos' && req.method === 'GET') {
        const data = fs.readFileSync(todosPath, { encoding: 'utf-8'});
        res.writeHead(200, {
        "content-type": "application/json",
        })
        // console.log(data);
        res.end(
            data
        );
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        let data = '';
        req.on('data', (chunk) => {
            data = data + chunk;
            // console.log(data);
        })
        // console.log(data);
        req.on('end', () => {
            // console.log(data);
            const {title, body} = JSON.parse(data);
            // console.log(title, body);
            const createdAt = new Date().toLocaleString();

            const allToDos = fs.readFileSync(todosPath, { encoding: 'utf-8'});
            // console.log(typeof allToDos);
            const parsedAllToDos = JSON.parse(allToDos);
            parsedAllToDos.push({title, body, createdAt});
            // console.log(parsedAllToDos);
            fs.writeFileSync(todosPath, JSON.stringify(parsedAllToDos, null, 2), { encoding: 'utf-8' });
           res.end(JSON.stringify({title, body, createdAt}, null, 2));
        })

         
    } else {
        res.end('Route Not Found');
    }

    
    
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is connected on port: 5000');
})