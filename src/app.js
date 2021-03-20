const express=require('express')
const path=require('path')
const nunjucks=require('nunjucks')
const app=express()


//configuro el server para recibir JSON
app.use(express.json())

//configuro el server para mostrar la carpet PUBLIC
app.use(express.static(path.resolve(__dirname,'./public')))

//configuracion de Nunjucks
app.set('view engine')
nunjucks.configure([path.resolve(__dirname,'./views')],{
    autoescape:false,
    express:app
})


//agregar las rutas
app.use('/',require('./routes/index.routes'))





module.exports=app