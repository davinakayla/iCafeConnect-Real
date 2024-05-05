const express = require('express'),
    router = express.Router()

const service = require('../services/loginServices')

router.get('/', async (req,res) => {
    const {usernameValidation, user} = await service.loginVerification(req.body)
    console.log(usernameValidation, user)
    if (usernameValidation.length == 0) {
        res.status(404).json('Account is not Registered!')
    } else if (user.length == 0) {
        res.status(404).json('Username or Password is Wrong!')
    } else {
        res.send(user)
    }
})

module.exports = router;