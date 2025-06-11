
const http = require('http');


const data = [{
            "todos": "first Todo",
            "id": "1",
        }];
const server = http.createServer((req, res) => {
    // console.log(req, res);
    // console.log(req.url, req.method);
    // res.end('Welcome to ToDo App');

    if (req.url === '/todos' && req.method === 'GET') {
        // res.writeHead(200, {
        //     "content-type": 'text/plain'
        // })
        // res.end('jdfj');

        // res.writeHead(201, {
        //     "content-type": 'application/json',
        //     "email": 'jisan@gmail.com',
        // })
        // res.setHeader("content-type", 'application/json');
        // res.setHeader("email", 'nadim@gmail.com');
        // res.statusCode = 201;
        // // res.end(JSON.stringify({
        // //     "todos": "first Todo",
        // //     "id": "1",
        // // }))
        // res.end(JSON.stringify(data));

        res.writeHead(200, {
            "content-type": 'text/html',
        })
        res.end(`
            <h1> Welcomet to ToDo App</h1>
            <p> Here is your todo list</p>
            <ul> 
                <li>First Todo</li>
                <li>Second Todo</li>
            </ul>
        `)
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        res.end('Create ToDo');
    } else {
        res.end('Route Not Found');
    }
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening on port: 5000');
})