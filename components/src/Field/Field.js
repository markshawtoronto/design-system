import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import { RequirementText, HelpText } from "ComponentsRoot";
import theme from "../theme";

const Label = styled.label(
  space,
  {
    display: "inline-block",
    fontSize: theme.fontSizes[1],
  }
);

const FieldWrapper = styled.div(
  space,
  {
    "> *": {
      marginBottom: theme.space[2],
    },
    "> *:last-child": {
      marginBottom: "0",
    },
  }
);

FieldWrapper.propTypes = {
  ...space.propTypes,
};

const BaseField = ({
  labelText,
  requirementText,
  helpText,
  htmlFor,
  children,
  m, mt, mr, mb, ml, mx, my,
  ...fieldProps
}) => (
  <FieldWrapper
    { ...fieldProps }
    m={ m } mt={ mt } mr={ mr }
    mb={ mb } ml={ ml } mx={ mx }
    my={ my }
  >
    <Label style={ { display: "block" } } mb={ 2 } htmlFor={ htmlFor }>
      {labelText}
      {requirementText && (<RequirementText>{requirementText}</RequirementText>)}
      {helpText && (<HelpText>{helpText}</HelpText>)}
    </Label>
    {children}
  </FieldWrapper>
);

BaseField.propTypes = {
  labelText: PropTypes.string.isRequired,
  requirementText: PropTypes.string,
  helpText: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  ...space.PropTypes,
};

BaseField.defaultProps = {
  children: [],
  requirementText: null,
  helpText: null,
  htmlFor: undefined,
  id: undefined,
};

const Field = styled(BaseField)({});

export default Field;
