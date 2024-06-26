// // <------READING A FILE AND APPENDING THE DATA TO IT------>



// const fs = require('fs');
// const path = require('path');
// // const rootDir = require('../utils/path');


// // const products = [];

// // module.exports = class Product{
// //     constructor(t){
// //         this.title = t;
// //     }

// //     save(){
// //         // products.push(this);
// //         //passing the data folder
// //         //passing the products.json in that data folder
// //         // const p =path.dirname(require.main.filename , 'data', 'products.json');
// //         const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

// //         fs.readFile(p, (err, fileContent) => {
// //             let products =[];
// //             if(!err){
// //                 products = JSON.parse(fileContent);
// //             }
// //             products.push(this);
// //             fs.writeFile(p, JSON.stringify(products), (err) => {
// //                 console.log(err);
// //             })
// //         });
// //     }

// //     static fetchAll(cb) {
// //         fs.readFile(p, (err, fileContent) => {
// //             if( err){
// //                cb([]);
// //             }
// //             cb(JSON.parse(fileContent));
// //         })
// //     }

// // }

// const p = path.join(
//     path.dirname(require.main.filename),
//     'data',
//     'products.json'
//   );
  
//   const getProductsFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   };
  
//   module.exports = class Product {
//     constructor(t) {
//       this.title = t;
//     }
  
//     save() {
//       getProductsFromFile(products => {
//         products.push(this);
//         fs.writeFile(p, JSON.stringify(products), err => {
//           console.log(err);
//         });
//       });
//     }
  
//     static fetchAll(cb) {
//       getProductsFromFile(cb);
//     }
//   };



// <----------------------------------------------------------------------------------------------------\
// const fs = require('fs');
// const path = require('path');

const Cart = require('./cart');
const db = require('../utils/database');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // getProductsFromFile(products => {
    //   if (this.id) {
    //     const existingProductIndex = products.findIndex(
    //       prod => prod.id === this.id
    //     );
    //     const updatedProducts = [...products];
    //     updatedProducts[existingProductIndex] = this;
    //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
    //       console.log(err);
    //     });
    //   } else {
    //     this.id = Math.random().toString();
    //     products.push(this);
    //     fs.writeFile(p, JSON.stringify(products), err => {
    //       console.log(err);
    //     });
    //   }
    // });

    //first question marks are added and then that
    //it is beacuse mysql will then safely escape our input values to basically parse it for a hidden SQL command and remove them and hence there will be a extra security layer
    return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES ( ?, ?, ?, ?)' ,
      [this.title, this.price, this.imageUrl, this.description]  
    );
  }

  static deleteById(id) {
    // getProductsFromFile(products => {
    //   const product = products.find(prod => prod.id === id);
    //   const updatedProducts = products.filter(prod => prod.id !== id);
    //   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
    //     if (!err) {
    //       Cart.deleteProduct(id, product.price);
    //     }
    //   });
    // });
  }

  static fetchAll() {
    // getProductsFromFile(cb);
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
  //   getProductsFromFile(products => {
  //     const product = products.find(p => p.id === id);
  //     cb(product);
  //   });
  // }

  return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);

  };

}
