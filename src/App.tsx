import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"
import { GenerationProvider } from "./hooks/useGeneration"
import { SearchTermProvider } from "./hooks/useSearchTerm"
import { ScrollFloatButton } from "./components/ScrollFloatButton/ScrollFloatButton"
import { useState } from "react"

function App() {
  
  const [ isScrollUpButtonVisible, SetIsScrollUpButtonVisible ] = useState(false as boolean);
  return (
    <>
      <GlobalStyle />
      <GenerationProvider>
        <SearchTermProvider>
          <Header />
          <Main SetIsScrollUpButtonVisible={SetIsScrollUpButtonVisible}/>
          <ScrollFloatButton isVisible={isScrollUpButtonVisible}/>
        </SearchTermProvider>
      </GenerationProvider>

      <Footer />      
    </>
  )
}

export default App
