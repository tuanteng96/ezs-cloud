import { createSlice } from '@reduxjs/toolkit';
import { getToken, getUser, setUserStorage, setToken } from '../../helpers/localStorageUser';
import { login } from './asyncActions';

// Slice
const initialUser = getUser();
const initialToken = getToken();

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: initialUser,
        token: initialToken,
        loginStatus: 'idle',
        loginError: null
    },
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {
            state.loginStatus = "loading";
        },
        [login.rejected]: (state, action) => {
            state.loginStatus = "failed";
            state.loginError = action.error.message;
        },
        [login.fulfilled]: (state, action) => {
            state.loginStatus = "success";
            state.token = action.payload.token;
            state.user = action.payload.user;
            const isVerified = action.payload.user.Verified.Success;

            if (isVerified) {
                setToken(action.payload.token);
                setUserStorage(action.payload.user);
            }
        },
    }
});
const { reducer: loginReducer, actions } = loginSlice;
export const { setUser } = actions;
export default loginReducer;