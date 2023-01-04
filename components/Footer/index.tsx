import { Container, About, Information, FollowUs, Social, Rating } from "./styles";

export default function Footer() {
    return (
    <Container>
        <About>
            <img src="/LogotipoBranco.png" />
            <h6>© 2022 CLAYTON. Todos os direitos reservados</h6>
        </About>
        <Information>
            <h2>Informações & contato</h2>
            <h6>Horário de atendimento <br />
                <b>Segunda à sexta | 9h às 18h</b>
            </h6>
            <h6>Formas de pagamento <br />
                <b>Crédito, débito e Pix</b>
            </h6>
            <h6>Áreas de atendimento <br />
                <b>Atibaia & região</b>
            </h6>
        </Information>
        <FollowUs>
            <h2>Siga-nos nas redes</h2>
            <a href="https://www.facebook.com/ctcmontadordemoveis/?_rdc=2&_rdr">
                <Social>
                    <img src='/Facebook.svg' />
                    <h6>Facebook</h6>
                </Social>
            </a>

            <a href="https://www.instagram.com/claytonmontadordemoveis/">
                <Social>
                    <img src='/Instagram.svg' />
                    <h6>Instagram</h6>
                </Social>
            </a>

            <a href="https://www.tiktok.com/@claytoncavalcant1">
                <Social>
                    <img src='/Tiktok.svg' />
                    <h6>Tiktok</h6>
                </Social>
            </a>

            <Rating>
                <h4>Confira nossas avaliações</h4>
                <a href="https://www.google.com/search?q=Montador+de+M%C3%B3veis+Atibaia+-+Clayton&oq=Montador+de+M%C3%B3veis+Atibaia+-+Clayton&aqs=chrome..69i57j69i60j69i61.466j0j9&sourceid=chrome&ie=UTF-8">
                    <img src="/Google.png" />
                </a>
            </Rating>
        </FollowUs>
    </Container>
    )
}