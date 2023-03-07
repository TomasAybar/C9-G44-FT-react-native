const router = require('express').Router();
const passport = require('../config/passport');

const { addOrRemoveFavorite, getFavoriteByUser, addOrRemoveFavorite2, getFavoriteByUser2, iconFavorite } = require('../controllers/favoriteControllers');


// router.post('/products/favorite/:userid/:productid', addOrRemoveFavorite);
router.post('/products/favorite/:userid/:productid', addOrRemoveFavorite2);
// router.get('/products/favorite/:userid', getFavoriteByUser);
router.get('/products/favorite/:userid', getFavoriteByUser2);
router.post('/products/favorite/icon/:userid/:productid', iconFavorite);

module.exports = router;