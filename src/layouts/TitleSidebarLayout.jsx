import React from "react";
import PropTypes from "prop-types";
import { getUser } from "../helpers/localStorageUser";
import { LINKS } from "../constants/links";

TitleSidebarLayout.propTypes = {
  title: PropTypes.string.isRequired,
};
TitleSidebarLayout.defaultProps = {
  title: "",
};

function TitleSidebarLayout(props) {
  const { action } = props;
  const infoUser = getUser();
  const roleLink = infoUser && infoUser.UI && infoUser.UI.Links;
  const isShow = LINKS[action].some((item) => {
    return roleLink.filter((e) => e.Link === item.Link).length > 0
      ? true
      : false;
  });

  if (isShow) {
    return props.children;
  }
  return null;
}

export default TitleSidebarLayout;
