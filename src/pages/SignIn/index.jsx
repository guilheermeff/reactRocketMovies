import { Container, Form, Background, Return } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';


export function SignIn() {
  return(
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <p>Faça seu login</p>

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

        <Button title="Entrar" />

        <Return>
          <Link to="/register">Criar conta</Link>
        </Return>
      </Form>
      <Background />
    </Container>
  )
}