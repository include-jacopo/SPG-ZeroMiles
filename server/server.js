'use strict';

const firebasefunctions = require('firebase-functions');
const firebase = require('firebase-admin');
const firebaseBackup = require('firebase-admin'); 
const { firebaseconf } = require('./firebase-server/config.js');
const { firebaseconf_backup } = require('./firebase-server/config.js');
const userDao = require('./userDAO');
const { body, param, validationResult, sanitizeBody, sanitizeParam } = require('express-validator');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // logging middleware
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { toJSON } = require("express-session/session/cookie"); // module for accessing the exams in the DB
const dayjs = require("dayjs");
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)
const { v4: uuidv4 } = require('uuid');
//const { convertMultiFactorInfoToServerFormat } = require('firebase-admin/lib/auth/user-import-builder');

//jwt parameters
const jwtSecret = '6xvL4xkAAbG49hcXf5GIYSvkDICiUAR6EdR5dLdwW7hMzUjjMUe9t6M5kSAYxsvX';
const expireTime = 1200; //seconds

// init express
const app = express();
const port = 3001;
//app.use(cors({origin: true}));

// set-up the middlewares
app.use(morgan('dev'));
app.use(express.json());


// *********************
// ***** FIREBASE  *****
// *********************


/* init firebase app */

const firebaseapp = firebase.initializeApp({
    credential: firebase.credential.cert(firebaseconf),
    databaseURL: "https://polito-se2-21-01-spg.europe-west1.firebasedatabase.app",
    storageBucket: "gs://polito-se2-21-01-spg.appspot.com"
});

const firebaseappBackup = firebaseBackup.initializeApp({
    credential: firebaseBackup.credential.cert(firebaseconf_backup),
    databaseURL: "https://polito-se2-21-01-spg-backup.europe-west1.firebasedatabase.app",
    storageBucket: "gs://polito-se2-21-01-spg-backup.appspot.com"
},"firebase_backup");

/* get reference a reference to the firestore database */
var db = firebase.firestore();
var db_backup = firebaseBackup.firestore(firebaseappBackup);

/*
const bucket = firebase.storage().bucket();

//scarica dallo storage di firebase un file. ".file(<firebase_storage_path>)" localizza il file e ".download(<options_json>)" lo scarica
bucket.file('395100.png').download({
    destination: "./newfile.png"  //supporta path relativi; SPECIFICARE IL NOME DEL FILE SCARICATO COME ULTIMA STRINGA DEL PATH
},function(err){
    console.log(err);
})


//carica sullo storage di firebase un file. Prende come parametro il path del file locale e un json di opzioni, tra cui la destinazione
bucket.upload('./newfile.png',{
    destination: "bar.png"  //destinazione nello storage di firebase; si possono specificare anche delle directory (es. foo/store/bar.png) che, se non esistenti, verranno create
}).then(()=>{
    console.log("file uploaded successfully");
}).catch(err => {
    console.error("ERROR: ", err);
})

//ritorna un JSON con tutti i file presenti nello storage di firebase -> ne stampo i nomi
bucket.getFiles(function(err,files){
    if(!err){
        files.forEach(file =>{
            console.log(file.name)
        })
    }
})
*/

/* firebase debug */

// const firebaseApp = firebase.apps[0];
// console.log(JSON.stringify(firebaseApp.options, null, 2));


// *********************
// ***** API *****
// *********************

/* Authentication endpoint */

app.post('/api/login', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    console.log(req.body);
    console.log(username + " " + password);

    try {
        const user = await db.collection("User").where("Email", "==", username).get();

        if (user.empty) {
            res.status(404).json({ info: "Authentication error", error: "User not found (Table: User)" });
        } else {
            user.forEach(user => {  //because user is a query snapshot
                if (!userDao.checkPassword(user.data(), password)) {
                    res.status(401).json({ info: "Authentication error", error: "wrong password" });
                } else {
                    //AUTHENTICATION SUCCESS
                    console.log("Authentication succeeded!" + user.id);
                    const token = jsonwebtoken.sign({ user: { userID: user.id, ...user.data() } }, jwtSecret, { expiresIn: expireTime });
                    res.cookie('token', token, { httpOnly: true, sameSite: true, maxAge: 1000 * expireTime });
                    res.status(200).end();
                }
            })
        }
    } catch (error) {
        new Promise((resolve) => { setTimeout(resolve, 1000) }).then(() => res.status(500).json({
            info: "Authentication error",
            error: error
        }))
    }
});

app.use(cookieParser());


app.post('/api/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: true, sameSite: true });
    res.redirect(200, "/");
});


