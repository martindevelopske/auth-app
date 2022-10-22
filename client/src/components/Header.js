import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from '../Styles/Styled'

function Header() {
  return (
    <StyledHeader>
    <Link to='/login'> login</Link>
    <Link to='/register'>register</Link>
    </StyledHeader>
  )
}

export default Header