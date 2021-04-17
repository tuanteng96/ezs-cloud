import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";
import SubHeaderLayout from "../../../../layouts/SubHeaderLayout";
import { addPackage, deletePackage, editPackage, getPackage } from "../../asyncActions";
import FormAddPackage from "../../components/FormAddPackage";
import PackageItem from "../../components/PackageItem";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import FormEditPackage from "../../components/FormEditPackage";
import SkeletonPackage from "../../components/Skeleton/SkeletonPackage";

function Main(props) {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const result = await dispatch(getPackage());
      const resultUn = unwrapResult(result);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const { listPackages, packageLoading } = useSelector(
    (state) => state.userPackage
  );
  const [modalAddShow, setModalAddShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);
  const [packageEdit, setPackageEdit] = React.useState({});
  
  const onAddPackage = async (values, { setErrors, resetForm }) => {
    const data = { ...values, Price: values.floatPrice };

    try {
      const result = await dispatch(addPackage(data));
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
  };

  const onEditPackage = async (values, { setErrors, resetForm }) => {
    
    const data = { ...values, Price: values.floatPrice };
    try {
      const result = await dispatch(editPackage(data));
      const resultUn = unwrapResult(result);
      toast.success("Chỉnh sửa gói thành công !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setModalEditShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = (item) => {
    setPackageEdit(item);
    setModalEditShow(true);
  }

  const onDelete = (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      html: `Bạn có chắc chắn sẽ xóa gói <b class="text-danger font-weight-800">${item.Name}</b>.`,
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
            deletePackage({
              Id: item.Id,
            })
          );
          const resultUn = unwrapResult(result);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (error) {
          Swal.showValidationMessage(
            `Không thể xóa gói <b class="text-danger font-weight-800">${item.Name}</b>`
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

  return (
    <MainLayout>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
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
                Quản lý gói
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
                  <Link to="/quan-ly-goi" className="text-muted">
                    Quản lý gói
                  </Link>
                </li>
              </ul>
              {/*end::Breadcrumb*/}
            </div>
            {/*end::Page Heading*/}
          </div>
          {/*end::Info*/}
          {/*begin::Toolbar*/}
          <div className="d-flex align-items-center flex-wrap">
            <div
              className="dropdown dropdown-inline"
              data-toggle="tooltip"
              title
              data-placement="top"
              data-original-title="Tạo gói mới"
            >
              <button
                type="button"
                className="btn btn-fixed-height btn-primary font-weight-bolder font-size-sm px-5 my-1"
                onClick={() => setModalAddShow(true)}
              >
                <span className="svg-icon svg-icon-md">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Files/File.svg*/}
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
                        d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                Tạo gói mới
              </button>
            </div>
          </div>
          {/*end::Toolbar*/}
        </SubHeaderLayout>
        {/* Modal ADD*/}
        <Modal
          animation={true}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalAddShow}
          onHide={() => setModalAddShow(false)}
        >
          <FormAddPackage
            onAddPackage={onAddPackage}
            onHide={() => setModalAddShow(false)}
          />
        </Modal>
        {/* Modal*/}
        {/* Modal Edit*/}
        <Modal
          animation={true}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalEditShow}
          onHide={() => setModalEditShow(false)}
        >
          <FormEditPackage
            onEditPackage={onEditPackage}
            onHide={() => setModalEditShow(false)}
            initiaValue={packageEdit}
          />
        </Modal>
        {/* Modal*/}
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Card*/}
            {
              packageLoading !== "success" && <SkeletonPackage />
            }
            <div className="card card-custom gutter-b">
              <div className="card-body py-20">
                <div className="row">
                  {listPackages &&
                    listPackages.map((item, index) => (
                      <div className="col-xl-4" key={index}>
                        {/*begin: Pricing*/}
                        <PackageItem
                          packageItem={item}
                          onDelete={(item) => onDelete(item)}
                          onEdit={(item) => onEdit(item)}
                        />
                        {/*end: Pricing*/}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/*end::Card*/}
          </div>
          {/*end::Container*/}
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
}

export default Main;
