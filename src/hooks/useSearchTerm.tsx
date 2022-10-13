import { createContext, ReactNode, SetStateAction, useContext, useState } from "react"
import { GenerationType, pokemonGenerations } from "../lib/pokemonGenerations";

interface SearchTermProviderProps {
  children: ReactNode;
}

interface SearchTermContextData {
  searchTerm: string;
  handleSetSearchTerm: (s: string) => void;
}

const SearchTermContext = createContext<SearchTermContextData>({} as SearchTermContextData);

export function SearchTermProvider({children}:SearchTermProviderProps ) {
  const [ searchTerm, setSearchTerm ] = useState('');

  function handleSetSearchTerm(s: string) {
    setSearchTerm(s);
  }

  return (
    <SearchTermContext.Provider value={{searchTerm, handleSetSearchTerm}}>
      {children}
    </SearchTermContext.Provider>
  )
}

export function useSearchTerm() {
  const context = useContext(SearchTermContext);

  return context
}