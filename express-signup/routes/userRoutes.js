const {signUp} = require('../controllers/usercontrolers')
const router = require('express').Router()


router.post('/signup', signUp)


module.exports = router;