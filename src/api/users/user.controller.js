const passport = require("passport");


const registerPost = (req, res, next) => {
    try {
        // AUTENTICACIÓN
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(200).json(user);
        };

        passport.authenticate("registrito", done)(req);

    } catch (error) {
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        res.status(200).json("Login funcionando!");
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    registerPost,
    loginPost,
}