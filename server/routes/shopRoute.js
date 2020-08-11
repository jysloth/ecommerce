const express = require('express');
const path = require('path');
const shopController = require(path.join(__dirname,'../controllers/shopController'))
const authController = require(path.join(__dirname,'../controllers/authController'))

const router = express.Router();


// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.get('/logout', authController.logout);




router.get('/', shopController.getProducts);
router.get('/product/:id',shopController.getProduct);
router.get('/getCategories',shopController.getCategories);


router.use(authController.protect)
router.get('/cart',shopController.getCart);
router.post('/addcart',shopController.addToCart);
router.delete('/deleteCartItem/:prodId',shopController.deleteFromCart);
router.post('/addOrder',shopController.addOrder);
router.get('/getOrders',shopController.getOrders);

router.post('/checkReview',shopController.enableReview);
router.post('/addReview',shopController.addReview);
router.get('/getMyReview/:prodId', shopController.getMyReview)

router.patch('/updateReview/:prodId', shopController.editMyReview)


router.get('/getSubcategories/:categoryId', shopController.getSubcategories)
router.get('/test', shopController.test)

module.exports = router;