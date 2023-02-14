const router = require('express').Router();
const passport = require('../config/passport');

const { getProducts, addProduct, removeProduct, modifyProduct, getOneProduct } = require('../controllers/productControllers');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products/add', passport.authenticate('jwt', { session: false }), addProduct);
router.delete('/products/delete/:id', passport.authenticate('jwt', { session: false }), removeProduct);
router.put('/products/modify/:id', passport.authenticate('jwt', { session: false }), modifyProduct);


module.exports = router;