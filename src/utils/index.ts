export const parseToBrl = (preco: number) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
