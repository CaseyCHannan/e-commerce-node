const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>this is not the best way</title></head>')
    res.write('<body><h1>here\'s the html you wanted from the server</h1></body>')
    res.write('</html>')
})


server.listen(3200)