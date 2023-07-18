import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type Props = {
  type: 'home' | 'perfil' | 'modal'
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-width: ${(props) => (props.type === 'modal' ? '1024px' : '')};
  max-height: ${(props) => (props.type === 'modal' ? '344px' : '')};

  img {
    width: ${(props) => (props.type === 'modal' ? '280px' : '100%')};
    height: ${(props) => (props.type === 'modal' ? '280px' : '100%')};
    margin-right: ${(props) => (props.type === 'modal' ? '24px' : '')};
    max-height: ${(props) => (props.type === 'home' ? '217px' : props.type === 'perfil' ? '167px' : '')};
    object-fit: fill;
  }
`

export const CardContainer = styled.div<Props>`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.type === 'modal' ? 'row' : 'column')};
  padding: ${(props) => (props.type === 'home' ? '0 8px 8px' : props.type === 'modal' ? '32px' : '8px')};
  background-color: ${(props) => (props.type === 'home' ? `${colors.white}` : `${colors.main}`)};
  border: 1px solid ${colors.main};
  border-top: none;
  color: ${(props) => (props.type === 'home' ? `${colors.main}` : `${colors.secondary}`)};
  z-index: ${(props) => (props.type === 'modal' ? '1' : '')};


  ${ButtonContainer} {
    max-width: ${(props) => (props.type === 'home' ? '82px' : '')};
    margin-bottom: ${(props) => (props.type === 'modal' ? 'auto' : '')};
    margin-top: ${(props) => (props.type === 'modal' ? '' : 'auto')}
  }
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    margin-top: 8px;
    max-width: 21px;
    max-height: 21px;
  }
`

export const Title = styled.h3<Props>`
  margin-top: ${(props) => (props.type === 'modal' ? '' : '8px')};
  font-weight: 700;
  font-size: ${(props) => (props.type === 'home' ? '18px' : '16px')};
`

export const Description = styled.p<Props>`
  padding: ${(props) => (props.type === 'perfil' ? '8px 0' : '16px 0')};;
  font-size: 14px;
  line-height: 22px;
  max-width: 656px;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.80);
    width: 100%;
    height: 100%;
  }
`
