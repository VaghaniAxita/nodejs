//Create
const fs = require('fs')
// fs.writeFile("test.js", "testing", (err) => {
//     if (err) {
//         console.log(err.massage);
//     }
//     else {
//         console.log("file written successfully");

//     }
// })


//Read File
fs.readFile("test.js", "utf-8", (err, data) => {
    if (err) {
        console.log(err.massage);

    } else {
        console.log(data);
    }
})


//Rename 
fs.rename("test.js","test.txt",(err)=>{
    if(err){
        console.log(err.message); 
    }
    else{
        console.log("successfully");

    }
})



//Update(append)
fs.appendFile("index.txt", "node", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("successfully");
    }
})



//Delete
fs.unlink("index.txt", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("successfully");
    }
})