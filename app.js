// // const http = require('http');
// //IMPORTING A FILE ROUTE.JS TO HERE 
// // const routes = require('./routes')
// // const fs = require('fs');    //allow to work with the file syystem



// // <-------------CREATING OUR OWN SERVER------------>
// //taking arfuments as incoming request and response object
// //first will contain data about the request
// //second one will help to send the response
// // function rqListener(req, res){

// // }

// // http.createServer(rqListener);

// //works whenever a request reaches our server
// //createserver method returns a server
// // const server = http.createServer(function(req, res){
// //     // console.log(req.url, req.method, req.headers);
// //     // console.log(req);


// //     //writing some data onto the response
// //     const url = req.url;
// //     const method = req.method;

// // if ( url === '/'){
// //     res.write('<html>');
// //     res.write('<head><title>enter message</title></head>');
// //     res.write('<body><form action = "/message" method="POST"><input type = "text" name="message"><button type = "submit"> Send </button></form></body>');
// //     res.write('</html/>');
// //     return res.end();
// // }

// // // <----------REDIRECTING REQUESTS--------->
// // if ( url === '/message' && method === 'POST'){
// //     const body = [];

// //      //data event being handles for every chunk received
// //     req.on('data', (chunk) => {
// //         console.log(chunk);
// //         body.push(chunk);
// //     });
// //     req.on('end', ()=> {

// //         //will add all the chunks inside the body to it and converting it to string
// //         const parsedBody = Buffer.concat(body).toString();
// //         const message = parsedBody.split('=')[1];
// //         fs.writeFile('message.txt',message, err => {
// //             if (err) {
// //                 console.error(err);
// //                 res.statusCode = 500;
// //                 res.write('An error occurred');
// //                 return res.end();
// //             }
// //             res.statusCode = 302;
// //             res.setHeader('Location', '/');
// //             return res.end();
// //         });
// //     });  //fired when done by parsing teh incoming requests or data
    
        
    
// // }
// // else{
// // res.setHeader('Content-Type', 'text/html');
// // //writing some data on the reponse
// // res.write('<html>');
// // res.write('<head><title>first page</title></head>');
// // res.write('<body><h1> hello there </h1></body>');
// // res.write('</html/>');
// // res.end();
// // } 
    
// // });

// // const server = http.createServer(app);
// // server.listen(4000);





// // <------LEARNING BASICS OF EXPRESS JS----->
// // const express = require('express');
// // const app = express();  //craering as an object

// // app.use((req, res, next) => {
// //     console.log("first0");
// //     next();   //the next argument helps to transfer the request from the current to the next middlewae
// // })

// // app.use((req, res, next) => {
// //     console.log("secondd");
// //     res.send("helo from express")
// // })

// // //instaed of server now, we can make the app.listen at port
// // app.listen(4000);







// // <------LEARNING HOW TO HANDLE MULTIPLE ROUTES----->
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();
// const path = require('path');

// app.set('view engine', 'pug');
// app.set('views', 'views');

// const adminData = require('./expRoutes/admin.js');
// const shopRoutes = require('./expRoutes/shop.js');

// app.use(bodyParser.urlencoded({extended: false}));

// //using the static files
// app.use(express.static(path.join(__dirname,'public' )));

// app.use('/admin', adminData.routes);   //by this routesonly statrting with admin will got the admin routes
// app.use( shopRoutes);

// // app.use((req, res, next) => {
// //     res.status(404).send('<h1>error 404, page not found</h1>');
// // })

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// })


// //handling the differnet urls
// // app.use('/add-product', (req, res, next) => {
// //     console.log("this is running");
// //     res.send('<form action="/product" method = "POST"><input type="text" name="title"><button type="submit">add product</button></form>');
// // })
// // app.use('/product', (req, res, next) => {
// //     console.log(req.body);
// //     res.redirect('/');
// // })

// // app.use('/', (req, res, next) => {
// //     res.send("hello from main page")
// // })

// app.listen(4000);

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// app.listen(3000);


const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);