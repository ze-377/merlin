var express=require('express')
var router=express.Router()
//var tokenVerify=require('./token')


var inserton=require('./insertcategory')
router.post('/insertcategory',inserton.insertcategory)

//item searching 
var findItem=require('./datashow')
router.post('/getdata',findItem.finditem)

var alldata=require('./datashow')
router.get('/alldata',alldata.findcategory)

//restaurant adding the data
var restadd=require('./restaurant/restadd')
router.post('/restadd',restadd.restinsert)
//global adding of data
var addItem=require('./update')
router.post('/additem',addItem.additem)
//restaurant login and signup
var restsign=require('./restaurant/restsign')
router.post('/restsign',restsign.rsignup)
router.post('/restlogin',restsign.restlogin)
//====================restaurant data==================
var restdata=require('../routes/restaurant/getrest')
router.get('/getrest',restdata.restd)
//getitems for restaurnat showing the data of items and category
var rescat=require('../routes/restaurant/getcat')
router.post('/getcat',rescat.restdata)

//======================restaurant adding category using id==============================

var pusHcat=require('../routes/restaurant/pushcat')
router.post('/pushcat',pusHcat.pushcat)
//====================restaurant updating its own data=============================================
//===================================================
var data=require('../routes/restaurant/showbycoveage')
router.post('/search',data.show)
//===============order file====================================================
var Order=require('./order')
router.post('/order',Order.orderadd)

//=============restaurant adding coverage area==============
var cover=require('../routes/restaurant/coverage')
router.post('/cover',cover.addpin)
//================================================================

var resitem=require('../routes/restaurant/getitems')
router.post('/getitems',resitem.showcat)
//===================customer login======================================
var custlogin=require('./loginandsignup')
router.post('/signup',custlogin.signup)
router.post('/login',custlogin.login)
module.exports=router
