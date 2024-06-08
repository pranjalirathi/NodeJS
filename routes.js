const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

if ( url === '/'){
    res.write('<html>');
    res.write('<head><title>enter message</title></head>');
    res.write('<body><form action = "/message" method="POST"><input type = "text" name="message"><button type = "submit"> Send </button></form></body>');
    res.write('</html/>');
    return res.end();
}


// <----------REDIRECTING REQUESTS--------->
if ( url === '/message' && method === 'POST'){
    const body = [];

     //data event being handles for every chunk received
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', ()=> {

        
        //will add all the chunks inside the body to it and converting it to string
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt',message, err => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.write('An error occurred');
                return res.end();
            }
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });  //fired when done by parsing teh incoming requests or data
    
        
    
}
else{
res.setHeader('Content-Type', 'text/html');
//writing some data on the reponse
res.write('<html>');
res.write('<head><title>first page</title></head>');
res.write('<body><h1> hello there </h1></body>');
res.write('</html/>');
res.end();
} };

// <---METHOD 1 OF EXPORTING---->
module.exports = requestHandler;

//OR AS AN OBJECT
//module.exports = {
//     handler : requestHandler,
//     someText : 'some hard coded text'
// }
//will be accessed as http.createServer(routes.handler);

// <------METHOD 2 OF EXPORTING--->
// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

