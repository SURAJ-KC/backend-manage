const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDB = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port =process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler)
app.use("/api/contacts", require("./routes/contactRoute.js"));

app.listen(port, ()=>{
    console.log(`server running on  the port ${port}`);
})