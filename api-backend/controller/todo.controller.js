const ToDo = require('../models/todo.model');

module.exports = {
    getAll: (req, res) => {
        ToDo.find({}, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    },

    find: (req, res) => {
        ToDo.findById(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    },

    create: (req, res) => {
        ToDo.create(req.body, (err, todo) => {
            if (err) {
                res.send(err)
            }
            res.json(todo)
        })
    },

    update: (req, res) => {
        req.body.updatedAt = new Date().toLocaleString();
        ToDo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    },

    remove: (req, res) => {
        ToDo.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    },
};