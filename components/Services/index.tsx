import { Container, CardsServices, Card } from "./styles";

export default function Services() {
  return (
    <Container>
      <h1>Conheça nossos serviços prestados</h1>
      <h4>Evite dores de cabeça, contrate quem entende do assunto.</h4>
      <CardsServices>
        <Card>
          <img src="/imagecard.png" alt="Sala de jantar montada" />
          <h3>Consertos & Manutenções</h3>
        </Card>
        <Card>
          <img src="/imagecardI.png" alt="Sala de jantar montada" />
          <h3>Regulagens & Instalações</h3>
        </Card>
        <Card>
          <img src="/imagecardII.png" alt="Sala de jantar montada" />
          <h3>Montagem & Desmontagem em geral</h3>
        </Card>
      </CardsServices>
    </Container>
  );
}
