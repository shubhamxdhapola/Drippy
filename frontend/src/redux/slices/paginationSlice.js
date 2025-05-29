import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: 'Pagination',
    initialState: {
        currentPage: 1
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const { setCurrentPage } = paginationSlice.actions
export default paginationSlice.reducer