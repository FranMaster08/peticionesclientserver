const express=require('express')
const Rutas=express.Router()

Rutas.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Respuestas desde Home'})
})

module.exports=Rutas