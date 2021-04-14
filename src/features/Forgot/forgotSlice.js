import { createSlice } from '@reduxjs/toolkit';

const forgotSlice = createSlice({
    name: 'forgot',
    initialState: {
        loadingPhone: false,
        sendOTP: false,
        dataUser: [{
                USN: "nguyentaituan",
                Brands: [
                    { Link: "tuantengspa.ezs.vn", Title: "Tuấn teng Spa & Beauty" }
                ]
            },
            { USN: "tuanteng", Brands: [{ Link: "tuanezs.ezs.vn", Title: "Tuấn EZS" }] },
        ]
    },
    reducers: {
        setLoadingPhone: (state, action) => {
            return {
                ...state,
                loadingPhone: action.payload
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
        }
    },
    extraReducers: {

    }
});
const { reducer: forgotReducer, actions } = forgotSlice;
export const { setLoadingPhone, setSendOTP, setdataUser } = actions;
export default forgotReducer;