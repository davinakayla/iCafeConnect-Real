const express = require('express'),
    app = express(),
    bodyparser = require('body-parser')
require('express-async-errors')

const logindb = require('./db'), 
    loginRoutes = require('./controllers/loginController')

//middleware
app.use(bodyparser.json())
app.use('/api/login', loginRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

// to make sure the db connection is successful
logindb.query("SELECT 1")
    .then(() => { 
        console.log("logindb connection succeeded.")
        app.listen(3000, 
            () => console.log('server started at 3000')
        )
    })
    .catch(err => console.log("logindb connection failed. \n" + err));