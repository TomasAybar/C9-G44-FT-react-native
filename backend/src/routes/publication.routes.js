const router = require('express').Router();
const passport = require('../config/passport');

const {
    getPublication,
    addPublication,
    removePublication,
    updatePublication,
    getOnePublication
} = require('../controllers/publicationControllers')




router.get('/publications', getPublication);
router.post('/publications', passport.authenticate('jwt', { session: false }), addPublication);
router.delete('/publications/:id', passport.authenticate('jwt', { session: false }), removePublication);
router.put('/publications/:id', passport.authenticate('jwt', { session: false }), updatePublication);
router.get('/publications/:id', getOnePublication);

module.exports = router;