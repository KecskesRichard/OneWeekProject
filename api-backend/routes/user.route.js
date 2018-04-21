const userRouter = require('express').Router();
const userController = require('../controller/user.controller');

userRouter.route('/:id')
    .get(userController.getUser);

userRouter.route('/register')
    .post(userController.register);

userRouter.route('/login')
    .post(userController.login);

userRouter.route('/logout')
    .get(userController.logout);

userRouter.route('/delete')
    .delete(userController.remove);

module.exports = userRouter;