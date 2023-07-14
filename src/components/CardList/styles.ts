import { styled } from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const CardsGrid = styled.ul<Omit<Props, 'cardItems'>>`
  display: grid;

  grid-template-columns: ${(props) => (props.type === 'perfil' ? '1fr 1fr 1fr' : '1fr 1fr')};
  padding-top: ${(props) => (props.type === 'perfil' ? '56px' : '80px')};
  padding-bottom: 120px;
  column-gap: ${(props) => (props.type === 'perfil' ? '40px' : '80px')};
  row-gap: ${(props) => (props.type === 'perfil' ? '40px' : '48px')};
  `

  export const Container = styled.div`
  background-color: ${colors.whiteBackground};
`
