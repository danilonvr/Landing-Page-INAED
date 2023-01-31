import styled from "styled-components";

export const DefaultButton = styled.button`
  background-color: #0b6e4f;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #212738;
    color: #fff;
    transform: scale(1.05);
  }
`;
