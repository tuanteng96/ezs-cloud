// return the user data from the storage
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the password from the storage
export const getPassword = () => {
        return localStorage.getItem('password') || null;
    }
    // return the token from the storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}
export const setToken = (token) => {
    localStorage.setItem('token', token);
}
export const removeToken = () => {
    localStorage.removeItem('token');
}

// remove the token and user from the storage
export const removeUserStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
}

// set the token and user from the storage
export const setUserStorage = (user, password) => {
    localStorage.setItem('user', JSON.stringify(user));
}