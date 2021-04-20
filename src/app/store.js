import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/Builder/builderSlice";
import staffReducer from "../features/Staff/staffSlice";
import loginReducer from "../features/Login/loginSlice";
import registrationReducer from "../features/Registration/registrationSlice";
import forgotReducer from "../features/Forgot/forgotSlice";
import configurationReducer from "../features/Configuration/configurationSlice";


const rootReducer = {
    theme: themeReducer,
    staffs: staffReducer,
    userLogin: loginReducer,
    userRegistration: registrationReducer,
    userForgot: forgotReducer,
    userConfiguration: configurationReducer,
}
const store = configureStore({
    reducer: rootReducer
});

export default store;