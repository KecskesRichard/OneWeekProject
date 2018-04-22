const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const passport = require('passport');
const User = require('../controller/user.controller');

userRouter.route('/')
    .get(userController.list);

userRouter.route('/:id')
    .get(userController.getUser);

userRouter.route('/register')
    .post(userController.register);

userRouter.post('/login', passport.authenticate('local'), User.login);

userRouter.post('/logout', User.logout);

userRouter.route('/delete/:id')
    .delete(userController.remove);

module.exports = userRouter;