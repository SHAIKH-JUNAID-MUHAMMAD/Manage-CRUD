const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Entry = require("./routes/entry");

app.use(cors());
app.use(express.json());
app.use("/api/entry", Entry);



mongoose.connect("mongodb://127.0.0.1:27017/Students-Entry").then(()=>{
    console.log("Database is connected!");
}).catch((error)=>{
    console.log(error.message);
})




const port = 5000;
app.listen(port, ()=>{
    console.log("Server is running...")
})