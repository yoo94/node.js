const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("what is your name ?", (answer)=>{
    console.log('hello' + answer)

    rl.close(); //모듈 닫기
})