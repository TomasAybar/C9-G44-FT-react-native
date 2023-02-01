const UserModel = require('../models/userModel');

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

    addUser: async (req, res) => {

        console.log('Controlador addUsers');

        const { userName, firstName, lastName, email, password, photoUrl } = req.body

        console.log(req.body);

        let newUser;
        let error = null;

        try {
            
            newUser = await new UserModel({
                userName,
                firstName,
                lastName,
                email,
                password,
                photoUrl,
            }).save()

        } catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : newUser,
            success: error ? false : true,
            error: error,
            message: 'Usuario agregado',
        })
    },

}

module.exports = userControllers;