const {Router} = require('express');
const router = Router();
const {getUsers, createUser, getUserById} = require('../controllers/controllerUser.js')


router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUserById)



module.exports = router;