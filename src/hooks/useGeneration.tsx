import { createContext, ReactNode, SetStateAction, useContext, useState } from "react"
import { GenerationType, pokemonGenerations } from "../lib/pokemonGenerations";

interface GenerationProviderProps {
  children: ReactNode;
}

interface GenerationContextData {
  selectedGeneration: GenerationType;
  handleSetSelectedGeneration: (n: number) => void;
}

const GenerationContext = createContext<GenerationContextData>({} as GenerationContextData);

export function GenerationProvider({children}:GenerationProviderProps ) {
  const [selectedGeneration, setSelectedGeneration] = useState({} as GenerationType);

  function handleSetSelectedGeneration(n: number) {
    const generationData = pokemonGenerations.find(gen => gen.id == n);
    setSelectedGeneration(generationData as GenerationType);
  }

  return (
    <GenerationContext.Provider value={{selectedGeneration, handleSetSelectedGeneration}}>
      {children}
    </GenerationContext.Provider>
  )
}

export function useSelectedGeneration() {
  const context = useContext(GenerationContext);

  return context
}