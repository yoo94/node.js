const http = require("http");

const server = http.createServer((req,res) => {
    // console.log(req.url);
    if(req.url === "/"){
    res.write("<h1>hello nodejs</h1>");
    }else{
    res.write('<h1>you hane entered this url</h1>'+req.url)
    }
    res.end();

}); 
//127.0.0.1 
//localhost
server.listen(3000,()=>{
    console.log("The server is listening on port 3000");
});