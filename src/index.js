//configuramos variables de entorno para desa desde el archivo .env
require('dotenv').config()

const app=require('./app')


//ponemos a escuchar al server

app.listen(process.env.PORT,()=>{
    console.log(`Server is running in PORT: ${process.env.PORT} `);
})