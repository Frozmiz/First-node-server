const User = require("../../api/users/user.model");
const bcrypt = require("bcrypt");
const { isValidEmail, isValidPassword } = require("./validations");
// 
const LocalStategy = require("passport-local").Strategy;


// Para poder logear un usuario primero necesito tenerlo registrado
// const registerStrategy = new LocalStategy({}, async() => {formato función});

const registerStrategy = new LocalStategy(
    {
        usernameField: "email", // El nombre del modelo de nuestro campo para identificar usuarios.
        passwordField: "password", 
        passReqToCallback: true, // En el controlador, passport.use("registro")(req) <-- este req.
    }, 
    async (req, email, password, done) => {
        try {
            const userDB = await User.findOne({ email: email.toLowerCase() });

            if(userDB) {
                const error = new Error("El usuario ya existe");
                return done(error, null);
            }

            if(!isValidEmail(email)) {
                const error = new Error("El email no es válido");
                return done(error, null);
            }

            if(!isValidPassword(password)) {
                const error = new Error("El contraseña no es válida");
                return done(error, null);
            }

            // ENCRIPTACIÓN DE CONTRASEÑA 

            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(password, saltRounds);

            const userToBeCreated = new User({

                ...req.body,
                email,
                password: encryptedPassword,

            });
        
        const created = await userToBeCreated.save();

        return done(null, created);

        } catch (error) {
            return done(error);
        }
    }
);

module.exports = registerStrategy;