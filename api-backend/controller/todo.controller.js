const ToDo = require('../models/todo.model');

module.exports = {
    getAll: (req, res) => {
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
        ToDo.create(req.body, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
        console.log(req.body);
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
        ToDo.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    },
};