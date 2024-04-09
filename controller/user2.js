const user2 = require('../model/user2')
module.exports.signup = async(req, res)=>{
    console.log("request for Signup");
    const {name, email, pass} = req.body;
    if(name!='' || email!='' || pass!='') {
        let newUser = new user2({
            name: name,
            email: email,
            pass: pass
        });

        await newUser.save();
        res.send('Message Sent');
    } else {
        res.send('failed');
    }
}

module.exports.login = async(req, res)=>{
    const check1 = await user2.collection.findOne({email:req.body.email});
    const check2 = await user2.collection.findOne({pass:req.body.pass});

    if(check1 && check2 && check1.email === req.body.email && check2.pass === req.body.pass) {
        res.send('Login Successfull');
        console.log("login done");
    } else {
        res.send('Invalid Email & Password');
        console.log("Login failed");
    }
}