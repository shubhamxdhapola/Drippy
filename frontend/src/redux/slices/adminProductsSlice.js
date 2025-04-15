import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiClient } from "../../utils/apiClient"

export const fetchAdminProducts = createAsyncThunk(
    'adminProducts/fetchProducts',
    async () => {
        const response = await apiClient.get(`/api/admin/products`)
        return response.data
    }
)

export const createProduct = createAsyncThunk(
    'adminProducts/createProduct',
    async (productData) => {
        const response = await apiClient.post(
            `/api/admin/products`, productData
        )
        return response.data
    }
)

export const updateProduct = createAsyncThunk(
    'adminProducts/updateProduct',
    async ({ id, productData }) => {
        const response = await apiClient.put(
            `/api/products/${id}`, productData
        )
        return response.data
    }
)

export const deleteProduct = createAsyncThunk(
    'adminProducts/deleteProduct',
    async (id) => {
        await apiClient.delete(`/api/products/${id}`)
        return id
    }
)

const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState: {
        loading: false,
        products: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAdminProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchAdminProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(
                    (product) => product._id === action.payload._id
                )
                if (index !== -1) {
                    state.products[index] = action.payload
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload
                )
            })
    }
})

export default adminProductsSlice.reducer