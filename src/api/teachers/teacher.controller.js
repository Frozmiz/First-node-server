
// importo el modulo teacher.model
const Teacher = require("./teacher.model");

const indexGet = async(req, res, next) => {
    const teachers = await Teacher.find();
    // Devolvemos los profesores de la base de datos.
    return res.status(200).json(teachers);
};

const getById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Teacher.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return res.status(error.status || 500).json(error.message);
    }
};


const createPost = async (req, res, next) => {
    try {
        const teacherToBeCreated = new Teacher(req.body);

        // console.log(teacherToBeCreated);

        const created = await teacherToBeCreated.save();
        console.log("created", created);

        return res.status(201).json(created);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};


const editPut = async(req, res, next) => {
    try {
        const {id} = req.params; // req.params.id
        const fields = {...req.body};
        const options = {new: true}; // Mongoose primero actualiza y luego te envia la respuesta actualizada. (ponerlo siempre que vayamos a editar).
        
        const edited = await Teacher.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } 
    catch (error) {
        res.status(error.status || 500).json(error.message);
    }
};


const deleTeacher = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Teacher.deleteOne({ _id: id});
        if (deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con éxito");   
        } else {
            return res.status(200).json("No se encuentra el elemento a eliminar");   
        }          
    } catch (error) {
        res.status(error.status || 500).json(error.message);
    }
};


module.exports = {
    indexGet,
    getById,
    createPost,
    editPut,
    deleTeacher,
};