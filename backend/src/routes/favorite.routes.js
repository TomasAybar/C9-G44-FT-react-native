const router = require('express').Router();
const passport = require('../config/passport');

const { addOrRemoveFavorite, getFavoriteByUser } = require('../controllers/favoriteControllers');


router.post('/products/favorite/:userid/:productid', addOrRemoveFavorite);
router.get('/products/favorite/:id', getFavoriteByUser);

module.exports = router;