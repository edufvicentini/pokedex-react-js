import styled, { css } from "styled-components";

interface CardProps {
  primaryType: string;
}

export const Container = styled.li<CardProps>`
  height: 13rem;
  width: 30rem;
  border-radius: 6px;
  padding: 20px;
  display: block;
  ${props => css`
    background-color: ${props.primaryType};
  `};

  .pokemon-id {
    color: black;
    font-weight: 600
  }

  h2 {
    color: white;
    font-size: 2.7rem;
    ::first-letter {
      
      text-transform: capitalize;
    }
  }

  .pokemon-information {
    margin: 0 0 20px 0px;

  }

  .pokemon-image {
    height: 180px;
    position: relative;
    top: -130px;
    left: 260px; 
  }
  :hover {
    cursor: pointer;
  }

  .pokemon-types {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;

  }
  


  
`