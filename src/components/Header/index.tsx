import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { Restaurants } from '../../pages/Home'
import { Category, DescriptionMenu, HeaderBackground, HeroTitle, LinkMenu, NavContainer, RestaurantBackground, Title } from './styles'
import BackgroundHeaderImg from '../../assets/images/header_background.png'
import Logo from '../../assets/images/logo.png'

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
        <HeaderBackground type={type} style={{ backgroundImage: `url(${BackgroundHeaderImg})` }}>
          <div className="container">
            <NavContainer>
              <LinkMenu className="left">
                <Link to='/'>Restaurantes</Link>
              </LinkMenu>
              <LinkMenu className="center">
                <Link to='/'><img src={Logo} /></Link>
              </LinkMenu>
              <LinkMenu className="right">
                <a onClick={openCart}>{items.length} produto(s) no seu carrinho</a>
              </LinkMenu>
            </NavContainer>
          </div>
        </HeaderBackground>
        <RestaurantBackground style={{ backgroundImage: `url(${restaurant?.capa})` }}>
          <div className='container'>
            <Category as='h3'>{`${restaurant?.tipo[0].toUpperCase()}${restaurant?.tipo.substring(1)}`}</Category>
            <HeroTitle>{restaurant?.titulo}</HeroTitle>
          </div>
        </RestaurantBackground>
      </>
    )
  }

  return (
    <HeaderBackground type={type} style={{ backgroundImage: `url(${BackgroundHeaderImg})` }}>
      <div className="container">
        <nav>
          <LinkMenu className='center'>
            <img src={Logo} />
          </LinkMenu>
        </nav>
        <DescriptionMenu>
          <Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </Title>
        </DescriptionMenu>
      </div>
    </HeaderBackground>
  )
}

export default Header
