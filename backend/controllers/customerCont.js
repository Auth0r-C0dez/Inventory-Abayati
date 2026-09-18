const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');


const genToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:'30d'});
}

const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
           return  res.status(400).json({message:'user exists'});
        }
        const salt = await bcrypt.genSalt(10);
        const hPwrd = await bcrypt.hash(password, salt);
        const user = await User.create({name,email, password:hPwrd});

        if(user) {
            // const otp= Math.floor(100000 + Math.random()* 900000).toString();
            // const message = `your login OTP is ${otp}`;
            // await sendEmail(email,`Ur otp registration`,message);
            res.status(201).json ({
                _id : user._id,
                name: user.name,
                email:user.email,
                token: genToken(user._id)
            });
        } else {
            res.status(400).json({message:'Invalid user data'});
        }

    }
    catch (error){
        res.status(500).json({message:'server err'});
        console.log(error);
        console.log("error is in registerUser");
    }
};

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name : user.name,
                email:user.name,
                token: genToken(user._id)
            });
        } else {
            res.status(400).json({message:'User does not exist'})
        }
    } catch(error) {
        res.status(500).json({message:'Server'});
        console.log(error);
        console.log("error loggin in");
    }
};

module.exports = {
    registerUser,
    loginUser,
};