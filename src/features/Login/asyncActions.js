import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const login = createAsyncThunk('/user/login', async(user, { rejectWithValue }) => {
    try {
        const result = await userApi.login(user);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const reVerify = createAsyncThunk('/user/re-verify', async(UserId, { rejectWithValue }) => {
    try {
        const result = await userApi.reVerify(UserId);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});