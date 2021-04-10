import { createSlice } from "@reduxjs/toolkit";
import {
    getThemeSetting,
    setThemeSetting,
} from "../../helpers/localStorageTheme";
const themeSettings = getThemeSetting();
const theme = createSlice({
    name: "ThemeSetting",
    initialState: themeSettings,
    reducers: {
        editTheme: (state, action) => {
            state[0] = action.payload;
            setThemeSetting(state);
            return state;
        },
        editPage: (state, action) => {
            state[1] = action.payload;
            setThemeSetting(state);
            return state;
        },
        editHeader: (state, action) => {
            state[2] = action.payload;
            setThemeSetting(state);
            return state;
        },
        editSubHeader: (state, action) => {
            state[3] = action.payload;
            setThemeSetting(state);
            return state;
        },
        editContent: (state, action) => {
            state[4] = action.payload;
            setThemeSetting(state);
            return state;
        },
        editFooter: (state, action) => {
            state[5] = action.payload;
            setThemeSetting(state);
            return state;
        },
    },
});

const { reducer, actions } = theme;
export const {
    editTheme,
    editPage,
    editHeader,
    editSubHeader,
    editContent,
    editFooter,
} = actions;
export default reducer;