/* POST user registration (add user to database) */
app.post('/api/register',
    body('name')
        // Check if the name parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the name parameter is not empty
        .notEmpty()
        .bail()
        // Check if the name parameter is a string
        .isString()
        // Check if the name parameter contains only letters
        .custom((value, req) => {
            let regex = new RegExp(/^[a-zA-Z]+$/);
            return regex.test(value);
        }),
    body('surname')
        // Check if the lastName parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the lastName parameter is not empty
        .notEmpty()
        .bail()
        // Check if the lastName parameter is a string
        .isString()
        // Check if the lastName parameter contains only letters
        .custom((value, req) => {
            let regex = new RegExp(/^[a-zA-Z\']+$/);
            return regex.test(value);
        }),
    body('email')
        // Check if the email parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the email parameter is not empty
        .notEmpty()
        .bail()
        // Check if the email parameter is a string
        .isString()
        // Check if the email parameter is a valid email
        .custom((value, req) => {
            let regex = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
            return regex.test(value);
        }),
    body('address')
        // Check if the address parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the address parameter is not empty
        .notEmpty()
        .bail()
        // Check if the address parameter is a string
        .isString()
        // Check if the address parameter is a valid address
        .custom((value, req) => {
            let regex = new RegExp(/^(via|Via|corso|Corso|piazza|Piazza)\s[a-zA-Z\s\']+(\s+|\,\s*)([1-9][0-9]*)$/);
            return regex.test(value);
        }),
    body('phone')
        // Check if the phone parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the phone parameter is not empty
        .notEmpty()
        .bail()
        // Check if the phone parameter is a string
        .isString()
        // Check if the phone parameter is a valid phone number
        .custom((value, req) => {
            let regex = new RegExp(/^(\+(\([0-9]{1,2}\))?)?[0-9]+$/);
            return regex.test(value);
        }),
    body('city')
        // Check if the city parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the city parameter is not empty
        .notEmpty()
        .bail()
        // Check if the city parameter is a string
        .isString()
        // Check if the city parameter is a valid city
        .custom((value, req) => {
            let regex = new RegExp(/^[a-zA-Z]+$/);
            return regex.test(value);
        }),
    body('password')
        // Check if the password parameter is not null
        .exists({ checkNull: true })
        .bail()
        // Check if the password parameter is not empty
        .notEmpty()
        .bail()
        // Check if the password parameter is a string
        .isString(),
    (req, res) => {
        const result = validationResult(req);

        // Validation error
        if (!result.isEmpty()) {
            let jsonArray = [];
            for (let item of result.array())
                jsonArray.push({
                    param: item.param,
                    error: item.msg,
                    valueReceived: item.value
                })
            res.status(400).json({
                info: "The server cannot process the request",
                errors: jsonArray
            });
        }
        // No error in validation
        else {
            const newUUid = uuidv4()
            let newUser = {}
            newUser.Name = req.body.name;
            newUser.Surname = req.body.surname;
            newUser.Email = req.body.email;
            newUser.Address = req.body.address;
            newUser.Phoneno = req.body.phone;
            newUser.City = req.body.city;
            newUser.Password = req.body.password;  //userDao.hashOfPassword(req.body.password)
            newUser.Zipcode = req.body.zipcode;
            newUser.State = req.body.stateCaps;
            newUser.Role = "Client";
            newUser.Wallet = 0;

            (async () => {
                try {
                    const user = await db.collection("User").where("Email", "==", req.body.email).get();
                    if (user.empty) {
                        await db.collection('User').doc(newUUid).create(newUser);
                        console.log("Done.");
                        res.status(201).end();
                    }
                    else res.status(409).json({
                        info: "New user registration",
                        error: "Email already used"
                    });
                } catch (error) {
                    console.log("ERROR: ", error);
                    res.status(500).json({
                        info: "The server cannot process the request",
                        error: error
                    });
                }
            })()
        }
    });



/* GET all products (supposed to be unauthenticated -> everyone, also non-authenticated users, can see the products)*/

// (async () => {
//     try {
//         const products = await db.collection('Product').get();  //products is a query snapshot (= container that can be empty (no matching document) or full with some kind of data (not a JSON))
//         if (products.empty) {
//             console.log("No matching documents.");
//         } else {
//             products.forEach(prod => {
//                 //do something, e.g. accumulate them into a single JSON to be given back to the frontend
//                 console.log(prod.data());  //prod.data() returns a Json -> fields can be accessed with "." (e.g. prod.data().Name returns the 'Name' field in Firebase)
//             })
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })();

/*
 * ********************************************
 * ******** AUTHENTICATED APIs: ***************
 * ********************************************
 * 
 * ALL APIs AFTER app.use(jwt(...)) WILL GIVE 
 * BACK 401 (UnauthorizedError: No authorization 
 * token was found) IF THE REQUEST DOES NOT 
 * TRANSPORT ANY TOKEN
 * 
 * 
 */

app.use(jwt({
    algorithms: ['HS256'],  //prevents downgrade attacks -> HS256 used for the session
    secret: jwtSecret,
    getToken: req => req.cookies.token
})
);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        console.log("Invalid token");
        res.redirect(401, "/api/login");
    }
});

