const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
const noteRouter = require("./routes/noteRoute")
const mongoose = require("mongoose")

app.use(express.json());

app.use("/users",userRouter);
app.use("/notes",noteRouter);

app.get("/",(req,res)=>{
    res.send("hello send");
})

mongoose.connect("mongodb+srv://raghul:mongo@1997@cluster0.nudx35w.mongodb.net/test")
.then(()=>{
    app.listen(3000, ()=>{
        console.log("server started on port no: 3000")
    })

})
.catch((error)=>{
    console.log(error)
})

