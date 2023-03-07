const UserModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config')

const userControllers = {

    getUsers: async (req, res) => {

        let users;
        let error = null;

        try {

            users = await UserModel.find();


        } catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : users,
            success: error ? false : true,
            error: error,
        })
    },

    signinUser: async (req, res) => {

        let { email, password } = req.body; // recibe por body

        if (!email || !password) { // si no recibe nada, devuelve error

            res.json({
                success: false,
                message: `Por favor enviar email o contraseña`
            })
        }

        try {
            const user = await UserModel.findOne({ email: email }); // busco en mi modelo user un email que coincida con el email que se ingreso por body

            if (!user) { // no existe el usuario

                res.json({
                    success: false,
                    message: `usuario o contraseña incorrecta`
                })

            } else { // existe el usuario

                let comparePass = bcryptjs.compareSync(password, user.password); // desencriptado de contrase;a

                if (comparePass) {

                    const userData = {
                        id: user._id,
                        userName: user.userName,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        photoUrl: user.photoUrl,
                        favorites: user.favorites
                    }

                    await user.save();

                    const token = jwt.sign({ ...userData }, jwtSecret, { expiresIn: 60 * 60 * 24 }); // creo el token guardando la info del usuario en el

                    res.json({
                        success: true,
                        response: { token, userData },
                        message: `Bienvenido ${userData.firstName}!`
                    })
                }

                else {
                    res.json({
                        success: false,
                        message: `usuario o contraseña incorrecta`
                    })

                }

            }
        } catch (error) {
            res.json({
                success: false,
                message: error,
                console: console.log(error)
            })
        }

    },

    signupUser: async (req, res) => {

        let { userName, firstName, lastName, email, password, photoUrl } = req.body;

        try {

            const userExistEmail = await UserModel.findOne({ email }); // busco un usuario que coincida con el email del registro
            const userExistUserName = await UserModel.findOne({ userName }); // busco un usuario que coincida con el userName del registro


            if (!userExistEmail && !userExistUserName) { // no existe. entonces creo uno nuevo

                const hashWord = bcryptjs.hashSync(password, 10) //encripto la contraseña

                const newUser = await new UserModel({
                    userName,
                    firstName,
                    lastName,
                    email,
                    password: hashWord,
                    photoUrl,
                    role: 'user'
                })

                await newUser.save();

                res.json({
                    success: true,
                    message: `Te has registrado correctamente`,
                    user: newUser
                })

            } else { // ya existe

                res.json({
                    success: true,
                    message: `Hola ${firstName.toUpperCase()} ya te encuentras registrado con ese email o usuario`,
                })
            }


        } catch (error) {

            res.json({
                success: false,
                message: error,
                console: console.log(error)
            })

        }

    },

    removeUser: async (req, res) => {

        if (req.user.role !== 'admin') {
            return res.status(401).send('Unauthorized');
        }

        if (req.params.id === ':id') {
            return res.status(400).send('id invalido');
        }

        try {

            let user = await UserModel.findOneAndDelete({ _id: req.params.id });

            if (user) {

                res.json({
                    success: true,
                    message: `Usuario eliminado`,
                    user: user
                })

            } else {

                res.json({
                    success: false,
                    message: 'id invalido',
                })
            }

        } catch (error) {

            res.json({
                success: false,
                error: error,
                console: console.log(error)
            })
        }

    },

}

module.exports = userControllers;