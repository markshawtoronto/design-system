import styled from 'styled-components';
import { color, space, width, maxWidth, boxShadow, borderRadius, textAlign } from 'styled-system'
import theme from '../theme'

const size = props => {
    switch (props.size) {
      case 'small':
        return {
          fontSize: `${props.theme.fontSizes[0]}`,
          padding: `${props.theme.space[0]} ${props.theme.space[1]}`
        }
      case 'medium':
        return {
          fontSize: `${props.theme.fontSizes[1]}`,
          padding: `${props.theme.space[1]} ${props.theme.space[2]}`
        }
      case 'large':
        return {
          fontSize: `${props.theme.fontSizes[2]}`,
          padding: `${props.theme.space[1]} ${props.theme.space[2]}`

        }
      default:
        return {
            fontSize: `${props.theme.fontSizes[1]}`,
            padding: `${props.theme.space[1]} ${props.theme.space[2]}`
        }
    }
  }

const fullWidth = props => (props.fullWidth ? { width: '100%' } : null)

const Button = styled.button`
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    border: 0;
    text-decoration: none;
    vertical-align: middle;
    line-height: 1.5;
    transition: .2s;
    cursor: ${props => props.disabled ? 'arrow' : 'pointer'}};
    color: ${props => props.theme.colors['blue']};
    border: 1px solid ${props => props.theme.colors['darkBlue']};
    border-radius: ${props => props.theme.radii[1]};
    
    ${fullWidth} ${size} ${space};
    
    &:hover {
      background-color: ${props => props.disabled ? null : props.theme.colors.lightBlue};
    }
    &:focus {outline: none;}
    &:active {transform: scale(0.98); transition: .2s ease-in;}
    &:disabled {opacity: .5;}
`

Button.defaultProps = {
    theme: theme
}

export default Button