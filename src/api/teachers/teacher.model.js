const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Debes poner el nombre del profesor"],
        },

        speciality: {
            type: [String],
            enum: ["html", "css", "js", "node", "react", "angular", "php", "sql", "rrhh", "hhss"],
        },

        contactEmail: {
            type: String,
            require: true,
            unique: true, // Esto hace que no puedan haber dos profesores con el mismo email, dará error si se intenta. [E11000 duplicate key error collection]
        },

        schedule: {
            type: String, //UNIX format
        },

        startingDate: {
            type: Date,
        },
    }, 
    {
        timestamps: true,
});

const Teacher = mongoose.model("teachers", teacherSchema);

module.exports = Teacher;