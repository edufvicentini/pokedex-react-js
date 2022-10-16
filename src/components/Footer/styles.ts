import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--nm-background);
  font-size: 0.8rem;
  height: 100px;
  padding: 15px 0;
  color: gray;
  border-top: solid 1px #222;
  .footer-container {
    height: 4rem;
    width: 100%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    padding-bottom: 5px;
    width: 20%;
    text-align: center;
  }

  div {
    display: flex;
    width: 10%;
    padding-top: 5px;
    justify-content: space-around;
  }

  a {
    :hover {
      filter: brightness(80%);
      transition: ease-in 200ms;
    }
  }
  

`