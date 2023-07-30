import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'

export const HeaderBackground = styled.div<Omit<Props, 'restaurantImg'>>`
  width: 100%;
  max-height: ${(props) => (props.type === 'perfil' ? '186px' : '384px')};
  height: 100%;
  padding-top: 64px;
  padding-bottom: ${(props) => (props.type === 'perfil' ? '64px' : '40px')};

  @media (max-width: ${breakpoints.tablet}) {
    max-height: ${(props) => (props.type === 'perfil' ? '100px' : '270px')};
    display: ${(props) => (props.type === 'perfil' ? 'flex' : '')};
    align-items: ${(props) => (props.type === 'perfil' ? 'center' : '')};
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-height: ${(props) => (props.type === 'perfil' ? '128px' : '210px')};
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    max-height: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 150px;
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

    @media (max-width: ${breakpoints.mobile}) {
      justify-content: center;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }

  &.center {
    justify-content: center;
    margin: 0 5px;
  }

  &.right {
    justify-content: end;
    align-items: center;
    text-align: end;

    @media (max-width: ${breakpoints.mobile}) {
      justify-content: center;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }

  p {
    margin-right: 8px;
  }

  a, span {
    text-decoration: none;
    color: ${colors.main};
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    display: flex;
    align-items: center;

    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;

      .desktop {
        display: none;
      }

      .mobile {
        display: inline-flex;
      }
    }
  }
`

export const DescriptionMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 136px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 45px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 25px;

    h2 {
      font-size: 18px;
    }
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.main};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`

export const HeroTitle = styled(Title)`
  font-size: 32px;
  color: ${colors.white};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
  }
`

export const Category = styled(HeroTitle)`
  font-weight: 100;
  margin-bottom: 160px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 50px;
  }
`
