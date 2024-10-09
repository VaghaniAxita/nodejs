const http = require ('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
            res.end('Server Error');   
    }
     else if (req.url === '/login') {
        res.end('Login Page');
    } 
    else if (req.url === '/signup') {
        res.end('Signup Page');
    } 
    else if (req.url === '/contact') {
        res.end('Contact Page');
    } 
    else if (req.url === '/service') {
        res.end('Service Page');
    } 
});

server.listen(8090, () => {
    console.log(`Server is running on port 8090`);
});


// const http = require ('http');

// const server = http.createServer((res,res)=>{

//     if(req.url=="/"){
//         res.end("home page")
//     }
//     else if(req.url=="/login"){
//         res.end("login")
//     }
// })

// server.listen(8090,()=>{
//     console.log("listening on port 8090");
    
// })