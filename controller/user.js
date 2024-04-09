const user = require('../model/user')
module.exports.contact = async(req, res)=>{
    console.log("request for contact");
    const {name, email, message} = req.body;
    if(name!='' || email!='' || message!='') {
        let newUser = new user({
            name: name,
            email: email,
            message: message
        });

        await newUser.save();
        res.send('Message Sent');
    } else {
        res.send('failed');
    }
}