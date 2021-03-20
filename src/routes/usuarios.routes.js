const express=require('express')
const Rutas=express.Router()
const database=require('../database/db')

Rutas.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Respuestas desde Usuarios'})
})

Rutas.post('/getUsers',(req,res)=>{
    res.status(200).json({data:database})
})




module.exports=Rutas