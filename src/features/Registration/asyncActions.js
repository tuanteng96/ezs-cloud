import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const registration = createAsyncThunk('/user/registration', async(user, { rejectWithValue }) => {
    try {
        const result = await userApi.registration(user);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const verify = createAsyncThunk('/user/verify', async(infoVerify, { rejectWithValue }) => {
    try {
        const data = await userApi.verifyPhoneUSN(infoVerify);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const getDomain = createAsyncThunk('/user/getdomain', async(user, { rejectWithValue }) => {
    try {
        const result = await userApi.login(user);
        return result;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const getSuggest = createAsyncThunk('/user/getsuggest', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.getSuggest(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const existValidate = createAsyncThunk('/user/exist', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.exist(data);
        return result.exist;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const getPackage = createAsyncThunk('/user/getpackage', async(data, { rejectWithValue }) => {
    try {
        const result = await userApi.getPackage();
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});