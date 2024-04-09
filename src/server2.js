const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const App = express();
App.use(express.json());
const cors = require('cors');
App.use(cors('*'));
App.use(express.static(path.join(__dirname, 'public')));
App.use(express.urlencoded({extended:true}));
const userRouter = require('../router/user2');
console.log('userRouter :>> ', userRouter);
App.use(userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/sign')
.then(() => console.log('SignUp DataBase Connected Successfully'));

App.listen(3031, ()=> {
    console.log("Server is running on port 3031");
});