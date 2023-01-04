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
import Footer from "../components/Footer";

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
            <a href="https://api.whatsapp.com/send/?phone=5511941621516&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0">
              <ButtonWhatsapp>
                <h6>Entrar em contato</h6>
                <img src="/whatsapp.svg" alt="Logotipo whatsapp" />
              </ButtonWhatsapp>
            </a>
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
          <a href="https://api.whatsapp.com/send/?phone=5511941621516&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0">
            <button>
              Saiba mais
              <img src="/skip.svg" alt="Seta" />
            </button>
          </a>
        </AboutUs>
        <Services />
        <Budget>
          <h1>
            <span>Solicite agora seu orçamento!</span>
            <br />
            Confira alguns dos nossos projetos
          </h1>
          <a href="https://api.whatsapp.com/send/?phone=5511941621516&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0">
            <ButtonWhatsapp>
              <h6>Entrar em contato</h6>
              <img src="/whatsapp.svg" alt="Logotipo whatsapp" />
            </ButtonWhatsapp>
          </a>
        </Budget>
        <Galery>
          <img src="/image1.png" />
          <img src="/image2.png" />
          <img src="/image3.png" />
          <img src="/image4.png" />
        </Galery>
        <Footer />
      </Container>
    </>
  );
}
