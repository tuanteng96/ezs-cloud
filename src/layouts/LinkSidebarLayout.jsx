import React from "react";
import PropTypes from "prop-types";
import { getUser } from "../helpers/localStorageUser";

LinkSidebarLayout.propTypes = {
  Link: PropTypes.string.isRequired,
};
LinkSidebarLayout.defaultProps = {
  Link: "",
};

function LinkSidebarLayout(props) {
  const { Link } = props;
  const infoUser = getUser();
  const roleLink = infoUser && infoUser.UI && infoUser.UI.Links;
  const isShow = roleLink.filter((item) => item.Link === Link).length;
  if (isShow > 0) {
    return props.children;
  } else {
    return null;
  }
}

export default LinkSidebarLayout;
