import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Avatar } from '../../components/Avatar';
import { Input } from '../../components/Input'
import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Button } from '../../components/Button';

export function Profile() {
  return(
    <Container>
      <header>
        <a href="#"><FiArrowLeft /> Voltar</a>
      </header>

      <Form>
        <Avatar />

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
          placeholder="Senha atual"
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}