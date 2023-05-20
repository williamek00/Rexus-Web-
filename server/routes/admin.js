const Controller = require('../controllers/admin')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()
router.post('/admin/login',Controller.login)
router.post('/admin/register',authentication,Controller.register)
//main entity
router.get('/admin/keyboard',authentication,Controller.fetchKeyboard)
router.get('/admin/webcam',authentication,Controller.fetchWebcam)
router.get('/admin/headset',authentication,Controller.fetchHeadset)
router.post('/admin/newproduct',authentication,Controller.addProducts)
router.get('/admin/product/:id',authentication,Controller.fetchProductById)
router.delete('/admin/deleteproduct/:id',authentication,Controller.deleteProducts)
router.put('/admin/updateproduct/:id',authentication,Controller.updateProducts)
//2nd entity
router.get('/admin/category',authentication,Controller.fetchCategories)
router.get('/admin/category/:id',authentication,Controller.fetchCategoryById)
router.post('/admin/newcategory',authentication,Controller.addCategories)
router.delete('/admin/deletecategory/:id',authentication,Controller.deleteCategories)
router.patch('/admin/updatecategory/:id',authentication,Controller.updateNameCategories)

module.exports = router