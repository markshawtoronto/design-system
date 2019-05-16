import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";
import { PopperArrow } from "../Utils";

const getThemeColor = color => (theme.colors[color] ? theme.colors[color] : color);

const getMenuMargin = (placement, showArrow) => {
  const direction = String(placement).split("-")[0];
  switch (direction) {
    case "top":
      return {
        marginBottom: showArrow ? "4px" : null
      };
    case "right":
      return {
        marginLeft: showArrow ? "8px" : null,
        marginTop: showArrow ? null : "-8px"
      };
    case "left":
      return {
        marginRight: showArrow ? "8px" : null,
        marginTop: showArrow ? null : "-8px"
      };
    case "bottom":
    default:
      return {
        marginTop: showArrow ? "4px" : null
      };
  }
};

const BaseSubMenu = React.forwardRef(
  ({ popperProps: { style, placement, arrowProps }, showArrow, children, backgroundColor, ...props }, ref) => (
    <div ref={ref} style={style} placement={placement} {...props}>
      {showArrow && (
        <PopperArrow
          {...arrowProps}
          placement={placement}
          backgroundColor={backgroundColor}
          borderColor={backgroundColor}
        />
      )}
      {children}
    </div>
  )
);

BaseSubMenu.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
  showArrow: PropTypes.bool,
  popperProps: PropTypes.shape({})
};

BaseSubMenu.defaultProps = {
  children: null,
  showArrow: true,
  popperProps: null
};

const DropdownMenu = styled(BaseSubMenu)(
  ({ placement, showArrow, backgroundColor }) => ({
    backgroundColor: getThemeColor(backgroundColor),
    borderRadius: theme.radii.medium,
    borderTop: `1px solid ${getThemeColor(backgroundColor)}`,
    borderBottom: `1px solid ${getThemeColor(backgroundColor)}`,
    boxShadow: theme.shadows.small,
    padding: "7px 0",
    zIndex: "100",
    ...getMenuMargin(placement, showArrow)
  }),
  ({ style }) => ({
    ...style
  })
);

DropdownMenu.propTypes = {
  backgroundColor: PropTypes.string,
  showArrow: PropTypes.bool
};

DropdownMenu.defaultProps = {
  backgroundColor: "whiteGrey",
  showArrow: true
};

export default DropdownMenu;