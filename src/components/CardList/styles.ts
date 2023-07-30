import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'
import { CardContainer } from '../Card/styles'

export const CardsGrid = styled.ul<Omit<Props, 'cardItems' | 'isLoading' | 'restaurantId'>>`
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
    padding-top: 40px;
    row-gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding-top: 30px;
    row-gap: 30px;
  }
  `

  export const Container = styled.div`
  background-color: ${colors.whiteBackground};

  .is-visible {
    display: flex;
  }

  .is-invisible {
    display: none;
  }
`

export const ModalContainer = styled.div`
  .overlay {

    img {
      width: 200px;
      height: 200px;
    }

    ${CardContainer} {
      align-items: center;
      text-align: center;

      p {
        padding-bottom: 0;
      }
    }

    .buttonContainer {
      display: flex;
      justify-content: center;
      gap: 36px;
    }
  }
`
