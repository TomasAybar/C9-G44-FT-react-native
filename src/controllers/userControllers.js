const UserModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');

const userControllers = {

    getUsers: async (req, res) => {

        console.log('Controlador GetUsers');

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
        res.send('signin')
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
                    photoUrl
                })

                await newUser.save();

                return res.status(201).json({
                    success: true,
                    message: `Te has registrado correctamente`,
                    user: newUser
                });

            } else { // ya existe

                return res.status(400).json({
                    success: true,
                    message: `Hola ${firstName.toUpperCase()} ya te encuentras registrado con ese email o usuario`,
                });

            }


        } catch (error) {

            return res.status(400).json({
                success: false,
                message: error,
                console: console.log(error)
            });

        }

    }

}

module.exports = userControllers;