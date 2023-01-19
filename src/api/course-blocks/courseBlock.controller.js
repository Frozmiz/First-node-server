const CourseBlock = require("./courseBlock.model");

const indexGet = async (req, res, next) => {
    try {
        const allCourseBlocks = await CourseBlock.find().populate("teacher").populate("secondTeacher"); 
        //.populate > trae todos los campos del elemento de otra colección que queremos obtener.
        // Podemos poner tantos .populates como campos tengas.
        return res.status(200).json(allCourseBlocks);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const courseBlockToBeCreated = new CourseBlock(req.body);

        const created = await courseBlockToBeCreated.save();

        return res.status(200).json(created);
    } catch (error) {
        return next(error);
    }
};


const editPut = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fields = {...req.body};
        const options = {new: true};

        const edited = await CourseBlock.findByIdAndUpdate(id, fields, options);
        return res.status(200).json("Editado con éxito!");
    } catch (error) {
        res.status(error.status || 500).json(error.message);
    }
};

module.exports= {
    indexGet,
    createPost,
    editPut,
};