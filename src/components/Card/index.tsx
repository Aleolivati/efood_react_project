import Button from '../Button'
import { CardContainer, Container, Description, StarContainer, TagContainer, Title, TitleContainer } from './styles'
import star from '../../assets/images/star.svg'
import Tag from '../Tag'

export type Props = {
  type: 'home' | 'perfil'
  image: string
  title: string
  description: string
  stars?: string
  tags?: string[]

}

const Card = ({ type, image, title, description, stars, tags }: Props) => {
  if (type === 'home') {
    return (
      <Container>
        <img src={image} />
        <TagContainer>
          {(tags as string[]).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <CardContainer type={type}>
          <TitleContainer>
            <Title type={type}>{title}</Title>
            <StarContainer>
              <Title type={type}>{stars}</Title>
              <img src={star} alt='Estrela'/>
            </StarContainer>
          </TitleContainer>
          <Description type={type}>
            {description}
          </Description>
          <Button as='Link' to='/perfil' type='primary' title='Clique aqui pra saber mais sobre o restaurante'>Saiba mais</Button>
        </CardContainer>
      </Container>
    )
  }

  return (
    <Container>
      <CardContainer type={type}>
        <img src={image} />
        <Title type={type}>{title}</Title>
        <Description type={type}>
          {description}
        </Description>
        <Button type='secondary' title='Clique aqui pra saber mais sobre o restaurante'>Adicionar ao carrinho</Button>
      </CardContainer>
    </Container>
  )
}

export default Card
