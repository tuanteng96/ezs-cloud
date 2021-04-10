import React from "react";
import PropTypes from "prop-types";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="tab-pane" id="kt_builder_sidebar">
      <div className="card-body">
        <div className="example example-basic">
          <p>
            Yêu cầu <code> <b>nâng cấp</b> </code> để có thể sử dụng chức năng này.
          </p>
        </div>
        {/* <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Display:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <input
                type="hidden"
                name="builder[layout][sidebar][display]"
                defaultValue="false"
              />
              <label>
                <input
                  type="checkbox"
                  name="builder[layout][sidebar][display]"
                  defaultValue="true"
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">Display Sidebar</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label text-lg-right">
            Expand:
          </label>
          <div className="col-lg-9 col-xl-4">
            <span className="switch switch-icon">
              <input
                type="hidden"
                name="builder[layout][sidebar][expanded]"
                defaultValue="false"
              />
              <label>
                <input
                  type="checkbox"
                  name="builder[layout][sidebar][expanded]"
                  defaultValue="true"
                />
                <span />
              </label>
            </span>
            <div className="form-text text-muted">
              Expand Sidebar by default
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
