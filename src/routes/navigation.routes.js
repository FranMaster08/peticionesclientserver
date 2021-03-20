const express=require('express')
const Rutas=express.Router()

Rutas.get('/',(req,res)=>{
    res.render('index.html')
})
Rutas.get('/home',(req,res)=>{
    res.render('home.html')
})

Rutas.get('/contact',(req,res)=>{
    res.render('contact.html')
})

Rutas.get('/about',(req,res)=>{
    res.render('about.html')
})


module.exports=Rutas