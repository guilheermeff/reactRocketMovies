import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi'


export function SignIn() {
  return(
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <span>Faça seu login</span>

        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
      </Form>
      <Background />
    </Container>
  )
}