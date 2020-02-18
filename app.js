const http = require('http')
const fs = require('fs')
const port = 5000

const server = http.createServer(function (req, res) {

    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./node_code1/home.html', function (error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./node_code1/login1.html', function (error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    }



})

server.listen(port, function (error) {
    if (error) {
        console.log('something not working', error)
    } else {
        console.log('server is listening to port' + port)
    }
})