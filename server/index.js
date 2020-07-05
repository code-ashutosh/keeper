const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT =process.env.PORT||3000;
const admin = require('firebase-admin');
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors);

const firebaseConfig = {
    apiKey: "AIzaSyCi_i3UiAoind66wgla2B66aQTFqaFxZzY",
    authDomain: "fir-2ebb6.firebaseapp.com",
    databaseURL: "https://fir-2ebb6.firebaseio.com",
    projectId: "fir-2ebb6",
    storageBucket: "fir-2ebb6.appspot.com",
    messagingSenderId: "80399060983",
    appId: "1:80399060983:web:692fa1b2b96f1948d1e8f2",
    measurementId: "G-SQLH551LDQ"
  };
firebase.initializeApp(firebaseConfig); 

const serviceAccount = require("config/fbServiceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-2ebb6.firebaseio.com"
  });

  function checkAuth(req, res, next) {
    if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken)
        .then(() => {
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
    }
  }  
  const GoogleAuth = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuth);

app.listen(PORT, (err)=>{
    if(!err)
    console.log("Server is up and running at port "+PORT);
    else
    console.log(err);
});