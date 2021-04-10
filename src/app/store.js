import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/Builder/builderSlice";
import staffReducer from "../features/Staff/staffSlice";
import loginReducer from "../features/Login/loginSlice";
import registrationReducer from "../features/Registration/registrationSlice";

const rootReducer = {
    theme: themeReducer,
    staffs: staffReducer,
    userLogin: loginReducer,
    userRegistration: registrationReducer,
}
const store = configureStore({
    reducer: rootReducer
});

export default store;