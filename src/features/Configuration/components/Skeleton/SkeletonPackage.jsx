import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonPackage(props) {
  return (
    <div className="card card-custom gutter-b">
      <div className="card-body py-20">
        <div className="row">
          {Array(3)
            .fill()
            .map((item, index) => (
              <div className="col-xl-4" key={index}>
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
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
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
                        <Skeleton width={80} height={30} />
                      </span>
                    </div>
                    <h4 className="font-size-h6 d-block d-block font-weight-bold text-dark-50 pb-5">
                      <Skeleton width={150} />
                    </h4>
                    <ul className="list-unstyled text-muted mb-10">
                      <li>Link được phép sử dụng</li>
                      <li>Option được cấu hình</li>
                      <li>Đang cập nhập ...</li>
                    </ul>
                    <div className="btn-group dropup">
                      <button
                        type="button"
                        className="btn btn-primary text-uppercase dropdown-toggle font-weight-bolder px-16 py-4 disabled"
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
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
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
                    </div>
                  </div>
                  {/*end::Content*/}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonPackage;
