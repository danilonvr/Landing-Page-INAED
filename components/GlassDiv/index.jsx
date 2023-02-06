import styled from 'styled-components'

export const Glass = styled.div`
    background-color: ${(props) =>
      props.background || "rgba(255, 255, 255, 0.25)"};
    backdrop-filter: blur(7.5px);
    padding: 1rem 1.5rem;
    border-radius: 12px;
    color: #fff;
    @media screen and (max-width: 450px) {
      margin: 0 auto;
    }
    @media screen and (max-width: 390px) {
      padding: 0.5rem 0.7rem;
    }
  `;