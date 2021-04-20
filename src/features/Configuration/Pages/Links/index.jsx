import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainLayout from "../../../../layouts/MainLayout";
import SubHeaderLayout from "../../../../layouts/SubHeaderLayout";
import { Link } from "react-router-dom";
import { PATH } from "../../../../constants/paths";
import { useDispatch, useSelector } from "react-redux";
import { deleteLink, editLink, getListLink } from "../../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import { Modal } from "react-bootstrap";
import FormAddLink from "../../components/FormAddLink";
import { toast } from "react-toastify";
import { addLink } from "../../asyncActions";
import TableLink from "../../components/TableLink";
import Swal from "sweetalert2/dist/sweetalert2.js";
import FormEditLink from "../../components/FormEditLink";
import SkeletonLink from "../../components/Skeleton/SkeletonLink";

Links.propTypes = {};

function Links(props) {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const result = await dispatch(getListLink());
      const resultUn = unwrapResult(result);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  const [linkEdit, setLinkEdit] = useState({});

  const { listLink, linkLoading } = useSelector(
    (state) => state.userConfiguration
  );

  const onAddLink = async (values, { setErrors, resetForm }) => {
    const checkLink = listLink.filter((item) => item.Link === values.Link);
    if (checkLink > 0) {
      try {
        const result = await dispatch(addLink(values));
        const resultUn = unwrapResult(result);
        toast.success("Thêm mới gói thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        setModalAddShow(false);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors({
        Link: "Link đã tồn tại",
      });
    }
  };
  const onEdit = (item) => {
    setModalEditShow(true);
    setLinkEdit(item);
  };
  const onEditLink = async (values, { setErrors, resetForm }) => {
    const checkLink = listLink.filter((item) => item.Link === values.Link);
    if (checkLink > 0) {
      try {
        const result = await dispatch(editLink(values));
        const resultUn = unwrapResult(result);
        toast.success("Chỉnh sửa gói thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        setModalEditShow(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors({
        Link: "Link đã tồn tại",
      });
    }
  };
  const onDelete = (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      html: `Bạn có chắc chắn sẽ xóa gói <b className="text-danger font-weight-800">${item.Link}</b>.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa ngay",
      cancelButtonText: "Không",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        try {
          const result = await dispatch(
            deleteLink({
              Id: item.Id,
            })
          );
          const resultUn = unwrapResult(result);
          await new Promise((resolve) => setTimeout(resolve, 300));
        } catch (error) {
          Swal.showValidationMessage(
            `Không thể xóa Link <b className="text-danger font-weight-800">${item.Link}</b>`
          );
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Xóa thành công",
          icon: "success",
        });
      }
    });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "STT",
        Cell: ({ row }) => row.index + 1,
        width: 60,
        textAlign: "center",
      },
      {
        Header: "Tên Link",
        accessor: "Title",
        width: "auto",
      },
      {
        Header: "Link",
        accessor: "Link",
        width: "auto",
      },
      {
        Header: "Thao tác",
        textAlign: "center",
        width: 135,
        Cell: ({ cell }) => (
          <div className="d-flex justify-content-center">
            <button
              onClick={() => onEdit(cell.row.original)}
              className="btn btn-sm btn-clean btn-icon mr-3"
              title="Chỉnh sửa"
            >
              <span className="svg-icon svg-icon-md">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  {" "}
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <rect x={0} y={0} width={24} height={24} />{" "}
                    <path
                      d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                    />{" "}
                    <rect
                      fill="#000000"
                      opacity="0.3"
                      x={5}
                      y={20}
                      width={15}
                      height={2}
                      rx={1}
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </span>
            </button>
            <button
              className="btn btn-sm btn-clean btn-icon"
              title="Xóa"
              onClick={() => onDelete(cell.row.original)}
            >
              <span className="svg-icon svg-icon-md">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  {" "}
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <rect x={0} y={0} width={24} height={24} />{" "}
                    <path
                      d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />{" "}
                    <path
                      d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                      fill="#000000"
                      opacity="0.3"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </span>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <MainLayout>
      <div className="content d-flex flex-column flex-column-fluid">
        <SubHeaderLayout>
          {/*begin::Info*/}
          <div className="d-flex align-items-center flex-wrap mr-1">
            {/*begin::Mobile Toggle*/}
            <button
              className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
              id="kt_subheader_mobile_toggle"
            >
              <span />
            </button>
            {/*end::Mobile Toggle*/}
            {/*begin::Page Heading*/}
            <div className="d-flex align-items-baseline flex-wrap mr-5">
              {/*begin::Page Title*/}
              <h5 className="text-dark font-weight-800 my-1 mr-5">
                Quản lý Links
              </h5>
              {/*end::Page Title*/}
              {/*begin::Breadcrumb*/}
              <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                <li className="breadcrumb-item text-muted">
                  <Link to="/" className="text-muted">
                    Trang chủ
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link to={`${PATH.CONFIGURATION}`} className="text-muted">
                    Cấu hình
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link
                    to={`${PATH.CONFIGURATION}/quan-ly-link`}
                    className="text-muted"
                  >
                    Quản lý Link
                  </Link>
                </li>
              </ul>
              {/*end::Breadcrumb*/}
            </div>
            {/*end::Page Heading*/}
          </div>
          {/*end::Info*/}
        </SubHeaderLayout>
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <div className="card card-custom gutter-b">
              <div className="card-body d-flex align-items-center py-5 py-lg-10">
                {/*begin::Icon*/}
                <div className="d-flex flex-center position-relative ml-5 mr-15 ml-lg-9">
                  <span className="svg-icon svg-icon-5x svg-icon-primary position-absolute opacity-15">
                    {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Layout/Layout-polygon.svg*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70px"
                      height="70px"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <g stroke="none" strokeWidth={1} fillRule="evenodd">
                        <path
                          d="M28 4.04145C32.3316 1.54059 37.6684 1.54059 42 4.04145L58.3109 13.4585C62.6425 15.9594 65.3109 20.5812 65.3109 25.5829V44.4171C65.3109 49.4188 62.6425 54.0406 58.3109 56.5415L42 65.9585C37.6684 68.4594 32.3316 68.4594 28 65.9585L11.6891 56.5415C7.3575 54.0406 4.68911 49.4188 4.68911 44.4171V25.5829C4.68911 20.5812 7.3575 15.9594 11.6891 13.4585L28 4.04145Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className="svg-icon svg-icon-2x svg-icon-primary position-absolute">
                    {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Tools/Compass.svg*/}
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
                          d="M7.07744993,12.3040451 C7.72444571,13.0716094 8.54044565,13.6920474 9.46808594,14.1079953 L5,23 L4.5,18 L7.07744993,12.3040451 Z M14.5865511,14.2597864 C15.5319561,13.9019016 16.375416,13.3366121 17.0614026,12.6194459 L19.5,18 L19,23 L14.5865511,14.2597864 Z M12,3.55271368e-14 C12.8284271,3.53749572e-14 13.5,0.671572875 13.5,1.5 L13.5,4 L10.5,4 L10.5,1.5 C10.5,0.671572875 11.1715729,3.56793164e-14 12,3.55271368e-14 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                        <path
                          d="M12,10 C13.1045695,10 14,9.1045695 14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 C10,9.1045695 10.8954305,10 12,10 Z M12,13 C9.23857625,13 7,10.7614237 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,10.7614237 14.7614237,13 12,13 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </div>
                {/*end::Icon*/}
                {/*begin::Description*/}
                <div className="m-0 text-dark-50 font-weight-bold font-size-lg">
                  Danh sách tất cá các links trên phần mềm EZS Cloud. Hỗ trợ
                  phần cấu hình Link theo từng gói ở phần Quản lý gói
                </div>
                {/*end::Description*/}
              </div>
            </div>
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <span className="card-icon">
                    <i className="flaticon2-pie-chart-2 text-primary" />
                  </span>
                  <h3 className="card-label font-weight-800">
                    Danh sách Link EZS Cloud
                  </h3>
                </div>
                <div className="card-toolbar">
                  {/*begin::Dropdown*/}
                  <div className="dropdown dropdown-inline mr-2"></div>
                  {/*end::Dropdown*/}
                  {/*begin::Button*/}
                  <button
                    type="button"
                    className="btn btn-primary font-weight-bolder"
                    onClick={() => setModalAddShow(true)}
                  >
                    <i className="la la-plus" />
                    Thêm mới Link
                  </button>
                  {/*end::Button*/}
                </div>
              </div>
              {/* Modal ADD*/}
              <Modal
                animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalAddShow}
                onHide={() => setModalAddShow(false)}
              >
                <FormAddLink
                  onAddLink={onAddLink}
                  onHide={() => setModalAddShow(false)}
                />
              </Modal>
              {/* Modal Edit*/}
              <Modal
                animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalEditShow}
                onHide={() => setModalEditShow(false)}
              >
                <FormEditLink
                  onEditLink={onEditLink}
                  onHide={() => setModalEditShow(false)}
                  initiaValue={linkEdit}
                />
              </Modal>
              {/* Modal*/}
              {/* Modal*/}
              <div className="card-body">
                <div className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded">
                  {/*begin: Datatable*/}
                  {linkLoading === "success" && (
                    <TableLink columns={columns} data={listLink} />
                  )}
                  {linkLoading === "loading" && <SkeletonLink />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Links;
