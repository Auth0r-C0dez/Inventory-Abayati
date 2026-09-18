const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res) => {
    res.send("test route working");
});

app.use("/hamza/customers",require("./routes/customerRoute"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("app is runnning");
});