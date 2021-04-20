import { createSlice } from '@reduxjs/toolkit';
import { getPackage, addPackage, deletePackage, editPackage, getListLink, addLink, deleteLink, editLink } from './asyncActions';

const configurationSlice = createSlice({
    name: 'configuration',
    initialState: {
        listPackages: [],
        packageLoading: "idle",
        listLink: [],
        linkCurren: [],
        linkLoading: "idle",
        packageError: null,
        addPackageLoading: "idle",
        editPackageLoading: "idle",
        addLinkLoading: "idle",
        editLinkLoading: "idle",
    },
    reducers: {
        setLinkCurrent: (state, { payload }) => {
            return {
                ...state,
                linkCurren: payload
            }
        },
        setChecked: (state, { payload }) => {
            const index = state.linkCurren.findIndex(item => item.Id === payload.Id);
            if (index !== -1) {
                state.linkCurren[index].isCheck = payload.isCheck
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
        [getListLink.pending]: (state) => {
            state.linkLoading = "loading";
        },
        [getListLink.rejected]: (state, action) => {
            state.linkLoading = "failed";
        },
        [getListLink.fulfilled]: (state, { payload }) => {
            state.linkLoading = "success";
            state.listLink = payload;
        },
        [addLink.fulfilled]: (state, { payload }) => {
            state.addLinkLoading = "success";
            state.listLink.push(payload);
        },
        [editLink.fulfilled]: (state, { payload }) => {
            state.editLinkLoading = "success";
            const index = state.listLink.findIndex(item => item.Id === payload.Id);
            if (index !== -1) {
                state.listLink[index] = payload
            }
        },
        [deleteLink.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                listLink: state.listLink.filter((item) => item.Id !== payload.Id)
            }
        },
    }
});
const { reducer: configurationReducer, actions } = configurationSlice;
export const { setLinkCurrent, setChecked } = actions;
export default configurationReducer;