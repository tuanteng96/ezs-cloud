import { createAsyncThunk } from "@reduxjs/toolkit";
// import advApi from "../../api/advApi";

export const fetchStaff = createAsyncThunk('/staff/fetchStaff', async(params, thunkAPI) => {
    //thunkAPI.dispatch()
    try {
        //const data = await advApi.getAll();
        return [{
            id: 1,
            Avatar: "/assets/media/users/150-6.jpg",
            Name: "Nick Bold",
            Phone: "+4567800090",
            Email: "mail@example.com",
            Address: "Barcelona, Spain",
            Missions: "Head of Development",
            Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }];
    } catch (error) {
        throw Error(error);
    }
})
export const deleteStaff = createAsyncThunk('/staff/deleteStaff', async(id, thunkAPI) => {
    try {
        //const data = await advApi.getAll();
        //return data;
    } catch (error) {
        throw Error(error);
    }
})