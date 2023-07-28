import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../assets/images/logo.png'
import BackgroundHeaderImg from '../../assets/images/header_background.png'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

export type Props = {
  type: 'home' | 'perfil'
  restaurant?: Restaurants
}

const Header = ({ type, restaurant }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'perfil') {
    return (
      <>
        <S.HeaderBackground type={type} style={{ backgroundImage: `url(${BackgroundHeaderImg})` }}>
          <div className="container">
            <S.NavContainer>
              <S.LinkMenu className="left">
                <Link to="/">
                  <span className="desktop">Restaurantes</span>
                  <span className="mobile">
                    <RestaurantIcon />
                  </span>
                </Link>
              </S.LinkMenu>
              <S.LinkMenu className="center">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </S.LinkMenu>
              <S.LinkMenu className="right">
                <span role="button" onClick={openCart}>
                  <p>{items.length}</p>
                  <span className="desktop">produto(s) no seu carrinho</span>
                  <span className="mobile">
                    <ShoppingCartIcon />
                  </span>
                </span>
              </S.LinkMenu>
            </S.NavContainer>
          </div>
        </S.HeaderBackground>
        <S.RestaurantBackground style={{ backgroundImage: `url(${restaurant?.capa})` }}>
          <div className="container">
            <S.Category as="h3">{`${restaurant?.tipo[0].toUpperCase()}${restaurant?.tipo.substring(1)}`}</S.Category>
            <S.HeroTitle>{restaurant?.titulo}</S.HeroTitle>
          </div>
        </S.RestaurantBackground>
      </>
    )
  }

  return (
    <S.HeaderBackground type={type} style={{ backgroundImage: `url(${BackgroundHeaderImg})` }}>
      <div className="container">
        <nav>
          <S.LinkMenu className="center">
            <img src={Logo} />
          </S.LinkMenu>
        </nav>
        <S.DescriptionMenu>
          <S.Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </S.Title>
        </S.DescriptionMenu>
      </div>
    </S.HeaderBackground>
  )
}

export default Header
