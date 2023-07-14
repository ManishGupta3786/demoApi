const userModel = require('../models/userModel');

exports.login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            if(user.password === password){
                res.status(200).json(user);
            }else{
            res.status(401).json({msg:"Either email or password is inncorrect."});
            }
        }else{
            res.status(401).json({msg:"User does not exist."});
        }
    } catch (error) {
        console.log(error.message);
    }
}

exports.register = async (req, res) =>{
    try {
        const {fName, lName, email, password} = req.body;
        const doc = new userModel({fName,lName,email,password});
        let response = await doc.save();
        res.status(200).json({msg: "register success", data:response});
        
    } catch (error) {
        console.log(error.message);
    }
}
