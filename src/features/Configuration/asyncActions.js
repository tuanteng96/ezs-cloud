import { createAsyncThunk } from "@reduxjs/toolkit";
import configurationApi from "../../api/configurationApi";

export const getPackage = createAsyncThunk('/sys/get-package', async(params, { rejectWithValue }) => {
    try {
        const result = await configurationApi.getPackage();
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const addPackage = createAsyncThunk('/sys/add-package', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.addEditPackage(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const editPackage = createAsyncThunk('/sys/edit-package', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.addEditPackage(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const deletePackage = createAsyncThunk('/sys/delete-package', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.deletePackage(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const addOption = createAsyncThunk('/sys/add-option', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.addEditPackage(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const getListLink = createAsyncThunk('/sys/get-list-link', async(params, { rejectWithValue }) => {
    try {
        const result = await configurationApi.getListLink();
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const addLink = createAsyncThunk('/sys/add-link', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.addLink(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});
export const editLink = createAsyncThunk('/sys/edit-link', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.addLink(data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const deleteLink = createAsyncThunk('/sys/delete-link', async(data, { rejectWithValue }) => {
    try {
        const result = await configurationApi.deleteLink(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});