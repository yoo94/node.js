const fs = require("fs")

let startTime = Date.now();
let text = "default";
setTimeout(()=>{
    console.log(Date.now() - startTime,"first");

},3000);
console.log(Date.now() - startTime,"second");