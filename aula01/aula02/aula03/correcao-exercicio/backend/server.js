import http from 'http';

const server = http.createServer((req, res) => {
const total = 100 + 2 + 5 + 3 / 25 * 2
res.end(`O total foi: ${total}`)

})
server.listen(3000, `localhost`)