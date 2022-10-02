import { Container, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from '../../components/Header';

export function CreateMovie() {
  return(
    <Container>

      <Header />

      <a href="#"><FiArrowLeft /> Voltar</a>

      <Content>
        <form>
          <h1>Novo filme</h1>

          
        </form>
      </Content>

    </Container>
  )
}