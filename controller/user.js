const User = require("../model/user");
//const { v4: uuidv4 } = require('uuid');
//import { setUser, getUser } from '../service/auth';

async function handleUserSignUp(req, res) {
    const {name, email, password} = req.body
    await User.create ({
        name,
        email,
        password,
    });

    res.redirect("/");
}

async function handleUserLogIn(req, res) {
    const {email, password} = req.body
    const user = await User.findOne ({
        email,
        password,
    });
    console.log("User", user);
    if(!user) return res.render("login", {
        error : "Invelid UserName or Password"
    }) 

    //const sessionId = uuidv4();
    
    //setUser(sessionId, user);
    //res.cookie("uid", sessionId);

    res.redirect("/");
    //res.re("/");
}

module.exports = {
    handleUserSignUp,
    handleUserLogIn
}