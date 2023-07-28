declare type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  cartId?: number
  restaurantId?: number
}

declare type Restaurants = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }]
}
