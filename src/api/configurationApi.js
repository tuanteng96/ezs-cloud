import axiosClient from "../api/axiosClient";

class packageApi {
    getPackage() {
        return axiosClient.get(`/api/v1/sys/package/list`);
    }
    addEditPackage(data) {
        return axiosClient.post(`/api/v1/sys/package/edit`, JSON.stringify(data));
    }
    deletePackage(data) {
        return axiosClient.post(`/api/v1/sys/package/delete`, JSON.stringify(data));
    }
    getListLink() {
        return axiosClient.get(`/api/v1/sys/funclink/list`);
    }
    addLink(data) {
        return axiosClient.post(`/api/v1/sys/funclink/edit`, JSON.stringify(data));
    }
    editLink(data) {
        return axiosClient.post(`/api/v1/sys/funclink/edit`, JSON.stringify(data));
    }
    deleteLink(data) {
        return axiosClient.post(`/api/v1/sys/funclink/delete`, JSON.stringify(data));
    }
}

export default new packageApi();