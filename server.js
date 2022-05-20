const express = require ('express');
const mongoose=require('mongoose');
const app = express();
const dbConnect = require('./config/dbConnectjs');
const User = require('./models/User');

//Passing body data
app.use(express.json());
//DB connect
dbConnect();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//Routes
app.use('/api/users/', usersRoute);







const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server is up and running $ {PORT}`);
});






