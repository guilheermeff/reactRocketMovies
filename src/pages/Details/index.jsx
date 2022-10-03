import { Container, Content } from "./styles";
import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';

export function Details() {
  return(
    <Container>
      
      <Header />

      <Content>
        <a href="#"><FiArrowLeft /> Voltar</a>


      </Content>
    </Container>
  )
}