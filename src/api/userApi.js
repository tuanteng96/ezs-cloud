import axiosClient from "../api/axiosClient";

class userApi {
    login(user) {
        return axiosClient.post(`/api/v1/signin`, JSON.stringify(user));
    }
    registration(user) {
        return axiosClient.post(`/api/v1/signup`, JSON.stringify(user));
    }
    getSuggest(data) {
        return axiosClient.post(`/api/v1/user/suggest?name=${data.name}&type=${data.type}`);
    }
    exist(data) {
        return axiosClient.post(`/api/v1/user/exist?name=${data.name}&type=${data.type}`);
    }
    verifyPhone(infoVerify) {
        return axiosClient.get(`/api/v1/user/verify?UserID=${infoVerify.UserID}&Secure=${infoVerify.Secure}`)
    }
    reVerify(UserId) {
        return axiosClient.get(`/api/v1/user/re-verify?UserID=${UserId}`)
    }
    getPackage() {
        return axiosClient.get(`/api/v1/user/packages`)
    }
}

export default new userApi();