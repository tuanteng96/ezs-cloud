import React, { useState } from "react";
import PropTypes from "prop-types";
import { convertBase64 } from "../../../helpers/globalFormat";

FieldAvatar.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
};

FieldAvatar.defaultProps = {
  type: "file",
  label: "",
  desc: "",
};

function FieldAvatar(props) {
  const { field, form, type, label, desc } = props;
  const { name, value } = field;
  const [avatar, setAvatar] = useState(value);
  const onChangeAvatar = async (evt) => {
    const file = evt.target.files[0];
    const base64 = await convertBase64(file);
    setAvatar(base64);

    const changeEvent = {
      target: {
        name: name,
        value: base64,
      },
    };
    field.onChange(changeEvent);
  };

  const removeAvatar = () => {
    setAvatar("");
  };
  return (
    <div className="form-group row">
      {label && (
        <label
          className="col-form-label text-right col-lg-3 col-sm-12"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="col-lg-9 col-xl-6">
        <div
          className="image-input image-input-outline"
          id="kt_profile_avatar"
          style={{
            backgroundImage: "url(assets/media/users/blank.png)",
          }}
        >
          <div
            className="image-input-wrapper"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          />
          <label
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="change"
            data-toggle="tooltip"
            title
            data-original-title="Change avatar"
          >
            <i className="fa fa-pen icon-sm text-muted" />
            <input
              type={type}
              name={name}
              accept=".png, .jpg, .jpeg"
              //{...field}
              onChange={onChangeAvatar}
            />
            <input type="hidden" name="profile_avatar_remove" />
          </label>
          <span
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="cancel"
            data-toggle="tooltip"
            title
            data-original-title="Cancel avatar"
          >
            <i className="ki ki-bold-close icon-xs text-muted" />
          </span>
          <span
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="remove"
            data-toggle="tooltip"
            title
            data-original-title="Remove avatar"
            onClick={() => removeAvatar()}
          >
            <i className="ki ki-bold-close icon-xs text-muted" />
          </span>
        </div>
        {desc && <span className="form-text text-muted">{desc}</span>}
      </div>
    </div>
  );
}

export default FieldAvatar;
