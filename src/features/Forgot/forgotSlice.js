import { createSlice } from '@reduxjs/toolkit';

const forgotSlice = createSlice({
    name: 'forgot',
    initialState: {
        loadingPhone: false,
        loadingResetPwd: false,
        sendOTP: false,
        dataUser: [],
        phoneSecure: "",
    },
    reducers: {
        setLoadingPhone: (state, action) => {
            return {
                ...state,
                loadingPhone: action.payload
            }
        },
        setLoadingResetPwd: (state, action) => {
            return {
                ...state,
                loadingResetPwd: action.payload
            }
        },
        setSendOTP: (state, action) => {
            return {
                ...state,
                sendOTP: action.payload
            }
        },
        setdataUser: (state, action) => {
            return {
                ...state,
                dataUser: action.payload
            }
        },
        setPhoneSecure: (state, action) => {
            return {
                ...state,
                phoneSecure: action.payload
            }
        }
    },
    extraReducers: {

    }
});
const { reducer: forgotReducer, actions } = forgotSlice;
export const { setLoadingPhone, setLoadingResetPwd, setSendOTP, setdataUser, setPhoneSecure } = actions;
export default forgotReducer;