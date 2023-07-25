import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'

export const CardsGrid = styled.ul<Omit<Props, 'cardItems'>>`
  display: grid;

  grid-template-columns: ${(props) => (props.type === 'perfil' ? '1fr 1fr 1fr' : '1fr 1fr')};
  padding-top: ${(props) => (props.type === 'perfil' ? '56px' : '80px')};
  padding-bottom: 120px;
  column-gap: ${(props) => (props.type === 'perfil' ? '40px' : '80px')};
  row-gap: ${(props) => (props.type === 'perfil' ? '40px' : '48px')};

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: ${(props) => (props.type === 'perfil' ? '40px' : '30px')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
  `

  export const Container = styled.div`
  background-color: ${colors.whiteBackground};

  .visible {
    display: flex;
  }

  .invisible {
    display: none;
  }
`
