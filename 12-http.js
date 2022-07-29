const http = require('http')
// incoming request
// response is what we are sending back = res
// port serveer is listening to = 5000 // server.listen(5000)
// few methods in response
// 1- write (Welcome to our home page)
// 2- end

// webservers should always be up looking for request

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is a little history about us')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)