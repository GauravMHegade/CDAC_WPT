const h = require('http')
h.createServer((req, res) => {
    console.log("Method "+req.method)
    if(req.method === "GET"){
        res.write("GET Method Demo")
    }
    if(req.method === "POST"){
        res.write("POST Method Demo")
    }
}).listen(4000,() => {
    console.log("Server Started")
})
    