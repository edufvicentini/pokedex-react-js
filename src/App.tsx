import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { TypeFlag } from "./components/TypeFlag/TypeFlag"
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TypeFlag type="psychic"/>
    </>
  )
}

export default App
