const { log } = require('console')
const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.end("Welcome to my home page!")
        
    }
    else
    if (req.url==="/about"){
        res.end("Welcome to my about page!")
    }else{
        res.end(
            `<h1>Oops!</h1>
            wrong page`
        )
        // console.log(req)
    }
    // res.write("welcome to my home page")
    // res.end()
})

server.listen(5000,()=>{console.log('Server is running')})