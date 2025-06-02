const path = require('path');
const http = require('http');
const fs = require('fs');

const { json } = require('stream/consumers');
const todosPath = path.join(__dirname, './db/todos.json');
const server = http.createServer((req, res) => {


    // console.log(req.url);
    const url = new URL(req.url, `http://${req.headers.host}`);
    // console.log(url);
    // console.log(req.headers.host);
    const pathName = url.pathname;


    if (pathName === '/todos' && req.method === 'GET') {
        const data = fs.readFileSync(todosPath, { encoding: 'utf-8'});
        res.writeHead(200, {
        "content-type": "application/json",
        })
        // console.log(data);
        res.end(
            data
        );
    } else if (pathName === '/todos/create-todo' && req.method === 'POST') {
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

         
    } else if (pathName === '/todo' && req.method === 'GET') {
        console.log('single todo');
        console.log(req.url);

        const title = url.searchParams.get('title');
        // console.log(title);


        const data = fs.readFileSync(todosPath, { encoding: 'utf-8'});
        const parsedData = JSON.parse(data);
        const todo = parsedData.find((todo) => todo.title === title);

        res.writeHead(200, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify(todo, null, 2));


        // res.end("Single TODO");

    } else if (pathName === '/todos/update-todo' && req.method === 'PATCH') {

        let data = '';
        req.on('data', (chunk) => {
            data = data + chunk;
            // console.log(data);
        })
        req.on('end', () => {

            const title = url.searchParams.get('title');
            // console.log(title);
            const {body} = JSON.parse(data);
            // console.log(body);
            // console.log(JSON.parse(data).body);

            const allTODOS = fs.readFileSync(todosPath, { encoding: 'utf-8'});
            const parsedALLTODOS = JSON.parse(allTODOS);

            const todoIdx = parsedALLTODOS.findIndex(todo => todo.title === title);
            // console.log(todoIdx);

            // console.log(parsedALLTODOS[todoIdx]);
            parsedALLTODOS[todoIdx].body = body;
            // console.log(parsedALLTODOS[todoIdx]);

            fs.writeFileSync(todosPath, JSON.stringify(parsedALLTODOS, null, 2), { encoding: 'utf-8'});

            // res.end(JSON.stringify(parsedALLTODOS[todoIdx], null, 2));
            res.end(JSON.stringify({title, body, createdAt : parsedALLTODOS[todoIdx].createdAt}, null, 2))
        })
    } else if (pathName === '/todos/delete-todo' && req.method === 'DELETE') {
        const title = url.searchParams.get('title');

        const allTODOS = fs.readFileSync(todosPath, { encoding: 'utf-8'});
        const parsedAllToDos = JSON.parse(allTODOS);


        const todo = parsedAllToDos.find(todo => todo.title === title);
        // console.log(todo);
        const newParsedAllTODOS = parsedAllToDos.filter(todo => todo.title !== title);
        // console.log(newParsedAllTODOS);

        fs.writeFileSync(todosPath, JSON.stringify(newParsedAllTODOS, null, 2), { encoding: 'utf-8' });

        res.end(JSON.stringify(todo, null, 2));



    }
    
    
    
    else {
        res.end('Route Not Found');
    }

    
    
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is connected on port: 5000');
})