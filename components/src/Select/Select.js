import React from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import styled from "styled-components";
import theme from "../theme";
import { subPx } from "../utils";

const getBorderColor = (errored, focused, disabled) => {
  if (errored) { return theme.colors.red; }
  if (disabled) { return theme.colors.lightGrey; }
  if (focused) { return theme.colors.blue; }

  return theme.colors.grey;
};

const SelectBox = styled.div([], ({ error, isFocused, disabled }) => ({
  display: "flex",
  padding: 0,
  border: "1px solid",
  borderRadius: theme.radii[1],
  boxShadow: isFocused ? theme.boxShadows[0] : "none",
  outline: "none",
  borderColor: getBorderColor(error, isFocused, disabled),
  background: disabled ? theme.colors.whiteGrey : theme.colors.white,
  "&:hover": {
    borderColor: error ? theme.colors.red : theme.colors.blue,
  },
}));

const Input = styled.input([], ({ error, isFocused, disabled }) => ({
  width: "100%",
  paddingLeft: subPx(theme.space[2]),
  paddingRight: subPx(theme.space[2]),
  border: "none",
  borderTopLeftRadius: theme.radii[1],
  borderTopRightRadius: theme.radii[1],
  boxShadow: isFocused ? theme.boxShadows[0] : "none",
  outline: "none",
  borderColor: getBorderColor(error, isFocused, disabled),
  background: disabled ? theme.colors.whiteGrey : theme.colors.white,
  "&:hover": {
    borderColor: theme.colors.blue,
  },
}));

const IndicatorButton = styled.div([], () => ({
  border: "none",
  background: "none",
  padding: `${subPx(theme.space[2], 1)} ${theme.space[3]}`,
}));

const ToggleButton = ({ isOpen }) => (
  <IndicatorButton>
    {
      isOpen
        ? "^"
        : "v"
    }
  </IndicatorButton>
);

const Menu = styled.div([], ({ error, isFocused, disabled }) => ({
  // from menu
  borderColor: getBorderColor(error, isFocused, disabled),
  borderWidth: "1px",
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  marginTop: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  boxShadow: theme.boxShadows[0],


  // from menuList
  padding: "0px",
  borderBottomStyle: "solid",
  borderBottomLeftRadius: theme.radii[1],
  borderBottomRightRadius: theme.radii[1],
  background: disabled ? theme.colors.whiteGrey : theme.colors.white,
}));

const MenuItem = styled.div([], ({ isSelected }) => ({
  color: theme.colors.black,
  padding: subPx(theme.space[2]),
  fontWeight: isSelected ? "bold" : "normal",
  background: isSelected ? "none" : "default",
  "&:hover": {
    background: theme.colors.lightBlue,
  },
}));

const Select = ({ error, onChange, disabled, options, optionToString, value, required, placeholder }) => (
  <Downshift
    itemToString={ optionToString }
    selectedItem={ value }
    onChange={ onChange }
  >
    {
      ({
        getMenuProps,
        getItemProps,
        getInputProps,
        getToggleButtonProps,
        isOpen,
        selectedItem,
      }) => (
        <div>
          <SelectBox { ...getToggleButtonProps({ disabled, error }) }>
            <Input { ...getInputProps({ disabled, error }) } required={ required } readOnly value={ selectedItem && selectedItem.label } placeholder={ placeholder } />
            <ToggleButton isOpen={ isOpen } />
          </SelectBox>
          {
            isOpen
              ? (
                <Menu { ...getMenuProps({ error }) }>
                  {
                    isOpen
                      ? options.map((option, index) => (
                        <MenuItem
                          { ...getItemProps({
                            key: option.value,
                            item: option,
                            isSelected: selectedItem === option,
                            index,
                            disabled,
                          }) }
                        >
                          {option.label}
                        </MenuItem>
                      ))
                      : null
                  }
                </Menu>
              )
              : null
          }
        </div>
      )
    }
  </Downshift>
);

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  // options: PropTypes.arrayOf(PropTypes.shape([{
  //   label: PropTypes.string,
  //   value: PropTypes.string,
  // }])).isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool
};

Select.defaultProps = {
  value: undefined,
  required: false,
  onChange: undefined,
  error: false
};

export default Select;