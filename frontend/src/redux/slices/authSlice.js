import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiClient } from "../../utils/apiClient"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../config/firebase"

const userFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialGuestId =
    localStorage.getItem('guestId') || `guest_${new Date().getTime()}`

localStorage.setItem('guestId', initialGuestId)

const initialState = {
    user: userFromStorage,
    guestId: initialGuestId,
    loading: false,
    error: null
}

export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle', async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            const user = result.user
            const idToken = await user.getIdToken()
            const response = await apiClient.post('api/users/google-signin', { idToken })
            localStorage.setItem('userInfo', JSON.stringify(response.data.user))
            return { ...response.data.user, message: "Signed in successfully!" }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await apiClient.post(
                `api/users/login`, userData
            )
            localStorage.setItem('userInfo', JSON.stringify(response.data.user))
            return { ...response.data.user, message: "Logged in successfully!" }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await apiClient.post(
                `api/users/register`, userData
            )
            localStorage.setItem('userInfo', JSON.stringify(response.data.user))
            return { ...response.data.user, message: "Registered successfully!" }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.post('api/users/logout')
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        generateNewGuestId: (state) => {
            state.guestId = `guest_${new Date().getTime()}`
            localStorage.setItem('guestId', state.guestId)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false
                state.user = null
                state.guestId = `guest_${new Date().getTime()}`
                localStorage.removeItem('userInfo')
                localStorage.setItem('guestId', state.guestId)
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
            .addCase(signInWithGoogle.pending, (state) => {
                state.error = null
            })
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(signInWithGoogle.rejected, (state, action) => {
                state.error = action.payload.message
            })
    }
})

export const { logout, generateNewGuestId } = authSlice.actions
export default authSlice.reducer