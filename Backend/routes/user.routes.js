import express from 'express'
import userController from '../controller/user.controller.js';
import validate from 'express-validator'
const router = express.Router();

router.post("/register",[
    validate.body('email').isEmail().withMessage('Invalid Email'),
    validate.body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    validate.body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
] ,userController)

export default router