const userModel = require('../models/userModel')

const favoriteControllers = {

    addOrRemoveFavorite: async (req, res) => {

        const userID = req.params.userid;
        const productID = req.params.productid;

        let error = null;
        let message = null;
        let inFavorite = null;

        try {

            let user = await userModel.find({ _id: userID });

            user = user[0];

            if (user.favorites.includes(productID)) { // si encuentra el producto dentro del usuario

                user.favorites.splice(user.favorites.indexOf(productID), 1) // remuevo el producto del array

                message = 'Eliminado de favoritos'
                inFavorite = false

            } else {

                user.favorites.push(productID) // agrego el producto al array

                message = 'Agregado a favoritos'
                inFavorite = true


            }

            await user.save();

            res.json({
                success: error ? false : true,
                error: error,
                message,
                product: productID,
                inFavorite

            })

        }

        catch (error) {
            res.json({
                response: 'ERROR',
                success: error ? false : true,
                error: error,
                console: console.log(error)
            })
        }

    },

    getFavoriteByUser: async (req, res) => {

        const userID = req.params.id; // id del usuario

        let favorites;
        let error = null;

        try {
            let user = await userModel.find({ _id: userID }).populate('favorites')

            favorites = user[0].favorites
        }

        catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : favorites,
            success: error ? false : true,
            error: error
        })
    },

}

module.exports = favoriteControllers