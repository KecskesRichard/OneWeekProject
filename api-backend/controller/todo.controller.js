const ToDo = require('../models/todo.model');
const User = require('../models/user.model')

module.exports = {
    list: (req, res) => {
        ToDo.find({}, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },

    find: (req, res) => {
        ToDo.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },

    create: (req, res) => {
        ToDo.create(req.body, (err, post1) => {
            if (err) {
                res.json(err)
            }
            User.findByIdAndUpdate(req.body.userid, {
                    $push: {
                        duties: post1['_id']
                    }
                },
                (err, data) => {
                    if (err) {
                        res.json(err)
                    }
                    res.json({
                        success: 'ToDo created'
                    })
                })
        })
    },

    update: (req, res) => {
        req.body.updatedAt = new Date().toLocaleString();
        ToDo.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },

    remove: (req, res) => {
        ToDo.findByIdAndRemove(req.params.id, (err, post1) => {
            if (err) {
                res.json(err)
            }
            User.findByIdAndUpdate(req.body.userid, {
                $pull: {
                    duties: post1['_id']
                }
            }, (err, data) => {
                if (err) {
                    res.json(err)
                }
                res.json({
                    success: 'ToDo deleted'
                })
            })
        })
    }
};