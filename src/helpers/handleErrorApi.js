const SwitchLanguage = (text) => {
    switch (text) {
        case "The Pwd field is required.":
            return "Vui lòng nhập mật khẩu của bạn.";
        case "The field Pwd must be a string with a minimum length of 6 and a maximum length of 50.":
            return "Mật khẩu phải là một chuỗi có độ dài tối thiểu là 6 và độ dài tối đa là 50.";
        case "The RegPhone field is required.":
            return "Vui lòng nhập số điện thoại của bạn";
        case "The field RegPhone has value isn't supported":
            return "Số điện thoại không đúng định dạng";
        case "The field LocationName must be a string with a minimum length of 3 and a maximum length of 250.":
            return "Tên thương hiệu phải có độ dài tối thiểu là 3 và độ dài tối đa là 250.";
        case "TK_DA_SU_DUNG":
            return "Tên tài khoản đã tồn tại. Vui lòng nhập tên tài khoản khác."
        case "THUONG_HIEU_LINK_DA_TON_TAI":
            return "Đường dẫn đã tồn tại. Vui lòng nhập đường dẫn khác."
        default:
            return text;
            break;
    }
}

const changeArrErr = (arr) => {
    const arrChangeMessage = arr.map((item, index) => {
        return SwitchLanguage(item);
    })
    return arrChangeMessage;
}

export const handelErrorApi = (errors) => {

    if (typeof errors !== 'object' && errors === null) return false;
    const errorMessage = {};

    Object.entries(errors).forEach(([key, value]) => {
        errorMessage[key] = changeArrErr(value).join(' & ');
    });
    return errorMessage;
}