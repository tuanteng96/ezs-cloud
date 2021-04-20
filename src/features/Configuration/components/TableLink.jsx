import React from "react";
import { useTable, usePagination } from "react-table";
import PropTypes from "prop-types";

TableLink.propTypes = {};

function TableLink({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );
  // Render the UI for your table
  return (
    <>
      <table
        className="table table-bordered table-checkable"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="font-weight-800"
                  {...column.getHeaderProps({
                    style: { textAlign: column.textAlign, width: column.width },
                  })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="align-middle"
                      {...cell.getCellProps({
                        style: {
                          textAlign: cell.column.textAlign,
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="datatable-pager datatable-paging-loaded">
        <ul className="datatable-pager-nav my-2 mb-sm-0">
          <li>
            <a
              title="First"
              className={`datatable-pager-link datatable-pager-link-first ${
                !canPreviousPage ? "datatable-pager-link-disabled" : ""
              }`}
              data-page={1}
              disabled="disabled"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage ? "disabled" : ""}
            >
              <i className="flaticon2-fast-back" />
            </a>
          </li>
          <li>
            <a
              title="Previous"
              className={`datatable-pager-link datatable-pager-link-prev ${
                !canPreviousPage ? "datatable-pager-link-disabled" : ""
              }`}
              data-page={1}
              disabled="disabled"
              onClick={() => previousPage()}
            >
              <i className="flaticon2-back" />
            </a>
          </li>
          <li>
            <input
              type="text"
              className="datatable-pager-inputs form-control"
              title="Page number"
              value={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </li>
          <li>
            <a
              title="Next"
              className={`datatable-pager-link datatable-pager-link-next ${
                !canNextPage ? "datatable-pager-link-disabled" : ""
              }`}
              onClick={() => nextPage()}
            >
              <i className="flaticon2-next" />
            </a>
          </li>
          <li>
            <a
              title="Last"
              className={`datatable-pager-link datatable-pager-link-last ${
                !canNextPage ? "datatable-pager-link-disabled" : ""
              }`}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <i className="flaticon2-fast-next" />
            </a>
          </li>
        </ul>
        <div className="datatable-pager-info my-2 mb-sm-0">
          <select
            className="form-control form-control-sm form-control-solid"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Hiển thị {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default TableLink;
