import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import productReducer from './slices/productsSlice.js'
import cartReducer from './slices/cartSlice.js'
import checkoutReduer from './slices/checkoutSlice.js'
import ordersReducer from './slices/orderSlice.js'
import adminReducer from './slices/adminSlice.js'
import adminProductsReducer from './slices/adminProductsSlice.js'
import adminOrdersReducer from './slices/adminOrdersSlice.js'

const store = configureStore({   
    reducer : {
        auth : authReducer,
        products : productReducer,
        cart : cartReducer,
        checkout : checkoutReduer,
        orders : ordersReducer,
        admin : adminReducer,
        adminProducts : adminProductsReducer,
        adminOrders : adminOrdersReducer,
    }    
})

export default store