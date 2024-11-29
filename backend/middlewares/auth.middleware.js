const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    if(!token){
        res.status(401).json({message:'Unauthorized'})
    }

    try {
         
    } catch (error) {
        res.status(401).json({message:'Unauthorized'})
    }
}