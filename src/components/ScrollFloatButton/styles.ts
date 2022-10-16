import styled, { css } from "styled-components";

interface ButtonProps {
  isVisible: boolean;
}

export const Container = styled.button<ButtonProps>`
  @media (min-width: 320px) and (max-width: 961px) {
    
  }

  @media (min-width: 600px) {
  }
  
  /* @media (min-width: 961px) { */
  @media (min-width: 0px) {  
  width: 50px;
    height: 50px;
    border:0;
    border-radius: 25px;
    position: fixed;
    bottom: 20px;
    right: 30px;
    background-color: white;
    opacity: 0%;
    transition: 200ms;
    
    ${props => props.isVisible && css`
      opacity: 100%;
      transition: 200ms;
    `};

    :hover {
      filter: brightness(80%);
      transition: 300ms;
    }
   }
  
`