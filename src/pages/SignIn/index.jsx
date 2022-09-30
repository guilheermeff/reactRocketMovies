import { Container, Form, Background } from './styles';

export function SignIn() {
  return(
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <span>Faça seu login</span>
      </Form>
      <Background />
    </Container>
  )
}