/* GET all products by farmers */
app.get('/api/productByFarmer', async (req, res) => {
    try {
        const productbyfarmer = await db.collection('Product by Farmers').get();  //products is a query snapshot (= container that can be empty (no matching document) or full with some kind of data (not a JSON))
        if (productbyfarmer.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: product by farmers)" });
        } else {
            let result = [];
            productbyfarmer.forEach((prodfarm) => {
                //for each product by farmer, i need to retrieve complete informations about the product (from ProductID) and the farmer (from FarmerID)
                const productid = prodfarm.data().ProductID;  //since prodfarm.dat() is a JSON, i can access its fields with "."
                const farmerid = prodfarm.data().FarmerID;
                console.log("Querying for " + productid + " and " + farmerid);

                result.push(new Promise(async (resolve, reject) => {
                    const product = await db.collection('Product').doc("" + productid).get();
                    const farmer = await db.collection('Farmer').doc("" + farmerid).get();
                    if (!product.exists) {  //for queries check query.empty, for documents (like this case, in which you are sure that at most 1 document is returned) check document.exists
                        console.log("No matching products for " + productid);
                    }
                    if (!farmer.exists) {
                        console.log("No matching farmers for" + farmerid);
                    } else {
                        //do something, e.g. create a JSON like productbyfarmer but with "Product" and "Farmer" entries instead of "ProductID" and "FarmerID"
                        resolve({
                            // Farmer
                            FarmerID: prodfarm.data().FarmerID,
                            Name: farmer.data().Name,
                            Surname: farmer.data().Surname,
                            Company: farmer.data().Company,
                            Email: farmer.data().Email,
                            Phoneno: farmer.data().Phoneno,
                            Address: farmer.data().Address,
                            State: farmer.data().State,
                            Zipcode: farmer.data().Zipcode,
                            //Distance: farmer.data().Distance
                            // Product
                            ProductID: prodfarm.data().ProductID,
                            NameProduct: product.data().Name,
                            Description: product.data().Description,
                            ImageID: product.data().ImageID,
                            // Product by farmer
                            Quantity: prodfarm.data().Quantity,
                            UnitOfMeasurement: prodfarm.data().Unitofmeasurement,
                            Price: prodfarm.data().Price
                        });

                        //  console.log(farmer.data().Name + " offers " +
                        //             prodfarm.data().Quantity + " " + prodfarm.data().Unitofmeasurement + " of " +
                        //           product.data().Name);
                    }
                }));
            });
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).json({
                    info: "Promises error (get productbyfarmer)",
                    error: error
                }));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
});

/* GET all users */
app.get('/api/users', async (req, res) => {
    try {
        const users = await db.collection('User').get();  //products is a query snapshot (= container that can be empty (no matching document) or full with some kind of data (not a JSON))
        if (users.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: Users)" });
        } else {
            let result = [];
            users.forEach(user => {
                //do something, e.g. accumulate them into a single JSON to be given back to the frontend
                //console.log(users.data());
                result.push(new Promise(async (resolve, reject) => {
                    resolve({
                        Name: user.data().Name,
                        Surname: user.data().Surname,
                        UserID: user.id,
                        Email: user.data().Email,
                        Phoneno: user.data().Phoneno,
                        Address: user.data().Address,
                        City: user.data().City,
                        State: user.data().State,
                        Zipcode: user.data().Zipcode,
                        Role: user.data().Role,
                        Wallet: user.data().Wallet,
                    });
                }));
            })
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).end());
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
});


/* GET a user*/

