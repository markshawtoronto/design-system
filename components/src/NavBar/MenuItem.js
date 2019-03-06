import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import theme from "../theme";
import SubMenuItemList from "./SubMenuItemList";
/* eslint react/destructuring-assignment: 0 */

const subMenuStyles = {
  backgroundColor: theme.colors.whiteGrey,
  borderColor: theme.colors.whiteGrey,
  textColor: theme.colors.black,
};

const SubMenu = styled.div({
  color: subMenuStyles.textColor,
  display: "flex",
  flexDirection: "column",
  fontSize: theme.fontSizes.small,
  backgroundColor: subMenuStyles.backgroundColor,
  borderRadius: theme.radii.medium,
  borderTop: `1px solid ${subMenuStyles.borderColor}`,
  boxShadow: theme.boxShadows,
  padding: `${theme.space.x1} 0`,
  transition: "opacity 0.3s",
  zIndex: "999999",
  marginTop: theme.space.half,
},
({ position }) => ({
  ...position,
}));

const Arrow = styled.div({
  height: theme.space.x1,
  position: "absolute",
  width: theme.space.x1,
  margin: "12px",
  left: 0,
  top: 0,
  marginTop: "-7px",
  "&:before": {
    borderStyle: "solid",
    borderColor: `transparent transparent ${subMenuStyles.borderColor} transparent`,
    borderWidth: `0 ${theme.space.x1} ${theme.space.x1} ${theme.space.x1}`,
    content: "''",
    display: "block",
    height: 0,
    margin: "auto",
    position: "absolute",
    width: 0,
    top: "-2px",
    left: `-${theme.space.half}`,
  },
  "&:after": {
    borderStyle: "solid",
    borderColor: `transparent transparent ${subMenuStyles.backgroundColor} transparent`,
    borderWidth: `0 ${theme.space.x1} ${theme.space.x1} ${theme.space.x1}`,
    content: "''",
    display: "block",
    height: 0,
    margin: "auto",
    position: "absolute",
    width: 0,
    left: `-${theme.space.half}`,
  },
});

const MenuItemButton = styled.button({
  display: "inline-flex",
  color: theme.colors.white,
  border: "none",
  backgroundColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  lineHeight: theme.lineHeights.base,
  transition: ".2s",
  fontSize: `${theme.fontSizes.medium}`,
  padding: `${theme.space.x1} ${theme.space.x2}`,
  borderRadius: theme.radii.medium,
  "&:hover, &:focus": {
    outline: "none",
    color: theme.colors.lightBlue,
    backgroundColor: theme.colors.black,
    cursor: "pointer",
  },
  "&:disabled": {
    opacity: ".5",
  },
});

const keyCode = Object.freeze({
  "TAB": 9,
  "RETURN": 13,
  "ESC": 27,
  "SPACE": 32,
  "PAGEUP": 33,
  "PAGEDOWN": 34,
  "END": 35,
  "HOME": 36,
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
});

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuOpen: false,
      focusIndex: 0,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.hideSubMenu = this.hideSubMenu.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
    this.menuItemRefs = [];
  }

  focusFirstItem() {
    this.setState({ focusIndex: 0 });
  }

  focusLastItem() {
    this.setState({ focusIndex: this.props.children.length - 1 });
  }

  focusNextItem() {
    let nextIndex;
    if (this.state.focusIndex === this.props.children.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = this.state.focusIndex + 1;
    }
    this.setState({ focusIndex: nextIndex });
  }

  focusPrevItem() {
    let prevIndex;
    if (this.state.focusIndex === 0) {
      prevIndex = this.props.children.length - 1;
    } else {
      prevIndex = this.state.focusIndex - 1;
    }
    this.setState({ focusIndex: prevIndex });
  }

  subMenuEventHandlers() {
    return ({
      onFocus: () => (this.showSubMenu()),
      onBlur: () => (this.hideSubMenu()),
      onClick: () => (this.showSubMenu()),
      onKeyDown: e => (this.handleKeyDown(e)),
    });
  }

  menuItemEventHandlers() {
    return ({
      onClick: () => (this.showSubMenu()),
      onBlur: () => (this.hideSubMenu()),
      onKeyDown: e => (this.handleKeyDown(e)),
    });
  }

  clearScheduled() {
    clearTimeout(this.hideTimeoutID);
    clearTimeout(this.showTimeoutID);
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case keyCode.ESC:
        this.hideSubMenu(true);
        break;
      case keyCode.UP:
        if (this.state.subMenuOpen) {
          this.focusPrevItem();
        } else {
          this.showSubMenu(true);
          this.focusLastItem();
        }
        break;
      case keyCode.DOWN:
        if (this.state.subMenuOpen) {
          this.focusNextItem();
        } else {
          this.showSubMenu(true);
          this.focusFirstItem();
        }
        break;
      case keyCode.ENTER:
        if (!this.state.subMenuOpen) {
          this.showSubMenu(true);
          this.focusFirstItem();
        }
        break;
      case keyCode.HOME:
        if (this.state.subMenuOpen) {
          this.focusFirstItem();
        }
        break;
      case keyCode.END:
        if (this.state.subMenuOpen) {
          this.focusLastItem();
        }
        break;
      default:
        break;
    }
  }

  hideSubMenu(skipTimer) {
    this.clearScheduled();
    if (!skipTimer) {
      this.hideTimeoutID = setTimeout(() => this.setState({ subMenuOpen: false }), this.props.hideDelay);
    } else {
      this.setState({ subMenuOpen: false });
    }
  }

  showSubMenu(skipTimer) {
    this.clearScheduled();
    if (!skipTimer) {
      this.showTimeoutID = setTimeout(() => this.setState({ subMenuOpen: true }), this.props.showDelay);
    } else {
      this.setState({ subMenuOpen: true });
    }
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <MenuItemButton aria-haspopup="true" aria-expanded={ this.state.subMenuOpen } { ...this.props } { ...this.menuItemEventHandlers() } ref={ ref }>{ this.props.labelText }</MenuItemButton>
          )}
        </Reference>
        {this.state.subMenuOpen && (
        <Popper placement="bottom-start">
          {({
            ref, style, placement, arrowProps,
          }) => (
            <SubMenu
              ref={ ref } position={ style } placement={ placement }
              { ...this.subMenuEventHandlers() }
            >
              <SubMenuItemList focusIndex={ this.state.focusIndex }>
                {this.props.children}
              </SubMenuItemList>
              <Arrow ref={ arrowProps.ref } style={ arrowProps.style } />
            </SubMenu>
          )}
        </Popper>
        )}
      </Manager>
    );
  }
}

MenuItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  children: PropTypes.node,
  showDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuItem.defaultProps = {
  children: null,
  showDelay: "100",
  hideDelay: "350",
};

export default MenuItem;
