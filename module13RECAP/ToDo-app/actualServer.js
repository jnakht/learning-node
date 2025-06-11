
const http = require('http');
const fs = require('fs');
const path = require('path');


const pathName = path.join(__dirname, './db/todos.json');


const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    // console.log(url);


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
    // else if (req.url.startsWith('/todo') && req.method === 'GET') {
    //     res.end('Single Todo');
    // }

    else if (url.pathname === '/todo' && req.method === 'GET') {
        const id = url.searchParams.get('id');
        const allTodos = fs.readFileSync(pathName, {encoding: 'utf-8'});
        const parsedAllTodos = JSON.parse(allTodos);
        const todo = parsedAllTodos.find(todo => todo.id === id);
        res.end(JSON.stringify(todo, null, 2));
        // res.end('Single Todo');
    }

    else if (url.pathname === '/todos/update-todo' && req.method === 'PATCH') {
        const id = url.searchParams.get('id');
        let data = "";
        req.on('data', (chunk) => {
            data = data + chunk;
        }) 
        req.on('end', () => {
            const parsedData = JSON.parse(data);
            const {...newProps} = parsedData;

            const allTodos = fs.readFileSync(pathName, 'utf-8');
            const parsedAllTodos = JSON.parse(allTodos);
            let todo = parsedAllTodos.find(todo => todo.id === id);
            const {...oldProps} = todo;
            const newParsedAllTodos = parsedAllTodos.filter(todo => todo.id !== id);
            const newTodo = {...oldProps, ...newProps};
            todo = newTodo;
            newParsedAllTodos.push(todo);
            fs.writeFileSync(pathName, JSON.stringify(newParsedAllTodos, null, 2), {encoding: "utf-8"});
            res.end(JSON.stringify(todo, null, 2));
        })
           
    } else if (url.pathname === '/todos/delete-todo' && req.method === 'DELETE') {
        const id = url.searchParams.get('id');
        const allTodos = fs.readFileSync(pathName, {encoding: 'utf-8'});
        const parsedAllTodos = JSON.parse(allTodos);
        const newParsedAllTodos = parsedAllTodos.filter(todo => todo.id !== id);
        fs.writeFileSync(pathName, JSON.stringify(newParsedAllTodos, null, 2), 'utf-8');
        res.end('Todo deleted Successfully');
    }

})


server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port: 5000');
})