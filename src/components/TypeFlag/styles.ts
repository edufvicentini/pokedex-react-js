import styled, { css } from "styled-components";

interface TypeProps {
  typeColor: string;
}

export const Container = styled.div<TypeProps>`
  display: inline-block;
  align-items: center;
  border-radius: 8px;
  padding: 5px 10px;
  ${props => css`
    background-color: ${props.typeColor}
  `};
  img {
    height: 20px;
    margin: 0 3px 0 0;
    
  }
  span {
    color: white;
    ::first-letter {
      text-transform: capitalize;
    }
  }
  


  
`