// 3)   Try File Handling Write and Read data synchronous method 
//    and try asynchronous method 
const f = require('fs')
f.writeFile('sample.txt','Hello File',(err) => {
    console.log(err)
})
f.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error occured"+err)
    }
    else{
        console.log(data)
    }
})