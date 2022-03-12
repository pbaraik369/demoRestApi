const express = require('express');
require("../src/db/conn");
const router = require("../src/routes/router");
const menRanking = require("../src/model/menSchama");
const app = express();

const port = process.env.port || 3000;

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`successfully connected on port : ${port}`);
})