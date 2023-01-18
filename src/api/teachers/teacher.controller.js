
// importo el modulo teacher.model
const Teacher = require("./teacher.model");

const indexGet = (req, res, next) => {
    return res.status(200).json("OK, teachers router working");
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
        const {id} = req.params;
        const fields = {...req.body};
        const options = {new: true};

        return Teacher.findByIdAndUpdate(id, fields, options);
    } 
    catch (error) {
        res.status(error.status || 500).json(error.message);
    }
}

module.exports = {
    indexGet,
    createPost,
    editPut,
}