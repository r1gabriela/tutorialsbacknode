//const { tutorials } = require('../model');

const Tutorial = require('../models').Tutorial;
//const Tutorial = db.tutorials;
//const Op = db.Sequelize.Op;

module.exports = {

        create(req, res) {
                return Tutorial.create(req.body)
                        .then(tutorial => res.status(201).send(tutorial))
                        .catch(err => res.status(400).send(err))


        },

        findAll(req, res) {

        },

        findOne(req, res) {

        },

        update(req, res) {

        },

        destroy(req, res) {

        },

        deleteAll(req, res) {

        },

        findAllPublished(req, res) {

        }

}
