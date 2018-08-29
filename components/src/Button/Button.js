import React from 'react';
import styled, { css } from 'styled-components';
import { colour, space, font, radius, shadow } from '@nulogy/tokens';

export const buttonColours = (mainColour = colour.blue.base, ) => css`
  color: ${mainColour};
  background-color: ${colour.white};
  border-color: ${mainColour};
`

export const primaryButtonColours = (mainColour = colour.blue.base) => css`
  color: ${colour.white};
  background-color: ${mainColour};
  border-color: ${mainColour};
`

const type = ({ type = 'button' }) => (({
  button: css`
    ${buttonColours()}

    &:hover {
      ${buttonColours(colour.blue[700])};
    };

    &:active {
      ${buttonColours()}
    }

    &:disabled {
      ${buttonColours(colour.neutral[400])};
      border-color: ${colour.neutral['300']};
    }
  `,

  submit: css`
    ${primaryButtonColours()}

    &:hover {
      ${primaryButtonColours(colour.blue[700])}
    }

    &:active {
      ${primaryButtonColours()}
    }

    &:disabled {
      ${primaryButtonColours(colour.neutral['300'])}
      color: ${colour.neutral['500']};
    }
  `
})[type]);

const size = ({ size = 'medium' }) => (({
  large: css`
    font-size: ${font.size.large}px;
    line-height: 1.2;
    font-weight: ${font.weight.medium};
    padding: calc(${space.x2} - 1px) ${space.x3}
  `,

  medium: css`
    font-size: ${font.size.small}px;
    line-height: 1.1429;
    font-weight: ${font.weight.medium};
    padding: calc(${space.x1} - 1px) ${space.x2};
  `,

  small: css`
    font-size: ${font.size.smaller}px;
    line-height: 1.3334;
    font-weight: ${font.weight.normal};
    padding: calc(${space.quarter} - 1px) ${space.half};
  `
})[size]);

const Button = styled.button`
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  appearance: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.small};
  transition: .1s  ease-in-out;
  text-align: left;

  ${ size }
  ${ type }

  &:hover{
    box-shadow: ${shadow.close};
  }

  &:active {
    border-style: solid;
    box-shadow: none;
    outline: none;
    transform: scale(0.98);
    transition: .05s  ease-in;
  }

  &:disabled {
    pointer-events: none;
  }

`;

export default Button;
