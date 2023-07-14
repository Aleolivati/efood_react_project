import CardItems from '../../modules/CardItems'
import Card from '../Card'
import { CardsGrid, Container } from './styles'

export type Props = {
  type: 'home' | 'perfil'
  cardItems: CardItems[]
}

const CardList = ({ type, cardItems }: Props) => {
  if (type === 'perfil') {
    return (
      <Container>
        <div className="container">
          <CardsGrid type={type}>
            {cardItems.map((item) => (
              <Card
                key={item.id}
                type={type}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </CardsGrid>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="container">
        <CardsGrid type={type}>
          {cardItems.map((item) => (
            <Card
              type={type}
              image={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              stars={item.stars}
            />
          ))}
        </CardsGrid>
      </div>
    </Container>
  )
}

export default CardList
