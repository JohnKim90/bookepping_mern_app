const User = require('../models/User');
const express = require ('express');
const usersRoute = express.Router();


// Register User Routes
usersRoute('/api/users/register',async(req,res) =>{
    try{
    const {name,email,password} = req.body;
    const user = await User.create({name,email,password});
    console.log(user);
    res.send(user);
    } catch (error){
        console.log(error);
        res.send
    }
 })

 //Login User Route
usersRoute.post('/api/users/login',(req, res) =>{
    res.send('login route');
});

//fetch Users
usersRoute.get('/api/users',(req,res) =>{
    res.send('fetch users');
});


//update user
app.put('update',(req,res)=>{
    res.send('Update Route');
});

//Delete User
app.delete(':id',(req,res)=>{
    res.send('Delete route');
});

module.exports = usersRoute;
