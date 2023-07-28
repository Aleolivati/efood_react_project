import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  inputWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .close-cart-mobile {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .close-cart-mobile {
      display: block;
    }
  }

  ${ButtonContainer} {
    width: 100%;

    @media (max-width: ${breakpoints.mobile}) {
      margin-bottom: 12px;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.main};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.secondary};
    margin-bottom: 16px;
  }

  .empty-cart {
    p {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      text-align: center;
      color: ${colors.secondary};
      margin-bottom: 24px;
    }
  }

  .success-text {
    p {
      font-size: 14px;
      line-height: 22px;
      color: ${colors.secondary};
      margin-bottom: 24px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  width: 100%;
  padding: 8px 8px 12px;
  background-color: ${colors.secondary};
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: fill;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.main};
    font-weight: 900;
    font-size: 18px;
  }

  p {
    color: ${colors.main};
    font-size: 14px;
    margin-top: 16px;
  }
`

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;

  p {
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 14px;
  }
`

export const RemoveItem = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const FormContainer = styled.form`
  display: block;

  div {
    &.is-invisible {
      display: none;
    }

    &.is-visible {
      display: block;
    }

    &.row {
      display: flex;
      gap: 32px;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 16px;

  ${ButtonContainer} {
    margin-bottom: 8px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;

  input {
    width: ${(props) => props.inputWidth || '100%'};
    height: 32px;
    color: ${colors.gray};
    background-color: ${colors.secondary};
    font-size: 14px;
    font-weight: 700;
    padding: 8px;
    border: 3px solid ${colors.secondary};
    margin: 8px 0;

    &.is-error {
      border: 3px solid red;
    }
  }

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.secondary};
  }
`
