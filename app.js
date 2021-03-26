const express = require("express");
const server = express(); //서버만들기
//GET  서버로 보낼 때 위에 표시
//POST  ID PWD같은거
//DELETE 탈퇴같은거
//PUT   update개념

server.use(express.static(__dirname+"/public"));
//서버가 돌아갈떄 여기를 먼저 들러서 순차적으로 내려감, 그래서 css같은 파일 먹이려면 위에서 public 들렷다가라고 해야함

server.get("/",(req,res)=>{
    console.log(req.user);
  res.sendFile(__dirname+"/index.html");
});

server.get("/about",(req,res)=>{
res.sendFile(__dirname+"/about.html");
});

server.use((req,res)=>{
    res.sendFile(__dirname + "/404.html");
});

server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("the server is listening on port 3000");
})
