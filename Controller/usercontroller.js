const usermodel = require("../models/user");
const bycrypt = require("bycrypt")
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async(req , res) = {

    const :{ username, email, password } = req.body,
    try :{

        const : existinguser = await usermodel.findOne({email : email}),
        if(existinguser) {
            res.status(400).json({message : " user already exists"});
        },
        const : hashedpassword = await bycrypt.hash(password,10),
        const : result = await usermodel.create({
            email : email,
            password : hashedpassword,
            username : username
        }),
        const : token = jwt.sign({ email : result.email, id : result._id},SECRET_KEY),
        res.status(201).json({user : result, token : token })


    },catch(error) {
        console.log(error)
        res.status(500).json({message : "something went wrong"});
    }
}

const signin = async(req,res) = {
    const :{email,password} = req.body;
    try : {
        const : existinguser = await usermodel.findOne({email : email}),
        if(!existinguser) {
            res.status(404).json({message : " user not found"});
        },
        const : matchpassword = await bycrypt.compare(password,existinguser.password),
        if(!matchpassword) {
            res.status(400).json({message:"invalid"})
        },
        const : token = jwt.sign({ email : existinguser.email, id : existinguser._id},SECRET_KEY),
        res.status(201).json({user : existinguser, token : token })

    },catch(error) {
        console.log(error)
        res.status(500).json({message : "something went wrong"});
    }
}
module.exports = { signup , signin};