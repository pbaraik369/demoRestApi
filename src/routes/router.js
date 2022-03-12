const express = require('express');
const router = new express.Router();
const menRanking = require('../model/menSchama')
router.post('/mens',async(req,res)=>{

    try {
        const AddMensRanking = new menRanking(req.body);
        const initialRecord = await AddMensRanking.save();
        res.send(initialRecord);
        
    } catch (e) {
        console.log(e.message);
    }


})

//get method

router.get('/mens',async(req,res)=>{

    try {
        const initialRecord = await menRanking.find({});
        res.send(initialRecord);
        
    } catch (e) {
        res.status(400).send(e.message);
    }


})

// update

router.patch('/mens/:id',async(req,res)=>{

    try {
        const _id = req.params.id;
        const initialRecord = await menRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(initialRecord);
        
    } catch (e) {
        res.status(400).send(e.message);
    }


})


//delete

router.delete('/mens/:id',async(req,res)=>{

    try {
        const _id = req.params.id;
        const initialRecord = await menRanking.findByIdAndDelete(_id);
        res.send(initialRecord);
        
    } catch (e) {
        res.status(400).send(e.message);
    }


})


module.exports = router;