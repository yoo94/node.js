//json
 const fs =require("fs");
const data = fs.readFileSync("./vocab.json", {encoding:"utf-8"});
// // console.log(typeof data); //타입알아보기
// console.log(JSON.parse(data)); //오브젝트로 변환
let arr = JSON.parse(data);
// console.log (arr[2]);
const ob = {
    name: "yoo",
    age: 28,
    description: "i go to school.",
};

fs.writeFileSync("test.json", JSON.stringify(ob, null, 2));