const express=require('express')
const Rutas=express.Router()

//llamamos a las rutas que quiero 'Enrutar'
Rutas.use('/user',require('./usuarios.routes'))
Rutas.use('/nav',require('./navigation.routes'))
Rutas.use('/',require('./home.routes'))

module.exports=Rutas