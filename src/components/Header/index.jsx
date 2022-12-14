import { Container, Content, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Content>
        <h1>RocketMovies</h1>

        <input type="text" placeholder="Pesquisar pelo título"/>

        <Profile>
          <div>
            <strong>Guilherme Fernandes</strong>
            <Logout>Sair</Logout>
          </div>
  
          <img src="https://github.com/guilheermeff.png" alt="Imagem do usuário" />
        </Profile>
      </Content>
    </Container>
  )
}