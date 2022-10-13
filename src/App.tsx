import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"
import { GenerationProvider } from "./hooks/useGeneration"
import { SearchTermProvider } from "./hooks/useSearchTerm"
function App() {
  return (
    <>
      <GlobalStyle />

      <GenerationProvider>
        <SearchTermProvider>
          <Header />
          <Main />
        </SearchTermProvider>
      </GenerationProvider>

      <Footer />      
    </>
  )
}

export default App
