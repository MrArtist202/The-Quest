const mongoose = require('mongoose');
const express = require('express');
const App = express();
App.use(express.json());
const cors = require('cors');
App.use(cors('*'));
const path = require('path');
App.use(express.static(path.join(__dirname, 'public')));
App.use(express.urlencoded({extended:true}));
const userRouter = require('../router/user');
console.log('userRouter :>> ', userRouter);
App.use(userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/lib')
.then(() => console.log('Connected!'));

App.listen(3030, ()=> {
    console.log("Server is running on port 3030");
});