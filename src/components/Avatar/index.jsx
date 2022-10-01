import  { Container } from './styles';
import { FiCamera } from 'react-icons/fi';

export function Avatar() {
  return(
    <Container>
      <img src="https://github.com/guilheermeff.png" alt="Imagem do usuário" />
      <label>
        <FiCamera />
        <input type="file" id="Avatar do usuário" />
      </label>
    </Container>
  )
}