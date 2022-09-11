import { Link } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Content>
      <img src={Logo} alt="Logo da Coffee Delivery" />
      <S.Nav>
        <S.Local>Rio de Janeiro, RJ</S.Local>
        <Link to="/checkout">Cart</Link>
      </S.Nav>
    </S.Content>
  )
}
