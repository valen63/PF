const { Router } = require('express')
const router = Router()

const { payStripe } = require('../../controllers/controllerPaysMethods.js')

router.post('/', payStripe)

module.exports = router
