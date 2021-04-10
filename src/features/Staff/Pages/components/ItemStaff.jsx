import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

ItemStaff.propTypes = {
  staff: PropTypes.object,
  handleDelete: PropTypes.func,
};
ItemStaff.defaultProps = {
  staff: {},
  handleDelete: null,
};

function ItemStaff({ staff, handleDelete }) {
  return (
    <div className="card card-custom gutter-b card-stretch">
      {/*begin::Body*/}
      <div className="card-body pt-4">
        {/*begin::Toolbar*/}
        <div className="d-flex justify-content-end">
          <div
            className="dropdown dropdown-inline"
            data-toggle="tooltip"
            title
            data-placement="left"
            data-original-title="Thao tác"
          >
            <a
              href="#"
              className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="svg-icon svg-icon-lg">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Text/Dots.svg*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g stroke="none" strokeWidth={1}>
                    <rect
                      x={14}
                      y={9}
                      width={6}
                      height={6}
                      rx={3}
                      fill="black"
                    />
                    <rect
                      x={3}
                      y={9}
                      width={6}
                      height={6}
                      rx={3}
                      fill="black"
                      fillOpacity="0.7"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
              {/*begin::Naviigation*/}
              <ul className="navi navi-hover navi-active navi-accent">
                <li className="navi-header font-weight-bold py-5">
                  <span className="font-size-lg">Thao tác :</span>
                  <i
                    className="flaticon2-information icon-md text-muted"
                    data-toggle="tooltip"
                    data-placement="right"
                    title
                    data-original-title="Chọn thao tác bạn muốn"
                  />
                </li>
                <li className="navi-separator mb-3 opacity-70" />
                <li className="navi-item">
                  <Link
                    to={`/staff/${staff.id}`}
                    className="navi-link"
                  >
                    <span className="navi-icon">
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group.svg*/}
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
                              d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                    <span className="navi-text">Chi tiết</span>
                  </Link>
                </li>
                <li className="navi-item">
                  <Link to={`/staff/${staff.id}`} className="navi-link">
                    <span className="navi-icon">
                      <span className="svg-icon svg-icon-md svg-icon-success">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
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
                            <path
                              d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                    <span className="navi-text">Chỉnh sửa</span>
                  </Link>
                </li>
                <li className="navi-item">
                  <Link
                    className="navi-link"
                    onClick={() => handleDelete(staff)}
                  >
                    <span className="navi-icon">
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        {/*begin::Svg Icon*/}
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
                              d="M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z M21,8 L17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L21,6 C21.5522847,6 22,6.44771525 22,7 C22,7.55228475 21.5522847,8 21,8 Z"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                    <span className="navi-text">Xóa</span>
                  </Link>
                </li>
              </ul>
              {/*end::Naviigation*/}
            </div>
          </div>
        </div>
        {/*end::Toolbar*/}
        {/*begin::User*/}
        <div className="d-flex align-items-end py-2">
          {/*begin::Pic*/}
          <div className="d-flex align-items-center">
            {/*begin::Pic*/}
            <div className="d-flex flex-shrink-0 mr-5">
              <div className="symbol symbol-circle symbol-lg-75">
                <img src={staff.Avatar} alt="image" />
                <i className="symbol-badge bg-success"></i>
              </div>
            </div>
            {/*end::Pic*/}
            {/*begin::Title*/}
            <div className="d-flex flex-column">
              <a
                href="#"
                className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0"
              >
                {staff.Name}
              </a>
              <span className="text-muted font-weight-bold">
                {staff.Missions}
              </span>
            </div>
            {/*end::Title*/}
          </div>
          {/*end::Title*/}
        </div>
        {/*end::User*/}
        {/*begin::Desc*/}
        <p className="py-2">{staff.Desc}</p>
        {/*end::Desc*/}
        {/*begin::Contacts*/}
        <div className="py-2">
          <div className="d-flex align-items-center mb-2">
            <span className="flex-shrink-0 mr-2">
              <span className="svg-icon svg-icon-md">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Active-call.svg*/}
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
                    <path
                      d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
                      fill="#000000"
                    />
                    <path
                      d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      opacity="0.3"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </span>
            <span className="text-muted font-weight-bold">{staff.Phone}</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="flex-shrink-0 mr-2">
              <span className="svg-icon svg-icon-md">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail.svg*/}
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
                    <path
                      d="M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </span>
            <a
              href="#"
              className="text-muted text-hover-primary font-weight-bold"
            >
              {staff.Email}
            </a>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="flex-shrink-0 mr-2">
              <span className="svg-icon svg-icon-md">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Map/Marker1.svg*/}
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
                    <path
                      d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </span>
            <a
              href="#"
              className="text-muted text-hover-primary font-weight-bold"
            >
              {staff.Address}
            </a>
          </div>
        </div>
        {/*end::Contacts*/}
      </div>
      {/*end::Body*/}
    </div>
  );
}

export default ItemStaff;