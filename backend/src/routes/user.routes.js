const router = require('express').Router()
const passport = require('../config/passport')

const {
	getUsers,
	signinUser,
	signupUser,
	removeUser,
	addInformationUser,
	getInfoUsers,
	removeInfoUser,
} = require('../controllers/userControllers')

router.post('/signin', signinUser)
router.post('/signup', signupUser)
// router.get('/users', passport.authenticate('jwt', { session: false }), getUsers)
router.get('/users', getUsers)
// router.delete('/user/:id', passport.authenticate('jwt', { session: false }), removeUser);
router.delete('/user/:id', removeUser)
router.post('/user/:id', addInformationUser)
router.get('/user/info', getInfoUsers)
router.delete('/user/info/:id', removeInfoUser)

module.exports = router
