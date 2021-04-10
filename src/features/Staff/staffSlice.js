import { createSlice } from "@reduxjs/toolkit";
import { deleteStaff, fetchStaff } from "./asyncActions";
const staffSlice = createSlice({
    name: 'staff',
    initialState: {
        staffs: [],
        fetchStatus: 'idle',
        deleteStatus: 'idle',
        fetchError: null,
        deleteError: null,
    },
    reducers: {},
    extraReducers: {
        [fetchStaff.pending]: (state) => {
            state.fetchStatus = "loading";
        },
        [fetchStaff.rejected]: (state, action) => {
            state.fetchStatus = "failed";
            state.fetchError = action.error.message;
        },
        [fetchStaff.fulfilled]: (state, action) => {
            state.fetchStatus = "success";
            state.staffs = action.payload;
        },
        [deleteStaff.pending]: (state) => {
            state.deleteLoading = "loading";
        },
        [deleteStaff.rejected]: (state, action) => {
            state.deleteLoading = "failed";
            state.deleteError = action.error.message;
        },
        [deleteStaff.fulfilled]: (state, action) => {
            state.deleteLoading = "success";
            state.deleteError = null;
            const staffsNew = state.staffs.filter(item => item.id !== action.meta.arg);
            state.staffs = staffsNew;
        },
    }
});


const { reducer: staffReducer } = staffSlice;
export default staffReducer;
// const { reducer, actions } = staffSlice;
// export const {
//     startLoading,
// } = actions;
// export default reducer;