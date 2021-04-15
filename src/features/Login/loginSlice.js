import { createSlice } from '@reduxjs/toolkit';
import { getToken, getUser, setUserStorage, setToken } from '../../helpers/localStorageUser';
import { login } from './asyncActions';

// Slice
const initialUser = getUser();
const initialToken = getToken();

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        userInfo: initialUser,
        token: initialToken,
        loginStatus: 'idle',
        loginError: null,
        loadingOTP: false,
    },
    reducers: {
        setLoadingOTP: (state, action) => {
            return {
                ...state,
                loadingOTP: action.payload
            }
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loginStatus = "loading";
        },
        [login.rejected]: (state, action) => {
            state.loginStatus = "failed";
            state.loginError = action.error.message;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loginStatus = "success";
            const { UserInfo } = payload;
            const token = UserInfo.Token;

            setUserStorage(UserInfo);
            setToken(token);

            return void({
                ...state,
                userInfo: UserInfo,
                token: token
            })
        },
    }
});
const { reducer: loginReducer, actions } = loginSlice;
export const { setLoadingOTP } = actions;
export default loginReducer;