import { createSlice } from '@reduxjs/toolkit';
import { registration, verify } from './asyncActions';

// Slice
const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        user: [],
        token: null,
        loadingBrand: false,
        errorBrand: "",
        loadingFname: false,
        errorUSN: "",
        registrationStatus: 'idle',
        registrationError: null,
        verifyStatus: 'idle',
        verifyError: null
    },
    reducers: {
        setLoadingBrand: (state, action) => {
            return {
                ...state,
                loadingBrand: action.payload
            }
        },
        setErrorBrand: (state, action) => {
            return {
                ...state,
                errorBrand: action.payload
            }
        },
        setLoadingFName: (state, action) => {
            return {
                ...state,
                loadingFname: action.payload
            }
        },
        setErrorUSN: (state, action) => {
            return {
                ...state,
                errorUSN: action.payload
            }
        },
    },
    extraReducers: {
        [registration.pending]: (state) => {
            state.registrationStatus = "loading";
        },
        [registration.rejected]: (state, action) => {
            state.registrationStatus = "failed";
            state.registrationError = action.error;
        },
        [registration.fulfilled]: (state, action) => {
            state.registrationStatus = "success";
            state.registrationError = null;
            const { user } = action.payload;
            state.user = {
                Id: user.Id,
                RegPhone: user.RegPhone,
                Secure: user.Verified.Secure
            };
        },
        [verify.pending]: (state) => {
            state.verifyStatus = "loading";
        },
        [verify.rejected]: (state, action) => {
            state.verifyStatus = "failed";
            state.verifyError = action.error;
        },
        [verify.fulfilled]: (state, action) => {
            state.verifyStatus = "success";
            state.verifyError = null;
            //state.user = action.payload;
        },
    }
});
const { reducer: registrationReducer, actions } = registrationSlice;
export const { setLoadingBrand, setErrorBrand, setLoadingFName, setErrorUSN } = actions;
export default registrationReducer;