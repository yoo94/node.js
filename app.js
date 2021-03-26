const express = require("express");
const server = express(); //서버만들기
//GET  서버로 보낼 때 위에 표시
//POST  ID PWD같은거
//DELETE 탈퇴같은거
//PUT   update개념
server.get("/",(req,res)=>{
  res.sendFile   
})


server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("the server is listening on port 3000");
})
