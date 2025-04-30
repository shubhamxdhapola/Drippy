import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiClient } from "../../utils/apiClient"

export const fetchUsers = createAsyncThunk(
    'admin/fetchUsers',
    async() => {
        const response = await apiClient.get(`/api/admin/users`)
        return response.data
    }
)
 
export const addUser = createAsyncThunk(
    'admin/addUser',
    async(userData, {rejectWithValue}) => {
        try {
            const response = await apiClient.post(
                `/api/admin/users`, userData
            )
            return response.data
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateUser = createAsyncThunk(
    'admin/updateUser',
    async({id, name, email, role}, {rejectWithValue}) => {
        try {
            const response = await apiClient.put(
                `/api/admin/users/${id}`, {name, email, role}
            )
            return response.data.user
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteUser = createAsyncThunk(
    'admin/deleteUser',
    async(id) => {
        await apiClient.delete(`/api/admin/users/${id}`)
        return id
    }
)

const adminSlice = createSlice({
    name : 'admin',
    initialState : {
        users : [],
        loading : false,
        error : null,
        addUserLoading : false,
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.roleLoading = false
            const updatedUser = action.payload
            const userIndex = state.users.findIndex(
                (user) => user._id === updatedUser._id
            )
            if(userIndex !== -1) {
                state.users[userIndex] = updatedUser
            }
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.deleteUserLoading = false
            state.users = state.users.filter((user) => user._id !== action.payload)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.error = action.error.message
        })
        .addCase(addUser.pending, (state) => {
            state.addUserLoading = true
            state.error = null
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.addUserLoading = false
            state.users.push(action.payload?.user) 
        })
        .addCase(addUser.rejected, (state, action) => {
            state.addUserLoading = false
            state.error = action.error.message
        })
    }
})

export default adminSlice.reducer
