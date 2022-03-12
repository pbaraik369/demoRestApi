const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/olympic").then(()=>{
    console.log("Db successfully connected");
}).catch((e)=>{
    console.log(e.message);
})



