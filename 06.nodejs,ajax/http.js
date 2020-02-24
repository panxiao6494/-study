let http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    res.writeHead(200, {
        "Content-Type": 'text/html;charset=UTF-8'
    });
    res.write("<h1>11</h1>");
    console.log('http start on 3000')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('server run on 3000')
})