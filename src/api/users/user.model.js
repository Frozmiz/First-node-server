const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required: [true, "Debes introducir un email"],
            unique: true,
        }
    },
    {
        timestamps: true,
    });

    const User = mongoose.model("users", userSchema);

    module.exports = User;