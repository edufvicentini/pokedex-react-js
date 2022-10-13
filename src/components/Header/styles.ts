import styled from "styled-components";

export const Container = styled.header`
@media (max-width: 720px) {
    background-color: var(--nm-background);
    color: var(--nm-text-white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 120px;
    padding: 20px 20px 20px 20px;

    .logo {
      display: flex;
      align-items: center;
      height: 30px;
      flex-grow: 0.3;
      .logo-img {
        height: 30px;
        margin-right: 10px;
      }

      .logo-text {
        font-size: 20px;
      }
    }

    .gen-icon {
      height: 2.5rem;
      position: relative;
      left: 40px;
    }
    
    .gen-selector {
      background-color: var(--nm-background);
      border: 0 ;
      flex-grow: 1.0;
      font-size: 1.2rem;
      font-weight: 500;
      text-align:  center;
      color: var(--nm-text-white);
      padding-bottom: 10px;
    }

    .search-input-box {
      padding-left: 10px;
      flex-grow: 3;
      border: 0;
      border-radius: 50px;
      color: var(--nm-background);
      background-color: var(--search-input-background-color);
      font-size: 1.2rem;
      font-weight: 100;
      ::placeholder{
        font-weight: 100;
      }
    }

    .search-input-icon {
      border: inherit;
      position: relative;
      height: 1.5rem;
      align-self: center;
      position: relative;
      left: -40px;
    }    
  };

  @media (min-width: 961px) {
    background-color: var(--nm-background);
    color: var(--nm-text-white);
    display: flex;
    height: 120px;
    padding: 20px 100px 60px;
    .logo {
      display: flex;
      align-items: center;
      height: 40px;
      margin-right: 40px;
      flex-grow: 0.5;
      .logo-img {
        height: 80%;
        margin-right: 10px;
      }

      .logo-text {
        font-size: 40px;
      }
    }

    .gen-icon {
      height: 2.5rem;
      align-self: center;
      position: relative;
      left: 40px;
    }
    
    .gen-selector {
      background-color: var(--nm-background);
      border: 0 ;
      flex-grow: 1.5;
      margin-right: 60px;
      font-size: 1.2rem;
      font-weight: 500;
      text-align:  center;
      color: var(--nm-text-white);
      
      option {
        /* background-color: black; */
      }

    }

    .search-input-box {
      flex-grow: 3;
      border: 0;
      border-radius: 50px;
      padding: 10px 20px;
      color: var(--nm-background);
      background-color: var(--search-input-background-color);
      font-size: 1.2rem;
      font-weight: 100;
      ::placeholder{
        font-weight: 100;
      }
    }

    .search-input-icon {
      border: inherit;
      position: relative;
      height: 1.5rem;
      align-self: center;
      position: relative;
      left: -40px;
    }  
  }

  
  
`