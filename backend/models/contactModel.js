const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{type:String, required:[true,"Please Add the Contect Name"]
    },
    email:{type:String, required:[true,"Please Add the Contect  Email Address"]
    },
    phone:{type:String, required:[true,"Please Add the Contect Contact Phone Number"]
    },
},{ Timestamp : true});

module.exports = mongoose.model("Contact",contactSchema);