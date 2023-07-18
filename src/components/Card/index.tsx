import Button from '../Button'
import { CardContainer, CloseButton, Container, Description, Modal, StarContainer, TagContainer, Title, TitleContainer } from './styles'
import star from '../../assets/images/star.svg'
import close from '../../assets/images/close.png'
import Tag from '../Tag'

export type Props = {
  type: 'home' | 'perfil' | 'modal'
  image: string
  title: string
  description: string
  portion?: string
  stars?: string
  tag?: string
  onClick?: () => void
  price?: string
  id?: number
}



const Card = ({ type, image, title, description, stars, tag, onClick, price, id, portion }: Props) => {

  if (type === 'home') {
    return (
      <Container type='home'>
        <img src={image} />
        <TagContainer>
            <Tag>{tag as string}</Tag>
        </TagContainer>
        <CardContainer type={type}>
          <TitleContainer>
            <Title type={type}>{title}</Title>
            <StarContainer>
              <Title type={type}>{stars}</Title>
              <img src={star} alt="Estrela" />
            </StarContainer>
          </TitleContainer>
          <Description type={type}>{description}</Description>
          <Button as="Link" to={`/perfil/${id}`} type="primary" title="Clique aqui pra saber mais sobre o restaurante">
            Saiba mais
          </Button>
        </CardContainer>
      </Container>
    )
  }

  if (type === 'modal') {
    return (
      <Modal>
        <Container type='modal'>
          <CardContainer type={type}>
            <CloseButton style={{ backgroundImage: `url(${close})` }} onClick={onClick} />
            <img src={image} />
            <div>
              <Title type={type}>{title}</Title>
              <Description type={type}>{description}</Description>
              <Description type={type}>{portion}</Description>
              <Button type="secondary" title="Clique aqui pra saber mais sobre o restaurante">
                {`Adicionar ao carrinho - ${price as string}`}
              </Button>
            </div>
          </CardContainer>
        </Container>
        <div className='overlay' onClick={onClick}/>
      </Modal>
    )  }

  return (
    <Container type='perfil'>
      <CardContainer type={type}>
        <img src={image} />
        <Title type={type}>{title}</Title>
        <Description type={type}>{description}</Description>
        <Button type="secondary" title="Clique aqui pra saber mais sobre o restaurante" onClick={onClick}>
          Adicionar ao carrinho
        </Button>
      </CardContainer>
    </Container>
  )
}

export default Card
