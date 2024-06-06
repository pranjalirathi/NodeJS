const http = require('http');

//IMPORTING A FILE ROUTE.JS TO HERE 
const routes = require('./routes')
// const fs = require('fs');    //allow to work with the file syystem



// <-------------CREATING OUR OWN SERVER------------>
//taking arfuments as incoming request and response object
//first will contain data about the request
//second one will help to send the response
// function rqListener(req, res){

// }

// http.createServer(rqListener);

//works whenever a request reaches our server
//createserver method returns a server
// const server = http.createServer(function(req, res){
//     // console.log(req.url, req.method, req.headers);
//     // console.log(req);


//     //writing some data onto the response
//     const url = req.url;
//     const method = req.method;

// if ( url === '/'){
//     res.write('<html>');
//     res.write('<head><title>enter message</title></head>');
//     res.write('<body><form action = "/message" method="POST"><input type = "text" name="message"><button type = "submit"> Send </button></form></body>');
//     res.write('</html/>');
//     return res.end();
// }

// // <----------REDIRECTING REQUESTS--------->
// if ( url === '/message' && method === 'POST'){
//     const body = [];

//      //data event being handles for every chunk received
//     req.on('data', (chunk) => {
//         console.log(chunk);
//         body.push(chunk);
//     });
//     req.on('end', ()=> {

//         //will add all the chunks inside the body to it and converting it to string
//         const parsedBody = Buffer.concat(body).toString();
//         const message = parsedBody.split('=')[1];
//         fs.writeFile('message.txt',message, err => {
//             if (err) {
//                 console.error(err);
//                 res.statusCode = 500;
//                 res.write('An error occurred');
//                 return res.end();
//             }
//             res.statusCode = 302;
//             res.setHeader('Location', '/');
//             return res.end();
//         });
//     });  //fired when done by parsing teh incoming requests or data
    
        
    
// }
// else{
// res.setHeader('Content-Type', 'text/html');
// //writing some data on the reponse
// res.write('<html>');
// res.write('<head><title>first page</title></head>');
// res.write('<body><h1> hello there </h1></body>');
// res.write('</html/>');
// res.end();
// } 
    
// });

const server = http.createServer(routes);

server.listen(3000);

