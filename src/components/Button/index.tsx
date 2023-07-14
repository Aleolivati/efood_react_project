import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

type Props = {
  type: 'primary' | 'secondary'
  title: string
  onClick?: () => void
  children: string
  as?: string
  to?: string
}

const Button = ({ as, to, type, title, onClick, children }: Props) => {
  if (as === 'Link') {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <ButtonContainer as={Link} to={to as string} type={type} title={title}>{children}</ButtonContainer>
      )
  }

  return (
    <ButtonContainer type={type} title={title} onClick={onClick}>{children}</ButtonContainer>
  )
}

export default Button