app.get('/api/userinfo', async (req, res) => {
    const user = req.user && req.user.user;
    try {
        const users = await db.collection('User').where("Email", "==", "" + user.Email).get();  //products is a query snapshot (= container that can be empty (no matching document) or full with some kind of data (not a JSON))
        if (users.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: Users)" });
        } else {
            let result = [];
            users.forEach(user => {
                //do something, e.g. accumulate them into a single JSON to be given back to the frontend
                //console.log(users.data());
                result.push(new Promise(async (resolve, reject) => {
                    resolve({
                        Name: user.data().Name,
                        Surname: user.data().Surname,
                        UserID: user.id,
                        Email: user.data().Email,
                        Phoneno: user.data().Phoneno,
                        Address: user.data().Address,
                        City: user.data().City,
                        State: user.data().State,
                        Zipcode: user.data().Zipcode,
                        Role: user.data().Role,
                        Wallet: user.data().Wallet,
                    });
                }));
            })
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).end());
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
});

/* GET all farmers */
app.get('/api/farmers', async (req, res) => {
    try {
        const farmers = await db.collection('Farmer').orderBy("Distance").get();  //products is a query snapshot (= container that can be empty (no matching document) or full with some kind of data (not a JSON))
        if (farmers.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: Farmer)" });
        } else {
            let result = [];
            farmers.forEach(farmer => {
                //do something, e.g. accumulate them into a single JSON to be given back to the frontend
                //console.log(farmer.data());
                result.push(new Promise(async (resolve, reject) => {
                    resolve({
                        Name: farmer.data().Name,
                        Surname: farmer.data().Surname,
                        Company: farmer.data().Company,
                        FarmerID: farmer.id,
                        Email: farmer.data().Email,
                        Phoneno: farmer.data().Phoneno,
                        Address: farmer.data().Address,
                        State: farmer.data().State,
                        Zipcode: farmer.data().Zipcode,
                        Distance: farmer.data().Distance,
                    });
                }));
            })
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).json({
                    info: "Promises error (get all farmers)",
                    error: error
                }));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
});



/* GET all orders from a client*/

app.get('/api/clientorders', async (req, res) => {
    const user = req.user && req.user.user;
    try {
        const orders = await db.collection('Order').where("ClientID", "==", "" + user.userID).orderBy("Timestamp").get();
        if (orders.empty) {
            console.log("No matching documents.");
            res.status(200).json([]);
        } else {
            let result = [];
            orders.forEach(order => {
                //do something, e.g. accumulate them into a single JSON to be given back to the frontend
                //console.log(farmer.data());

                result.push(new Promise(async (resolve, reject) => {
                    const client = await db.collection('User').doc("" + order.data().ClientID).get();
                    if (!client.exists) {  //for queries check query.empty, for documents (like this case, in which you are sure that at most 1 document is returned) check document.exists
                        console.log("No matching users for " + order.data().ClientID);
                    }
                    resolve({
                        OrderID: order.id,  //maybe it's "order.id"
                        Status: order.data().Status,
                        ClientID: client.id,
                        Client: client.data(),
                        Timestamp: order.data().Timestamp,
                        ListOfProducts: order.data().Products
                    });
                }));
            })
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).json({
                    info: "Promises error (get all client orders)",
                    error: error
                }));
            //console.log(orders);
            //orders.forEach(order => {console.log(order.data())})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
})

/* GET all Order */
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await db.collection('Order').orderBy('Timestamp').get();
        if (orders.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: Order)" });
        } else {

            let result = [];
            orders.forEach(order => {
                //do something, e.g. accumulate them into a single JSON to be given back to the frontend
                //console.log(farmer.data());

                result.push(new Promise(async (resolve, reject) => {
                    const client = await db.collection('User').doc("" + order.data().ClientID).get();
                    if (!client.exists) {  //for queries check query.empty, for documents (like this case, in which you are sure that at most 1 document is returned) check document.exists
                        console.log("No matching users for " + order.data().ClientID);
                    }

                    resolve({
                        OrderID: order.id,  //maybe it's "order.id"
                        Status: order.data().Status,
                        ClientID: client.id,
                        Client: client.data(),
                        Timestamp: order.data().Timestamp,
                        ListOfProducts: order.data().Products
                    });
                }));
            })
            const response = Promise.all(result)
                .then(r => res.json(r))
                .catch(r => res.status(500).json({
                    info: "Promises error (get all orders)",
                    error: error
                }));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
});



