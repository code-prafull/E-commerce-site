import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { allOrders, placeOrder, updateStatus, userOrders } from '../controller/orderController.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRoutes = express.Router()

//for User
orderRoutes.post("/placeorder",isAuth,placeOrder)
// Removed Razorpay routes
orderRoutes.post("/userorder",isAuth,userOrders)
// Removed verifyrazorpay route
 
//for Admin
orderRoutes.post("/list",adminAuth,allOrders)
orderRoutes.post("/status",adminAuth,updateStatus)

export default orderRoutes