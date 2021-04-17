import { createAsyncThunk } from "@reduxjs/toolkit";
import packageApi from "../../api/packageApi";

export const getPackage = createAsyncThunk('/sys/get-package', async(params, { rejectWithValue }) => {
    try {
        const result = await packageApi.getPackage();
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const addPackage = createAsyncThunk('/sys/add-package', async(data, { rejectWithValue }) => {
    try {
        const result = await packageApi.addEditPackage(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const editPackage = createAsyncThunk('/sys/edit-package', async(data, { rejectWithValue }) => {
    try {
        const result = await packageApi.addEditPackage(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const deletePackage = createAsyncThunk('/sys/delete-package', async(data, { rejectWithValue }) => {
    try {
        const result = await packageApi.deletePackage(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});