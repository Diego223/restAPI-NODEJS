const express = require('express'); //Usamos Express para poder hacer las peticiones API
const app = express(); //Instancia de Express
const cors = require('cors'); //Usamos Cors para poder hacer las peticiones API

app.use(express.json()); //Usamos el middleware de express para poder usar JSON
app.use(cors()); //Usamos el middleware de cors para poder hacer las peticiones API desde nuestra compu asi hacemos whitelsit

const db = require("./models"); //Importamos la conexión a la base de datos


//Routers
const Tabla1Router = require ("./routes/Tabla1Pais"); //Importamos el router de la tabla 1
app.use("/Tabla1Pais", Tabla1Router)

const Tabla2Departamento = require ("./routes/Tabla2Departamento"); //Importamos el router de la tabla 1
app.use("/Tabla2Departamento", Tabla2Departamento)

const Tabla3Persona = require ("./routes/Tabla3Persona"); //Importamos el router de la tabla 1
app.use("/Tabla3Persona", Tabla3Persona)



db.sequelize.sync().then(() => { //Inicializacion de la API  Queremos recorrer todas las tablas en modules,   
                                    // verificar si existe la tabla  y si no existe la crea

    app.listen(3001, () =>{             
        console.log('Server running on port 3001');
    });

});




