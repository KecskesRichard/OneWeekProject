const User = require('../models/user.model');

module.exports = {
    getUser: (req, res) => {
        User.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },

    register: (req, res, next) => {

        User.create(req.body, (err, post) => {
            if (err) {
                res.send(err);
                console.log(err);
            }
            res.json(post);
        });
        console.log(req.body);
    },

    login: (req, res) => {
        User.find({
            email: req.body.email,
            password: req.body.password
        }, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post)
        });
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },

    remove: (req, res) => {
        User.findByIdAndRemove(req.params['_id'], (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },
};