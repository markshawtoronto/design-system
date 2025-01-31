import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeGet } from "styled-system";
import theme from "../theme";
import MenuTrigger from "./MenuTrigger";
import MenuLink from "./MenuLink";

const ApplyMenuLinkStyles = styled.div(({ color, hoverColor, hoverBackground }) => ({
  "*": {
    display: "block",
    color: themeGet(`colors.${color}`, color)(color),
    textDecoration: "none",
    border: "none",
    backgroundColor: "transparent",
    verticalAlign: "middle",
    lineHeight: theme.lineHeights.base,
    transition: ".2s",
    fontSize: `${theme.fontSizes.medium}`,
    padding: `${theme.space.x1} ${theme.space.x2}`,
    borderRadius: theme.radii.medium,
    "&:hover, &:focus": {
      outline: "none",
      color: themeGet(`colors.${hoverColor}`, hoverColor)(hoverColor),
      backgroundColor: themeGet(`colors.${hoverBackground}`, hoverBackground)(hoverBackground),
      cursor: "pointer"
    },
    "&:disabled": {
      opacity: ".5"
    },
    "&:focus": {
      boxShadow: theme.shadows.focus
    }
  }
}));

ApplyMenuLinkStyles.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBackground: PropTypes.string
};

ApplyMenuLinkStyles.defaultProps = {
  color: theme.colors.white,
  hoverColor: theme.colors.lightBlue,
  hoverBackground: theme.colors.black
};

const Nav = styled.nav({
  display: "flex"
});

const renderMenuTrigger = (menuItem, themeColorObject) => (
  <div key={menuItem.name}>
    <MenuTrigger name={menuItem.name} menuData={menuItem.items} {...themeColorObject} />
  </div>
);

const renderMenuLink = (menuItem, themeColorObject) => (
  <div key={menuItem.name}>
    <MenuLink href={menuItem.href} {...themeColorObject}>
      {menuItem.name}
    </MenuLink>
  </div>
);

const renderCustom = (menuItem, themeColorObject) => (
  <ApplyMenuLinkStyles {...themeColorObject} key={menuItem.name}>
    {menuItem.render()}
  </ApplyMenuLinkStyles>
);

const getRenderFunction = menuItem => {
  if (menuItem.items) {
    return renderMenuTrigger;
  } else if (menuItem.href) {
    return renderMenuLink;
  } else if (menuItem.render) {
    return renderCustom;
  } else {
    return () => null;
  }
};

const renderMenuItem = (menuItem, themeColorObject) => getRenderFunction(menuItem)(menuItem, themeColorObject);

const BaseDesktopMenu = ({ menuData, themeColorObject, ...props }) => (
  <Nav {...props}>{menuData.map(menuItem => renderMenuItem(menuItem, themeColorObject))}</Nav>
);

BaseDesktopMenu.propTypes = {
  menuData: PropTypes.arrayOf(PropTypes.shape({})),
  themeColorObject: PropTypes.shape({})
};

BaseDesktopMenu.defaultProps = {
  menuData: null,
  themeColorObject: null
};

const DesktopMenu = styled(BaseDesktopMenu)({
  div: {
    ":not(:last-of-type)": {
      marginRight: theme.space.x1
    }
  }
});

export default DesktopMenu;
