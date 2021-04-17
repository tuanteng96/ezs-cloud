//Convert Base 64
export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

//format date new Date() to mm/dd/yyyy
export const dateToYMD = (date) => {
        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return (m <= 9 ? "0" + m : m) + "/" + (d <= 9 ? "0" + d : d) + "/" + "" + y;
    }
    //Format Phone 84
export const formatPhone84 = (phone) => {
        if (!phone) return;
        return `840${phone.substring(1)}`
    }
    //Format VNĐ
export const formatVND = (price) => {
    if (!price) return false;
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}