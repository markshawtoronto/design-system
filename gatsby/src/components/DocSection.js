import {Box} from '@nulogy/components';
import styled from 'styled-components'
import {color, space} from 'styled-system';

const DocSection = styled(Box)({
},
  color,
  space
)

DocSection.defaultProps = {
  mb: 6
}

export default DocSection