import React from 'react'
import styled from 'styled-components'

const AuthButtonStyled = styled.button`
  padding: 1rem;
  background: #456fda;
  color: white;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
`;

const AuthButton = ({title, handleClick}) => {
  return (
    <div>
     <AuthButtonStyled onClick={handleClick}>{title}</AuthButtonStyled> 
    </div>
  )
}

export default AuthButton
