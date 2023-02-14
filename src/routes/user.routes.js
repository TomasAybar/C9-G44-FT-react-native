const router = require('express').Router();
const passport = require('../config/passport');

const { getUsers, signinUser, signupUser, removeUser } = require('../controllers/userControllers');

router.post('/signin', signinUser);
router.post('/signup', signupUser);
router.get('/users', passport.authenticate('jwt', { session: false }), getUsers);
router.delete('/user/:id', passport.authenticate('jwt', { session: false }), removeUser);


module.exports = router;
