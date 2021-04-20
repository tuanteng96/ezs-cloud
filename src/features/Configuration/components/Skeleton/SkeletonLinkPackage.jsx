import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonLinkPackage(props) {
  return (
    <table className="table table-bordered table-checkable">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên Link </th>
          <th>Link</th>
          <th className="text-center">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {Array(8)
          .fill()
          .map((item, index) => (
            <tr role="row" key={index}>
              <td className="align-middle text-center" role="cell">
                {index + 1}
              </td>
              <td className="align-middle" role="cell">
                <Skeleton width={150} />
              </td>
              <td className="align-middle" role="cell">
                <Skeleton width={150} />
              </td>
              <td className="align-middle text-center" role="cell">
                <div className="d-flex justify-content-center">
                  <span className="switch switch-sm">
                    <label>
                      <input
                        type="checkbox"
                        name="isChecked"
                        defaultChecked={true}
                      />
                      <span></span>
                    </label>
                  </span>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default SkeletonLinkPackage;
