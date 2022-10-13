import styled, { css } from "styled-components";

interface TypeProps {
  typeColor: string;
}

export const Container = styled.div<TypeProps>`
  display: inline-block;
  border-radius: 8px;
  padding: 2px 5px;
  margin-right: 4px;
  ${props => css`
    background-color: ${props.typeColor}
  `};
  img {
    line-height: 15px;
    height: 15px;
    margin-right: 3px;
    vertical-align: middle;
  };
  .type-name {
    color: white;
    font-size: 0.9rem;
    vertical-align: middle;
    line-height: 20px;
    ::first-letter {
      text-transform: capitalize;
    };
  } 
`