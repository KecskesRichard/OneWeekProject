const User = require('../models/user.model');

module.exports = {
    getUser: (req, res) => {
        res.json({
            user: req.user
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
                success: 'Sikeres regisztráció'
            })
        });
    },

    login: (req, res) => {
        res.json({
            success: 'Bejelentkezve, mint: ' + req.body.username
        })
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
}