/* POST place an order in the database */
app.post('/api/order', async (req, res) => {
    try {
        let result = [];



        let productByFarmer = await db.collection('Product by Farmers').get()
        //where("ProductID", "==", ""+req.body.ProductID).where("FarmerID", "=", ""+req.body.FarmerID).get();

        if (productByFarmer.empty) {
            console.log("No entries (Table: product by farmers)");
            res.status(404).json({ error: "No entries (Table: product by farmers)" });
        }

        //for each product in the order
        let quantity = 0;
        req.body.items.forEach(product => {
            quantity = quantity + product.number * product.Price;
            productByFarmer.forEach(prodfarm => {
                if (product.ProductID == prodfarm.data().ProductID && product.number > prodfarm.data().Quantity) { //check if there are enough unities for the product requested
                    console.log("Not enough products (" + product.NameProduct + ")");
                    res.status(404).json({ error: "Not enough products (" + product.NameProduct + ")" });



                }
            })

        })


        console.log("creating new order");
        console.log(quantity);
        let newOrder = {}
        newOrder.Price = quantity;
        newOrder.Timestamp = dayjs().format("DD-MM-YYYY hh:mm:ss",);
        newOrder.Status = "open";
        newOrder.ClientID = req.body.UserID;
        newOrder.Products = req.body.items;

        (async () => {
            try {
                console.log(newOrder);
                await db.collection("Order").add(newOrder);
            } catch (error) {
                console.log(error);
                res.json(error);
            }
        })()

        req.body.items.forEach(product => {
            productByFarmer.forEach(prodfarm => {
                if (product.ProductID == prodfarm.data().ProductID) {
                    let newQuantity = prodfarm.data().Quantity - product.number;
                    result.push(new Promise(async (resolve, reject) => {

                        await db.collection('Product by Farmers').doc(prodfarm.id).update({ Quantity: newQuantity });
                        resolve("QUANTITYUPDATE");
                    }))
                }
            })
        })
        Promise.all(result);
        res.status(201).end();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
})



//MODIFY ORDER
app.post('/api/modifyorder', async (req, res) => {
    let result = [];
    let risultato = [];
    let order;
    let user;
    let new_Quantity = 0;
    let id;

    try {
        if (req.body.Status == "pending") {
            order = await db.collection('Order').doc(req.body.id).get();

            console.log(order);

            risultato.push(new Promise(async (resolve, reject) => {
                id = order.data().ClientID;
                console.log(id);
                user = await db.collection('User').doc(id).get();
                console.log(user);
                new_Quantity = user.data().Wallet - order.data().Price;
                console.log(new_Quantity);
                if (new_Quantity < 0) {
                    res.status(500).json({

                        error: "The client haven't enough money"
                    });
                } else {

                    db.collection('Order').doc(req.body.id).update({ Status: req.body.Status });
                    db.collection('User').doc("" + order.data().ClientID).update({ Wallet: new_Quantity });
                    resolve("QUANTITYUPDATE");

                    res.status(201).end();
                }
            }))
            Promise.all(risultato);



        } else {
            (async () => {
                await db.collection('Order').doc(req.body.id).update({ Status: req.body.Status });
                res.status(201).end();
            })()

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }

});

app.post('/api/modifywallet', async (req, res) => {

    try {
        const users = await db.collection('User').get();
        if (users.empty) {
            console.log("No matching documents.");
            res.status(404).json({ error: "No entries (Table: Users)" });
        } else {

            (async () => {
                await db.collection('User').doc(req.body.ClientID).update({ Wallet: req.body.Wallet });
            })()
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }
    res.status(201).end();

});

app.post('/api/checkClient', async (req, res) => {

    let soldi_spesi = 0;
    let ritorno = {};
    console.log(req.body.ClientID);
    let client;
   
    try {
        (async () => {
            client = await db.collection('User').doc(req.body.ClientID).get();
            


        })()

        let order = await db.collection('Order').get()
        //where("ProductID", "==", ""+req.body.ProductID).where("FarmerID", "=", ""+req.body.FarmerID).get();

        if (order.empty) {
            console.log("No entries (Table: order)");
            res.status(404).json({ error: "No entries (Table: order)" });
        }
         
        //for each product in the orde
            order.forEach(order => {
                if (order.data().ClientID == req.body.ClientID && order.data().Status == "open") { //check if there are enough unities for the product requested
                    soldi_spesi=soldi_spesi + order.data().Price
                }})
       
                   
       
        ritorno.Wallet= client.data().Wallet;
        ritorno.Money= soldi_spesi;
        res.status(201).json(ritorno);
        

        
              }catch (error) {
        console.log(error);
        res.status(500).json({
            info: "The server cannot process the request",
            error: error
        });
    }

  
});



app.get('/api/sessions/current', (req, res) => {
    const user = req.user && req.user.user;
    console.log(req.user.user.Email);
    if (user) {
        res.status(200).json(req.user);
    }
    else res.status(401).json({ error: 'User non authenticated' });
});


// Activate the server
app.listen(port, () => {
    console.log(`react-score-server listening at http://localhost:${port}`);
});

module.exports = app;



