import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

type Props = {
  variant: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  title: string
  onClick?: () => void
  children: string
  as?: string
  to?: string
}

const Button = ({ as, to, type, title, onClick, children, variant }: Props) => {
  if (as === 'Link') {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <ButtonContainer as={Link} to={to as string} variant={variant} title={title}>{children}</ButtonContainer>
      )
  }

  return (
    <ButtonContainer variant={variant} type={type} title={title} onClick={onClick}>{children}</ButtonContainer>
  )
}

export default Button
