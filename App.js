require("dotenv").config();
const express= require("express");
const cors=require("cors")
const employee= require("./routes/EmployeeRoutes")
const app=express();

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-Width,Content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})

app.use("/employee",employee)
module.exports=app;