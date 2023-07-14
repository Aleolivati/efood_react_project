import { Category, DescriptionMenu, HeaderBackground, HeroTitle, LinkMenu, NavContainer, RestaurantBackground, Title } from './styles'
import BackgroundHeaderImg from '../../assets/images/header_background.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'perfil'
  restaurantImg?: string
}

const Header = ({ type, restaurantImg }: Props) => {
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
                <a href="#">0 produto(s) no seu carrinho</a>
              </LinkMenu>
            </NavContainer>
          </div>
        </HeaderBackground>
        <RestaurantBackground style={{ backgroundImage: `url(${restaurantImg as string})` }}>
          <div className='container'>
            <Category as='h3'>Italiana</Category>
            <HeroTitle>La Dolce Vita Trattoria</HeroTitle>
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
