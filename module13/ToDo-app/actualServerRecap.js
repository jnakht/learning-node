

const http = require('http');
const path = require('path');
const fs = require('fs');


const filePath = path.join(__dirname, './db/todos.json');

const server = http.createServer((req, res) => {
    if (req.url === '/todos' && req.method === 'GET') {
        const allTODOS = fs.readFileSync(filePath, { encoding: 'utf-8' });

        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(allTODOS);
    } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
        let data = '';
        req.on('data', (chunk_data) => {
            data = data + chunk_data;
            // console.log(data);
            res.end(data);
        })
        // console.log(data);
        req.on('end', () => {
            const {title, body} = JSON.parse(data);
            console.log(title, body);
            const createdAt = new Date().toLocaleString();
            const allTODOS = fs.readFileSync(filePath, { encoding: 'utf-8'});
            const parsedALLTODOS = JSON.parse(allTODOS);
            parsedALLTODOS.push({title, body, createdAt});
            console.log(parsedALLTODOS);
            fs.writeFileSync(filePath, JSON.stringify(parsedALLTODOS, null, 2), { encoding: 'utf-8'});
            res.end(JSON.stringify({title, body, createdAt}, null, 2));

        })
    }
})



server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port: 5000');
})