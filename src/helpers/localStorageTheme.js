import { themeSetting } from "../constants/theme";

export const setThemeSetting = (theme) => {
    localStorage.setItem('ThemeSetting', JSON.stringify(theme));
}
export const getThemeSetting = () => {
    const userStr = localStorage.getItem('ThemeSetting');
    if (userStr) return JSON.parse(userStr);
    else return themeSetting;
}