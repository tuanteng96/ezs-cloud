import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const requireVerifyPhone = createAsyncThunk('/user/requireVerifyPhone', async(phone, { rejectWithValue }) => {
    try {
        const result = await userApi.requireVerifyPhone(phone);
        return result;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const verifyPhone = createAsyncThunk('/user/verifyPhone', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.verifyPhoneForgot(data);
        return result;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const findUsersByPhone = createAsyncThunk('/user/find-users-by-phone', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.findUsersByPhone(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const resetForgot = createAsyncThunk('/user/reset-forgot', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.resetforgot(data);
        return result;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});