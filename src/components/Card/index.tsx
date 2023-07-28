import Button from '../Button'
import * as S from './styles'
import star from '../../assets/images/star.svg'
import close from '../../assets/images/close.png'
import Tag from '../Tag'

type Props = {
  type: 'home' | 'perfil' | 'modal'
  image?: string
  title: string
  description: string
  portion?: string
  stars?: string
  tag?: string
  onClick?: () => void
  id?: number
  children?: JSX.Element
}

const Card = ({ type, image, title, description, stars, tag, onClick, id, portion, children }: Props) => {
  if (type === 'home') {
    return (
      <S.Container type="home">
        <img src={image} />
        <S.TagContainer>
          <Tag>{tag as string}</Tag>
        </S.TagContainer>
        <S.CardContainer type={type}>
          <S.TitleContainer>
            <S.Title type={type}>{title}</S.Title>
            <S.StarContainer>
              <S.Title type={type}>{stars}</S.Title>
              <img src={star} alt="Estrela" />
            </S.StarContainer>
          </S.TitleContainer>
          <S.Description type={type}>{description}</S.Description>
          <Button
            as="Link"
            to={`/perfil/${id}`}
            variant="primary"
            title="Clique aqui pra saber mais sobre o restaurante"
          >
            Saiba mais
          </Button>
        </S.CardContainer>
      </S.Container>
    )
  }

  if (type === 'modal') {
    return (
      <S.Modal>
        <S.Container type="modal">
          <S.CardContainer type={type}>
            <S.CloseButton style={{ backgroundImage: `url(${close})` }} onClick={onClick} />
            <img src={image} />
            <div>
              <S.Title type={type}>{title}</S.Title>
              <S.Description type={type}>{description}</S.Description>
              <S.Description type={type}>{portion}</S.Description>
              {children}
            </div>
          </S.CardContainer>
        </S.Container>
        <div className="overlay" onClick={onClick} />
      </S.Modal>
    )
  }

  return (
    <S.Container type="perfil">
      <S.CardContainer type={type}>
        <img src={image} />
        <S.Title type={type}>{title}</S.Title>
        <S.Description type={type}>{description}</S.Description>
        <Button variant="secondary" title="Clique aqui pra saber mais sobre o restaurante" onClick={onClick}>
          Adicionar ao carrinho
        </Button>
      </S.CardContainer>
    </S.Container>
  )
}

export default Card
