import {
  Container,
  Header,
  Banner,
  TextBanner,
  ButtonWhatsapp,
  AboutUs,
  Budget,
  Galery,
} from "../styles/Home";
import Qualities from "../components/Qualities";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Container>
        <Header>
          <img src="/logotipo.png" alt="Logotipo" />
        </Header>
        <Banner>
          <TextBanner>
            <h1>
              Está buscando por <span>Montagem e Desmontagem de móveis</span>?
            </h1>
            <h5>Busque por uma equipe de montadores especialista.</h5>
            <ButtonWhatsapp>
              <h6>Entrar em contato</h6>
              <img src="/whatsapp.svg" alt="Logotipo whatsapp" />
            </ButtonWhatsapp>
          </TextBanner>
          <img src="/banner.svg" alt="Banner" />
        </Banner>
        <Qualities />
        <AboutUs>
          <h1>
            Agilidade, comprometimento & <span>eficiência.</span>
          </h1>
          <h5>
            Com mais de 10 anos de experiência, nossa equipe conta com
            profissionais especializados, buscando sempre o melhor atendimento,
            baseados nos princípios de agilidade, confiança e eficiência. Nossa
            equipe ainda conta com certificações no que diz à qualidade em
            atendimento e serviços prestados.
          </h5>
          <button>
            Saiba mais
            <img src="/skip.svg" alt="Seta" />
          </button>
        </AboutUs>
        <Services />
        <Budget>
          <h1>
            <span>Solicite agora seu orçamento!</span>
            <br />
            Confira alguns dos nossos projetos
          </h1>
          <ButtonWhatsapp>
            <h6>Entrar em contato</h6>
            <img src="/whatsapp.svg" alt="Logotipo whatsapp" />
          </ButtonWhatsapp>
        </Budget>
        <Galery>
          <img src="/image1.png" />
          <img src="/image2.png" />
          <img src="/image3.png" />
          <img src="/image4.png" />
        </Galery>
      </Container>
    </>
  );
}
