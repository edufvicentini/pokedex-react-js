import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { TypeFlag } from "./components/TypeFlag/TypeFlag"
import { Main } from "./components/Main/Main"
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TypeFlag type="psychic"/>
      
      <Main />
      
    </>
  )
}

export default App
