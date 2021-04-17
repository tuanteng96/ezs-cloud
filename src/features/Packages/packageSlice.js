import { createSlice } from '@reduxjs/toolkit';
import { getPackage, addPackage, deletePackage, editPackage } from './asyncActions';

const packageSlice = createSlice({
    name: 'package',
    initialState: {
        listPackages: [],
        packageLoading: "idle",
        packageError: null,
        addPackageLoading: "idle",
        editPackageLoading: "idle"
    },
    reducers: {
        setLoadingOTP: (state, action) => {
            return {
                ...state,
                loadingOTP: action.payload
            }
        }
    },
    extraReducers: {
        [getPackage.pending]: (state) => {
            state.packageLoading = "loading";
        },
        [getPackage.rejected]: (state, action) => {
            state.packageLoading = "failed";
            state.packageError = action.error.message;
        },
        [getPackage.fulfilled]: (state, { payload }) => {
            state.packageLoading = "success";
            state.listPackages = payload;
        },
        [addPackage.pending]: (state) => {
            state.addPackageLoading = "loading";
        },
        [addPackage.rejected]: (state, action) => {
            state.addPackageLoading = "failed";
            state.packageError = action.error.message;
        },
        [addPackage.fulfilled]: (state, { payload }) => {
            state.addPackageLoading = "success";
            state.listPackages.push(payload);
        },
        [editPackage.pending]: (state) => {
            state.editPackageLoading = "loading";
        },
        [editPackage.rejected]: (state, action) => {
            state.editPackageLoading = "failed";
        },
        [editPackage.fulfilled]: (state, { payload }) => {
            state.editPackageLoading = "success";
            const index = state.listPackages.findIndex(item => item.Id === payload.Id);
            if (index > 0) {
                state.listPackages[index] = payload
            }
        },
        [deletePackage.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                listPackages: state.listPackages.filter((item) => item.Id !== payload.Id)
            }
        },
    }
});
const { reducer: packageReducer, actions } = packageSlice;
export const { setLoadingOTP } = actions;
export default packageReducer;