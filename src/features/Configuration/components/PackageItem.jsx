import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatVND } from "../../../helpers/globalFormat";
import { PATH } from "../../../constants/paths";
PackageItem.propTypes = {
  packageItem: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
PackageItem.defaultProps = {
  packageItem: null,
  onDelete: null,
};

function PackageItem(props) {
  const { packageItem, onDelete, onEdit } = props;
  return (
    <div className="py-20 px-10 px-lg-20">
      {/*begin::Icon*/}
      <div className="d-flex flex-center position-relative py-20">
        <span className="svg svg-fill-primary opacity-5 position-absolute">
          <svg width={175} height={200}>
            <polyline points="87,0 174,50 174,150 87,200 0,150 0,50 87,0" />
          </svg>
        </span>
        <span className="svg-icon svg-icon-5x svg-icon-primary">
          {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Home/Flower3.svg*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24" />
              <path
                d="M1.4152146,4.84010415 C11.1782334,10.3362599 14.7076452,16.4493804 12.0034499,23.1794656 C5.02500006,22.0396582 1.4955883,15.9265377 1.4152146,4.84010415 Z"
                fill="#000000"
                opacity="0.3"
              />
              <path
                d="M22.5950046,4.84010415 C12.8319858,10.3362599 9.30257403,16.4493804 12.0067693,23.1794656 C18.9852192,22.0396582 22.5146309,15.9265377 22.5950046,4.84010415 Z"
                fill="#000000"
                opacity="0.3"
              />
              <path
                d="M12.0002081,2 C6.29326368,11.6413199 6.29326368,18.7001435 12.0002081,23.1764706 C17.4738192,18.7001435 17.4738192,11.6413199 12.0002081,2 Z"
                fill="#000000"
                opacity="0.3"
              />
            </g>
          </svg>
          {/*end::Svg Icon*/}
        </span>
      </div>
      {/*end::Icon*/}
      {/*begin::Content*/}
      <div className="d-flex flex-column flex-center text-center pt-10">
        <div className="d-flex justify-content-center pb-5">
          <span className="font-weight-bolder display-4 text-dark-75 align-self-center">
            {packageItem.Price ? formatVND(packageItem.Price) : "Free"}
          </span>
          <span className="text-muted font-size-h3 align-self-start ml-2">
            {packageItem.Price ? "đ" : ""}
          </span>
        </div>
        <h4 className="font-size-h6 d-block d-block font-weight-bold text-dark-50 pb-5">
          {packageItem.Name}
        </h4>
        <ul className="list-unstyled text-muted mb-10">
          <li>
            {packageItem.Links
              ? `${packageItem.Links.length} Link được phép sử
            dụng`
              : `Link chưa cấu hình`}
          </li>
          <li>
            {packageItem.Options
              ? `${packageItem.Options.length} Option được cấu hình`
              : `Option chưa cấu hình`}
          </li>
        </ul>
        <div className="btn-group dropup">
          <button
            type="button"
            className="btn btn-primary text-uppercase dropdown-toggle font-weight-bolder px-16 py-4 "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span
              className="svg-icon svg-icon-md"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Design/Flatten.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <circle fill="#000000" cx={9} cy={15} r={6} />
                  <path
                    d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
            Tùy chọn
          </button>
          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            {/*begin::Navigation*/}
            <ul className="navi navi-hover">
              <li className="navi-item" onClick={() => onEdit(packageItem)}>
                <a
                  href="/"
                  className="navi-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="navi-icon">
                    <i className="flaticon2-writing" />
                  </span>
                  <span className="navi-text">Chỉnh sửa</span>
                </a>
              </li>
              <li className="navi-item">
                <a href="#" className="navi-link">
                  <span className="navi-icon">
                    <i className="flaticon2-layers-1" />
                  </span>
                  <span className="navi-text">Option</span>
                  {packageItem.Options && packageItem.Options.lenth > 0 && (
                    <span className="navi-link-badge">
                      <span className="label label-light-success label-rounded font-weight-bolder">
                        {packageItem.Options.length}
                      </span>
                    </span>
                  )}
                </a>
              </li>
              <li className="navi-item">
                <Link
                  to={{
                    pathname: `${PATH.CONFIGURATION}/quan-ly-goi/${packageItem.Id}/link`,
                  }}
                  className="navi-link"
                >
                  <span className="navi-icon">
                    <i className="flaticon2-world" />
                  </span>
                  <span className="navi-text">Link</span>
                  {packageItem.Links && packageItem.Links.length > 0 && (
                    <span className="navi-link-badge">
                      <span className="label label-light-success label-rounded font-weight-bolder">
                        {packageItem.Links.length}
                      </span>
                    </span>
                  )}
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <li className="navi-item" onClick={() => onDelete(packageItem)}>
                <a
                  href="/"
                  className="navi-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="navi-icon">
                    <i className="flaticon-delete text-danger" />
                  </span>
                  <span className="navi-text text-danger">Xóa</span>
                </a>
              </li>
            </ul>
            {/*end::Navigation*/}
          </div>
        </div>
      </div>
      {/*end::Content*/}
    </div>
  );
}

export default PackageItem;
