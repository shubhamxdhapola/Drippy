import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiClient } from "../../utils/apiClient"

export const fetchUserOrders = createAsyncThunk(
    'orders/fetchUserOrder',
    async(_, {rejectWithValue}) => {
        try {
            const response = await apiClient.get(`/api/orders/my-orders`)
            return response.data
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchOrderDetails = createAsyncThunk(
    'orders/fetchOrderDetails',
    async(orderId, {rejectWithValue}) => {
        try {
            const response = await apiClient.get(`/api/orders/${orderId}`)
            return response.data
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const orderSlice = createSlice({
    name : 'orders',
    initialState : {
        orders : [],
        totalOrders : 0,
        orderDetails : null,
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        // Fetch user orders
        .addCase(fetchUserOrders.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchUserOrders.fulfilled, (state, action) => {
            state.loading = false,
            state.orders = action.payload
        })
        .addCase(fetchUserOrders.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload?.message
        })
        // Fetch order details
        .addCase(fetchOrderDetails.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchOrderDetails.fulfilled, (state, action) => {
            state.loading = false,
            state.orderDetails = action.payload
        })
        .addCase(fetchOrderDetails.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload?.message
        })
    }
})

export default orderSlice.reducer