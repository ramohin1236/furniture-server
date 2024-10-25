const express = require('express')
const app = express()
const cors =require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
const port = process.env.PORT || 8000;


// mongoose connect
mongoose
.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@blog-app.5bcxwwa.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`)
.then(
    console.log("mongodb database connected successfully")
)
.catch((error)=>console.log("error connecting to mongodb", error))



app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })