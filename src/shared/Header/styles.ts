import styled from 'styled-components'

export const Content = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  height: 105px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    padding: 8px;
    background-color: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};
    border-radius: 6px;
  }
`

export const Local = styled.div`
  padding: 8px;
  background-color: ${(props) => props.theme['brand-purple-light']};
  color: ${(props) => props.theme['brand-purple-dark']};
  border-radius: 6px;
`
