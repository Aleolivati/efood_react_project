class CardItems {
  id: number
  image: string
  title: string
  description: string
  tags?: string[]
  stars?: string
  price?: string

  constructor(id: number, image: string, title: string, description: string, tags?: string[], stars?: string, price?: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.tags = tags
    this.stars = stars
    this.price = price
  }
}

export default CardItems
