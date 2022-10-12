import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--nm-background);
  height: 100%;
  width: 100%;
  padding: 0 100px 40px;

  .card-collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 70px;
  justify-items: center;
  list-style: none;
  }
  
`