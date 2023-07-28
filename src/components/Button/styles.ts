import { styled } from 'styled-components'
import { colors } from '../../styles'

type Props = {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) => (props.variant === 'primary' ? `${colors.main}` : `${colors.secondary}`)};
  color: ${(props) => (props.variant === 'primary' ? `${colors.secondary}` : `${colors.main}`)};
  padding: 4px 6px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`
