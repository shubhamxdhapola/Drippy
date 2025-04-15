import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiClient } from "../../utils/apiClient"

export const fetchAllOrders = createAsyncThunk(
    'adminOrders/fetchAllOrders',
    async (_, {rejectWithValue}) => {
        try {
            const response = await apiClient.get(`api/admin/orders`)
            return response.data
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateOrderStatus = createAsyncThunk(
    'adminOrders/updateOrderStatus',
    async ({id, status}, {rejectWithValue}) => {
        try {
            const response = await apiClient.put(
                `api/admin/orders/${id}`, {status}
            )
            return response.data
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteOrder = createAsyncThunk(
    'adminOrders/deleteOrder',
    async (id, {rejectWithValue}) => {
        try {
            await apiClient.delete(`api/admin/orders/${id}`)
            return id
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const adminOrdersSlice = createSlice({
    name : 'adminOrders',
    initialState : {
        orders : [],
        totalOrders : 0,
        totalSales : 0,
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchAllOrders.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.loading = false,
            state.orders = action.payload
            state.totalOrders = action.payload.length
            const totalSales = action.payload.reduce((acc, order) =>  acc + order.totalPrice, 0)
            state.totalSales = totalSales
        })
        .addCase(fetchAllOrders.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload.message
        })
        .addCase(updateOrderStatus.fulfilled, (state, action) => {
            const updatedOrder = action.payload
            const orderIndex = state.orders.findIndex(
                (order) => order._id === updatedOrder._id
            )
            if(orderIndex !== -1) {
                state.orders[orderIndex] = updatedOrder
            }
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.orders = state.orders.filter(
                (order) => order._id !== action.payload
            )
        })
    }
})

export default adminOrdersSlice.reducer