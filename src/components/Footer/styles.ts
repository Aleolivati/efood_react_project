import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  color: ${colors.main};
  font-size: 10px;
  text-align: center;
`

export const SocialMediaContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;

  a {
    padding: 0 4px;
  }

`
