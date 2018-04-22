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

    list: (req, res) => {
        User.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    register: (req, res, next) => {
        User.register(new User({
            username: req.body.username,
            email: req.body.email
        }), req.body.password, (err) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                success: 'Registration successful'
            })
        });
    },

    login: (req, res) => {
        res.json({
            succes: 'Logged in as' + ' ' + req.body.username
        })
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },

    remove: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },
};