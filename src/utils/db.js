const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://root:root@cluster0.vnnufhm.mongodb.net/students-api"


// Creamos una función asincrona para conectarnos con nuestra base de datos MongoDB
const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true); //Me obliga a ponerlo el servidor, si no lo pongo me da un aviso.
        const db = await mongoose.connect(DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[Server] Conectado con éxito a: ${name} en host ${host} en puerto ${port}`);
    }
    catch(error) {
        console.log("[Server ERROR]", error);
    }
};


// Exportamos la función connectDB para que se pueda utilizar desde un archivo externo.
module.exports = {
    connectDB
}