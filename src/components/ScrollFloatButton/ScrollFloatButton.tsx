import { ArrowUp } from "react-feather";
import { Container } from "./styles";

interface ScrollFloatButtonProps {
  isVisible: boolean;
}


export function ScrollFloatButton({ isVisible }: ScrollFloatButtonProps) {
  function handleScrollUp() {
    window.scrollTo({top:0, behavior:"smooth"})
  };

  return (
    <Container onClick={handleScrollUp} isVisible={isVisible}>
      <ArrowUp />
    </Container>
  )
}