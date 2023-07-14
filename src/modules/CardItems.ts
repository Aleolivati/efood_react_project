class CardItems {
  id: number
  image: string
  title: string
  description: string
  tags?: string[]
  stars?: string

  constructor(id: number, image: string, title: string, description: string, tags?: string[], stars?: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.tags = tags
    this.stars = stars
  }
}

export default CardItems
