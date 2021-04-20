import axiosClient from "../api/axiosClient";

class userApi {
    login(user) {
        return axiosClient.post(`/api/v1/signin`, JSON.stringify(user.values), {
            headers: {
                "g-recaptcha-response": user.token
            }
        });
    }
    registration(user) {
        return axiosClient.post(`/api/v1/signup`, JSON.stringify(user.values), {
            headers: {
                "g-recaptcha-response": user.token
            }
        });
    }
    resetforgot(data) {
        return axiosClient.post(`/api/v1/user/resetpwd`, JSON.stringify(data));
    }
    requireVerifyPhone(phone) {
        return axiosClient.get(`/api/v1/user/requireVerifyPhone?Phone=${phone}`);
    }
    verifyPhoneForgot(data) {
        return axiosClient.get(`/api/v1/user/verifyPhone?Phone=${data.Phone}&secure=${data.secure}`);
    }
    findUsersByPhone(data) {
        return axiosClient.post(`/api/v1/user/find-users-by-phone`, JSON.stringify(data));
    }
    getSuggest(data) {
        return axiosClient.post(`/api/v1/user/suggest?name=${data.name}&type=${data.type}`, null, {
            headers: {
                "g-recaptcha-response": data.token
            }
        });
    }
    exist(data) {
        return axiosClient.post(`/api/v1/user/exist?name=${data.name}&type=${data.type}`, null, {
            headers: {
                "g-recaptcha-response": data.token
            }
        });
    }
    verifyPhoneUSN(infoVerify) {
        return axiosClient.get(`/api/v1/user/verify?UserID=${infoVerify.UserID}&Secure=${infoVerify.Secure}`, {
            headers: {
                "g-recaptcha-response": infoVerify.token
            }
        })
    }
    reVerify(data) {
        return axiosClient.get(`/api/v1/user/re-verify?UserID=${data.userId}`, {
            headers: {
                "g-recaptcha-response": data.token
            }
        });
    }
    getPackage(token) {
        return axiosClient.get(`/api/v1/user/packages`, {
            headers: {
                "g-recaptcha-response": token
            }
        });
    }
}

export default new userApi();