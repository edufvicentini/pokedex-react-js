import styled, { css } from "styled-components";

interface CardProps {
  primaryType: string;
}

export const Container = styled.li<CardProps>`
  @media (min-width: 320px) {
    height: 9.3rem;
    width: 12rem;
    border-radius: 6px;
    padding: 10px;
    display: grid;
    grid-template-rows: 50% 20% 20%; 
    ${props => css`
      background-color: ${props.primaryType};
    `};

    .pokemon-information {
      padding-top: 3rem;
    }
    .pokemon-id {
      color: black;
      font-weight: 600;
      position: relative;
      top: -47px;
      left: -6px
    }

    h2 {
      color: white;
      text-align: center;
      font-size: 1.3rem;
      ::first-letter {      
        text-transform: capitalize;
      }
    }

    .pokemon-image {
      height: 8rem;
      position: relative;
      top: -8rem;
      left: 1.3rem;
      filter: drop-shadow(2px 2px 3px black);
    }

    .pokemon-name {
      text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
              2px 2px black, -2px -2px black, 2px -2px black, -2px 2px black;
      margin-bottom: 5px;
    }

    .pokemon-types {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  @media (min-width: 961px) {
    height: 8.3rem;
    width: 20rem;
    border-radius: 6px;
    padding: 20px;
    display: grid;
    grid-template-columns: 60% 40%; 
    ${props => css`
      background-color: ${props.primaryType};
    `};

    .pokemon-id {
      color: black;
      font-weight: 600;
      margin-bottom: 1px;
    }

    h2 {
      color: white;
      font-size: 1.6rem;
      ::first-letter {      
        text-transform: capitalize;
      }
    }

    .pokemon-image {
      height: 11rem;
      position: relative;
      top: -4rem;
      left: -2rem;
      filter: drop-shadow(2px 2px 3px black);
    }

    .pokemon-name {
      text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
              2px 2px black, -2px -2px black, 2px -2px black, -2px 2px black;
      margin-bottom: 10px;
    }
    
    :hover {
      cursor: pointer;
    }
  }
`