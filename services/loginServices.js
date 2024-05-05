const db = require('../db')

module.exports.loginVerification = async (obj) => {
    console.log(obj.username, obj.password)
    const [usernameValidation] = await db.query("SELECT UserName FROM `user` WHERE UserName = ?", [obj.username]);
    if (usernameValidation.length != 0) {
        const [user] = await db.query("SELECT * FROM `user` WHERE UserName = ? AND UserPassword = ?", [obj.username, obj.password]);
        return { usernameValidation, user };
    } else {
        return { usernameValidation, user: null }; // Return null if user not found
    }
}