import React from "react";
// import PropTypes from "prop-types";

Extras.propTypes = {};

function Extras(props) {
  return (
    <div className="tab-pane" id="kt_builder_extras">
      <div className="card-body">
        <div className="example example-basic">
          <p>
            Yêu cầu <code> <b>nâng cấp</b> </code> để có thể sử dụng chức năng này.
          </p>
        </div>
        <div className="row">
          <div className="col-2">
            {/*begin::Tab Inner*/}
            {/* <ul
              className="nav nav-bold nav-light-primary nav-pills flex-column"
              data-remember-tab="tab_extra_id"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#kt_builder_extras_search"
                >
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_notifications"
                >
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_quick_actions"
                >
                  Quick Actions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_user"
                >
                  User
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_languages"
                >
                  Languages
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_quick_panel"
                >
                  Quick Panel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_chat"
                >
                  Chat
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_toolbar"
                >
                  Toolbar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_builder_extras_scrolltop"
                >
                  Scrolltop
                </a>
              </li>
            </ul> */}
            {/*end::Tab Inner*/}
          </div>
          <div className="col-10">
            {/*begin::Tab Content Inner*/}
            <div className="tab-content mt-5">
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane active" id="kt_builder_extras_search">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][search][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][search][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Enable search feature
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Layout:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][search][layout]"
                    >
                      <option value="offcanvas">Offcanvas</option>
                      <option value="dropdown" selected="selected">
                        Dropdown
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select search layout type.
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_notifications">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][notifications][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][notifications][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Enable notifications
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Layout:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][notifications][layout]"
                    >
                      <option value="offcanvas">Offcanvas</option>
                      <option value="dropdown" selected="selected">
                        Dropdown
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select notifications panel layout type
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Dropdown Style:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][notifications][dropdown][style]"
                    >
                      <option value="light">Light</option>
                      <option value="dark" selected="selected">
                        Dark
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select notifications dropdown style
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_quick_actions">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][quick-actions][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][quick-actions][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Enable quick actions
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Layout:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][quick-actions][layout]"
                    >
                      <option value="offcanvas">Offcanvas</option>
                      <option value="dropdown" selected="selected">
                        Dropdown
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select quick actions layout type
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Dropdown Style:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][quick-actions][dropdown][style]"
                    >
                      <option value="light">Light</option>
                      <option value="dark" selected="selected">
                        Dark
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select quick actions dropdown style
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_user">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][user][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][user][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Enable user panel
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Layout:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][user][layout]"
                    >
                      <option value="offcanvas" selected="selected">
                        Offcanvas
                      </option>
                      <option value="dropdown">Dropdown</option>
                    </select>
                    <div className="form-text text-muted">
                      Select user panel's layout type
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    User Dropdown Style:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <select
                      className="form-control form-control-solid"
                      name="builder[layout][extras][user][dropdown][style]"
                    >
                      <option value="light">Light</option>
                      <option value="dark" selected="selected">
                        Dark
                      </option>
                    </select>
                    <div className="form-text text-muted">
                      Select user dropdown layout style
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_languages">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][languages][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][languages][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Display languages dropdown
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_quick_panel">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][quick-panel][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][quick-panel][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Display quick panel
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_chat">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][chat][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][chat][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Display chat modal
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_toolbar">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][toolbar][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][toolbar][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Display toolbar at center right
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
              {/*begin::Tab Pane Inner*/}
              {/* <div className="tab-pane" id="kt_builder_extras_scrolltop">
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label text-lg-right">
                    Display:
                  </label>
                  <div className="col-lg-10 col-xl-4">
                    <input
                      type="hidden"
                      name="builder[layout][extras][scrolltop][display]"
                      defaultValue="false"
                    />
                    <span className="switch switch-icon">
                      <label>
                        <input
                          type="checkbox"
                          name="builder[layout][extras][scrolltop][display]"
                          defaultValue="true"
                          defaultChecked="checked"
                        />
                        <span />
                      </label>
                    </span>
                    <div className="form-text text-muted">
                      Display scrolltop at bottom right
                    </div>
                  </div>
                </div>
              </div> */}
              {/*end::Tab Pane Inner*/}
            </div>
            {/*end::Tab Content Inner*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
