const mongoose = require("mongoose")
const noteschema = mongoose.Schema({
    tittle:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},{timestamps:true});

module.exports = mongoose.model("Note", noteschema);