import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const HeaderBackground = styled.div<Omit<Props, 'restaurantImg'>>`
  width: 100%;
  max-height: ${(props) => (props.type === 'perfil' ? '186px' : '384px')};
  height: 100%;
  padding-top: 64px;
  padding-bottom: ${(props) => (props.type === 'perfil' ? '64px' : '40px')};
`

export const RestaurantBackground = styled.div`
  background-size: cover;
  width: 100%;
  max-height: 280px;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const LinkMenu = styled.div`
  display: flex;
  align-items: center;

  &.left {
    justify-content: start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: end;
  }

  a {
    text-decoration: none;
    color: ${colors.main};
    font-size: 18px;
    font-weight: 900;
  }
`

export const DescriptionMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 136px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.main};
`

export const HeroTitle = styled(Title)`
  font-size: 32px;
  color: ${colors.white};
  position: relative;
  z-index: 1;
`

export const Category = styled(HeroTitle)`
  font-weight: 100;
  margin-bottom: 160px;
`
