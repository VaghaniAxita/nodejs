const fs = require('fs');
let opr = process.argv[2];
let filename = process.argv[3];
let data = process.argv[4];

const createFile = () => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err.message); 
        } else {
            console.log(filename, "created successfully"); 
        }
    });
};

if (opr === "create") { 
    createFile();
}