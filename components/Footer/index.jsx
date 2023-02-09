import React from 'react'
import styled from 'styled-components'

const Footer = () => {

const FooterContainer = styled.div`
    width: 100%;
    background-color: #00021A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: .5rem;
    letter-spacing: 1px;
    text-align: center;
    padding: 2rem 0;
`;
  return (
    <FooterContainer>
        <img src="/assets/logos/logo.svg" alt="Logo" className='w-1/3 md:2/4 lg:w-52 mb-6'/>
        <p>Todos os direitos reservados © 2023 INAED | Soluções em Gestão </p>
    </FooterContainer>
  )
}

export default Footer