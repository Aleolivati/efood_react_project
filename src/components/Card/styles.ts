import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type Props = {
  type: 'home' | 'perfil'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
  }
`

export const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.type === 'home' ? '0 8px 8px' : '8px')};
  background-color: ${(props) => (props.type === 'home' ? `${colors.white}` : `${colors.main}`)};
  border: 1px solid ${colors.main};
  border-top: none;
  color: ${(props) => (props.type === 'home' ? `${colors.main}` : `${colors.secondary}`)};

  ${ButtonContainer} {
    max-width: ${(props) => (props.type === 'home' ? '82px' : '')};
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
  margin-top: 8px;
  font-weight: 700;
  font-size: ${(props) => (props.type === 'home' ? '18px' : '16px')};
`

export const Description = styled.p<Props>`
  padding: ${(props) => (props.type === 'home' ? '16px 0' : '8px 0')};;
  font-size: 14px;
  line-height: 22px;
`
