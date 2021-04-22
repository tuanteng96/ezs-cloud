import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import MainLayout from "../../../../layouts/MainLayout";
import { PATH } from "../../../../constants/paths";
import { Link } from "react-router-dom";
import SubHeaderLayout from "../../../../layouts/SubHeaderLayout";
import { getListLink, getPackage, addOption } from "../../asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TableLink from "../../components/TableLink";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  setChecked,
  setLinkCurrent,
  setOption,
} from "../../configurationSlice";
import { handelErrorApiSwal } from "../../../../helpers/handleErrorApi";
import SkeletonLinkPackage from "../../components/Skeleton/SkeletonLinkPackage";
import FormAddOption from "../../components/FormAddOption";
import { formatVND } from "../../../../helpers/globalFormat";
import FormEditOption from "../../components/FormEditOption";

function Option(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  const [itemEdit, setItemEdit] = useState({});

  useEffect(async () => {
    setIsLoading(true);
    try {
      const resultP = await dispatch(getPackage());
      const resultPUn = unwrapResult(resultP);
      const currentPackage = resultPUn.find(
        (item) => item.Id === parseInt(match.params.Id)
      );
      await dispatch(setOption(currentPackage));
      new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoading(false);
    } catch (error) {
      handelErrorApiSwal(error);
    }
  }, [dispatch]);

  const { listOption } = useSelector((state) => state.userConfiguration);
  const [arrOption, setArrOption] = useState(listOption);

  const columns = React.useMemo(
    () => [
      {
        Header: "STT",
        Cell: ({ row }) => row.index + 1,
        width: 60,
        textAlign: "center",
      },
      {
        Header: "Tên Option",
        accessor: "Title",
        width: "auto",
      },
      {
        Header: "Thời gian sử dụng",
        accessor: "DayQty",
        width: "auto",
      },
      {
        Header: "Nguyên giá",
        accessor: "Price",
        width: "auto",
        Cell: (props) => formatVND(props.value),
      },
      {
        Header: "Giá khuyến mại",
        accessor: "PriceSale",
        width: "auto",
        Cell: (props) => formatVND(props.value),
      },
      {
        Header: "Thời gian tặng thêm",
        accessor: "DayBonus",
        width: "auto",
      },
      {
        Header: "Thao tác",
        textAlign: "center",
        width: 135,
        //Filter: SelectColumnFilter,
        Cell: ({ cell }) => {
          return (
            <div className="d-flex justify-content-center">
              <button
                onClick={() => onEdit(cell.row.original, cell.row.index)}
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
                onClick={() => {
                  onDelete(cell.row.index);
                }}
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
          );
        },
      },
    ],
    []
  );

  const onAddOption = async (values, { setErrors, resetForm }) => {
    const option = [
      {
        ...values,
        PriceSale: Number(values.PriceSale.replace(/[^0-9.-]+/g, "")),
        Price: Number(values.Price.replace(/[^0-9.-]+/g, "")),
      },
    ];
    const newOption = listOption.Options
      ? option.concat(listOption.Options)
      : option;
    const itemPackage = {
      ...listOption,
      Options: newOption,
    };

    try {
      const result = await dispatch(addOption(itemPackage));
      const resultUn = unwrapResult(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Thêm mới thành công !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setModalAddShow(false);
    } catch (error) {
      handelErrorApiSwal(error);
    }
  };

  const onEdit = (item, index) => {
    setModalEditShow(true);
    setItemEdit({ ...item, index: index });
  };

  const onEditOption = async (values, { setErrors, resetForm }) => {
    //const valuesCopy = values;
    const PriceSale = isNaN(values.PriceSale)
      ? Number(values.PriceSale.replace(/[^0-9.-]+/g, ""))
      : values.PriceSale;
    const Price = isNaN(values.Price)
      ? Number(values.Price.replace(/[^0-9.-]+/g, ""))
      : values.Price;

    const valueNum = {
      ...values,
      DayQty: parseInt(values.DayQty),
      DayBonus: parseInt(values.DayBonus),
      PriceSale: PriceSale,
      Price: Price,
    };
    const listOptions = await listOption;
    let arrOption = listOptions && listOptions.Options.slice();

    arrOption[valueNum.index] = valueNum;

    const itemPackage = {
      ...listOption,
      Options: arrOption,
    };
    try {
      const result = await dispatch(addOption(itemPackage));
      const resultUn = unwrapResult(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Cập nhập thành công !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setModalEditShow(false);
    } catch (error) {
      handelErrorApiSwal(error);
    }
  };

  const onDelete = async (index) => {
    const listOptions = await listOption;
    const arrNewOption =
      listOption &&
      listOption.Options &&
      listOption.Options.filter((item, i) => {
        return index !== i;
      });

    const itemPackage = {
      ...listOptions,
      Options: arrNewOption,
    };

    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      html: `Bạn có chắc chắn sẽ xóa Option này không ?`,
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
          const result = await dispatch(addOption(itemPackage));
          const resultUn = unwrapResult(result);
          await new Promise((resolve) => setTimeout(resolve, 500));
        } catch (error) {
          Swal.showValidationMessage(`Không thể xóa Option này`);
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
                {listOption && listOption.Name}
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
                    to={`${PATH.CONFIGURATION}/quan-ly-goi`}
                    className="text-muted"
                  >
                    Quản lý gói
                  </Link>
                </li>
                <li className="breadcrumb-item text-muted">
                  <Link
                    to={`${PATH.CONFIGURATION}/quan-ly-link/${
                      listOption && listOption.Id
                    }/option`}
                    className="text-muted"
                  >
                    {listOption && listOption.Name}
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
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <span className="card-icon">
                    <i className="flaticon2-pie-chart-2 text-primary" />
                  </span>
                  <h3 className="card-label font-weight-800">
                    Danh sách Option gói {listOption && listOption.Name}
                  </h3>
                </div>
                <div className="card-toolbar">
                  {/*begin::Dropdown*/}
                  <div className="dropdown dropdown-inline mr-2"></div>
                  {/*end::Dropdown*/}
                  {/*begin::Button*/}
                  <button
                    type="button"
                    className={`btn btn-primary font-weight-bolder`}
                    onClick={() => setModalAddShow(true)}
                  >
                    <span className="svg-icon svg-icon-md">
                      {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Files/File.svg*/}
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
                          <rect
                            fill="#000000"
                            x={6}
                            y={11}
                            width={9}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#000000"
                            x={6}
                            y={15}
                            width={5}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                    Thêm mới
                  </button>
                  {/*end::Button*/}
                  <Modal
                    animation={true}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={modalAddShow}
                    onHide={() => setModalAddShow(false)}
                  >
                    <FormAddOption
                      onAddOption={onAddOption}
                      onHide={() => setModalAddShow(false)}
                    />
                  </Modal>
                  <Modal
                    animation={true}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={modalEditShow}
                    onHide={() => setModalEditShow(false)}
                  >
                    <FormEditOption
                      onEditOption={onEditOption}
                      onHide={() => setModalEditShow(false)}
                      initial={itemEdit}
                    />
                  </Modal>
                </div>
              </div>
              {/* Modal ADD*/}
              <div className="card-body">
                <div className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded">
                  {/*begin: Datatable*/}
                  {!isLoading &&
                    listOption &&
                    listOption.Options &&
                    listOption.Options.length > 0 && (
                      <TableLink
                        columns={columns}
                        data={listOption && listOption.Options}
                      />
                    )}
                  {isLoading && <SkeletonLinkPackage />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Option;
