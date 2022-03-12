const mongoose = require('mongoose');

const menSchama = new mongoose.Schema({
    ranking:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        default:"100m"
    }
})


const menRanking = new mongoose.model("MensRanking",menSchama);

module.exports = menRanking;