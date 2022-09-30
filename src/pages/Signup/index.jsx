import { Container, Form, Background, Return } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'


export function SignUp() {
  return(
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <p>Crie sua conta</p>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />

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

        <Button title="Cadastrar" />

        <Return>
          <FiArrowLeft />
          <a href="#">Voltar para o login</a>
        </Return>
      </Form>
      <Background />
    </Container>
  )
}