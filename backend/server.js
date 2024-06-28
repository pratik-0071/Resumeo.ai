const express = require('express');
const cors = require('cors');
const app = express();
const { createUserWithEmailAndPassword, getAuth } = require('firebase/auth');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyCP3W7kqBqutj-3O_csXXLYf4fKD57SJFE",
    authDomain: "resumeoai.firebaseapp.com",
    projectId: "resumeoai",
    storageBucket: "resumeoai.appspot.com",
    messagingSenderId: "831739415472",
    appId: "1:831739415472:web:7cb82c26749061ff232475",
    measurementId: "G-4RSW82VQ8Q"
};

const firebaseApp = initializeApp(firebaseConfig);


app.use(cors());
app.use(express.json())

const port = 4000;

app.post('/add-user',(req,res) => {
    const {email,password} = req.params;
    console.log(email,password);
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        return res.status(200).send(user);
        // ...
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
    });
})

app.listen(port,()=>{
    console.log("server is running at : " ,port);
})