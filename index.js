const express = require("express");

const app = express();

//now export the data from env file
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// now add a midleware for parsing the data
app.use(express.json());
  

// create router for todoroutes
const todoRoutes = require("./routes/todos");
//mount the todo api routes
app.use("/simpler/first", todoRoutes);

app.listen(PORT , ()=>{
    console.log( `the app is started succccsefully on the port ${PORT}`);
});

// connect to data base
const dbConnect = require("./config/database");
dbConnect();

//now call to the default router
app.get("/" , (req, res)=> {
    res.send(`<h1> this  is the HOMEPAGE baby</h1>`)
}) ;