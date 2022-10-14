import styled from "styled-components";

export const Container = styled.main`
  @media (min-width: 320px) and (max-width: 961px) {
    background-color: var(--nm-background);
    min-height: calc(100vh - 120px - 100px);
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .card-collection {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 60px;
    list-style: none;
    }

    .no-pokemon-found {
      color: var(--nm-text-white);
      text-align: center;
      position: relative;
      top: 50px;
    }
    .spinner {
      width: 100%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  @media (min-width: 600px) {
    .card-collection {
      grid-template-columns: 1fr 1fr 1fr;
    }
        
  }
  
  @media (min-width: 961px) {
    
    background-color: var(--nm-background);
    height: 100%;
    min-height: calc(100vh - 120px - 100px);
    width: 100%;
    padding: 0 100px 40px;

    .card-collection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 70px;
    justify-items: center;
    justify-content: center;
    list-style: none;
    }

    .no-pokemon-found {
      color: var(--nm-text-white);
      text-align: center;
      position: relative;
      top: 50px;
      
    }

    .spinner {
      width: 100%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
  
`