const fs = require("fs");
const http = require("http");


const productData = fs.readFileSync("./data/products.json","utf-8");
const productTemplate = fs.readFileSync("./public/index.html","utf-8")



const Server= http.createServer((req , res) =>{
    const pathName = req.url;
    if(pathName === '/'){
        res.writeHead(200)
        res.end(productTemplate)
    }else if(pathName === '/products'){
        res.writeHead(200)
        res.end('HELLO from product page')
    }
    else if(pathName === '/api'){
        res.writeHead(200,{
            "content-type" : "application/json"
        })

        res.end(productData)
    }else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.end('<h1>page not found</h1>')
    }
    console.log(pathName)
    // res.end('hello from server')
})
Server.listen(8000,()=>{
    console.log("listening to incoming request in 8000")
})



// const textIn = fs.readFileSync("./data/text-in.txt","utf-8");
// fs.writeFileSync('./data/text-out.txt',`this is a new line\n ${textIn}\nCreated On: ${Date.now()}`);
// console.log('file read and write completed');