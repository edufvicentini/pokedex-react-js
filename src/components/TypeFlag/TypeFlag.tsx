import { Container } from "./styles";
import { pokemonTypes } from "../../lib/pokemonTypes";

interface TypeFlagProps {
  type: string
}

export function TypeFlag({ type }: TypeFlagProps) {
  const selectedType = pokemonTypes.find((item) => item.type === type)
  return (
    <Container typeColor={selectedType?.color as string}>
      <img src={selectedType?.iconPath}/>
      <span>{selectedType?.type}</span>
    </Container>
  )
}