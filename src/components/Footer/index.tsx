import { Container, SocialMediaContainer } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'


const Footer = () => (
  <Container>

      <img src={logo} alt='Logo efood'/>
      <SocialMediaContainer>
        <a href='#'>
          <img src={instagram} alt='instagram' />
        </a>
        <a href='#'>
          <img src={facebook} alt='facebook' />
        </a>
        <a href='#'>
          <img src={twitter} alt='twitter' />
        </a>
      </SocialMediaContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
  </Container>
)

export default Footer
