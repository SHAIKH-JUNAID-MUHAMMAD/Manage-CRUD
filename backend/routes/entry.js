const Router = require("express").Router();
const Model = require("../models/entryM");


Router.post("/", async (req, res)=>{
    try {
        
        const entrypost = await Model.create(req.body);

        res.status(201).json({
            success:true,
            message: entrypost
        })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })

    }
})

Router.get("/", async (req, res)=>{
    try {
        
        const entryget= await Model.find();

        res.status(200).json({
            success:true,
            message:entryget
        })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })

    }
})

Router.delete("/:id", async (req, res)=>{
    try {
        
        const entrypost = await Model.findByIdAndDelete(req.params.id)

        if(!entrypost){
            res.status(404).json({
                success:false,
                message:"Not Found!"
            })
            return
        }

        res.status(200).json({
            success:true,
            message:"Student has been deleted!"
        })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })

    }
})

Router.put("/:id", async (req, res)=>{
    try {
        
        const entryget = await Model.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

        res.status(201).json({
            success:true,
            message:entryget
        })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })

    }
})

module.exports = Router