module.exports = app => {
    var router = require('express').Router();
    const tutorialService = require('../service/tutorial.service')

    router.post('/add', tutorialService.create);



    app.use('/api/tutorials', router)
}

