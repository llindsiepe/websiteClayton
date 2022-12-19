import { Container, CardsQualities, Card } from "./styles";

export default function Qualities() {
  return (
    <Container>
      <h1>
        Três em <span>um</span>.
      </h1>

      <CardsQualities>
        <Card>
          <img src="/timer.svg" alt="Timer ícone" />
          <h2>Agilidade</h2>
          <h5>Conte com uma equipe de montadores para otimizar seu tempo.</h5>
        </Card>
        <Card>
          <img src="/star.svg" alt="Estrela ícone" />
          <h2>Eficiência</h2>
          <h5>Com diversos certificados na área somos referência.</h5>
        </Card>
        <Card>
          <img src="/box.svg" alt="Caixa ícone" />
          <h2>Organização</h2>
          <h5>Organização e limpeza vem sempre em primeiro lugar.</h5>
        </Card>
      </CardsQualities>
    </Container>
  );
}
