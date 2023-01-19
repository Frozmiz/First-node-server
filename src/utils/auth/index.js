const passport = require("passport");

const registerStrategy = require("./registerStrategy");

const TurnOnAuth = () => {
    passport.use("registrito", registerStrategy);
};

module.exports = {
    TurnOnAuth,
};