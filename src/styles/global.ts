import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    /* nightmode */
    --nm-background: #313131;
    --nm-text-white: #EFEFEF;

    /* daymode */
    --dm-background: #F9F9F9;
    --dm-text-grey: #6E6E6E;  

    /* components */
    --card-id-color: #171717;
    --search-input-background-color: #E9E9E9;

    /* types */
    /* --type-fire-color: #FF7D1F; */
    /* --type-flying-color: #5C9AEA; */
    /* --type-bug-color: #7DB826; */
    /* --type-dark-color: #656174; */
    /* --type-dragon-color: #2875CE; */
    /* --type-electric-color: #DCC425; */
    /* --type-grass-color: #3BA533;
    --type-poison-color: #A754AE; */
    /* --type-water-color: #2A9BDD;
    --type-fairy-color: #FF92FF; */
    /* --type-fighting-color: #FF366B;
    --type-ghost-color: #627BFF; */
    /* --type-ground-color: #FF7D2A;
    --type-ice-color: #43E9CD;
    --type-normal-color: #9FA39D; */
    /* --type-psychic-color: #FF7A73;
    --type-rock-color: #DCC472;
    --type-steel-color: #34A9C4; */
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
