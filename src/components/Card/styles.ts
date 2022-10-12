import styled, { css } from "styled-components";

interface CardProps {
  primaryType: string;
}

export const Container = styled.li<CardProps>`
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
    /* transform: scale(0.3); */
    position: relative;
    top: -4rem;
    left: -2rem;
    /* image-resolution: 130dpi; */
      /* image-rendering: -webkit-opmitimize-contrast; */
  /* image-rendering: crisp-edges; */
  /* image-rendering: pixelated; */

  /* Safari seems to support, but seems deprecated and does the same thing as the others. */
  /* image-rendering: -webkit-optimize-contrast; */
    filter: drop-shadow(2px 2px 3px black);
  }

  .pokemon-name {
    /* text-shadow:  0px 0px 2px black; */
    /* text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black; */
    /* filter: progid:DXImageTransform.Microsoft.Glow(Color=black,Strength=1);  */
    text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
             2px 2px black, -2px -2px black, 2px -2px black, -2px 2px black;
    /* stroke: black;
    stroke-width: 2px; */
    /* -webkit-text-stroke: 1px black; */
    margin-bottom: 10px;
  }
  
  :hover {
    cursor: pointer;
  }

  
`