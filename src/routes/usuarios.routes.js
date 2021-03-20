const express=require('express')
const Rutas=express.Router()

Rutas.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Respuestas desde Usuarios'})
})

module.exports=Rutas