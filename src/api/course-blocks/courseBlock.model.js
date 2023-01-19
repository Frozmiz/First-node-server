
const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const courseBlocksSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Debes especificar un nombre para el bloque"],
            unique: true,
        },

        description: {
            type: String,
        },

        // Aqui guardaremos un ID, que haga referencia a un elemento creado en otra colección, pero guaramos solo la ID.
        teacher: {
            type: mongoose.Types.ObjectId,
            ref: "teachers", // Colección a la que hace referencia.

        },

        secondTeacher:{
            type: mongoose.Types.ObjectId,
            ref: "teachers",
        },

        // Número de horas que durará el módulo.
        duration: {
            type: Number,
        },

        content: {
            type: String,
        },
    }, 
    {
        timestamps: true
    });

const CourseBlock = mongoose.model("course_blocks", courseBlocksSchema);

module.exports = CourseBlock;