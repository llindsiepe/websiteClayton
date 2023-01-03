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
            <Social>
                <img src='/Facebook.svg' />
                <h6>Facebook</h6>
            </Social>

            <Social>
                <img src='/Instagram.svg' />
                <h6>Instagram</h6>
            </Social>

            <Social>
                <img src='/Tiktok.svg' />
                <h6>Tiktok</h6>
            </Social>

            <Rating>
                <h4>Confira nossas avaliações</h4>
                <img src="/Google.png" />
            </Rating>
        </FollowUs>
    </Container>
    )
}