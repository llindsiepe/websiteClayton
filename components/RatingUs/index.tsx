import { Container, Text, ButtonRating } from './styles'

export default function RatingUs() {
    return(
    <Container>
        <img src='/rating.svg' />
        <Text>
            <h2>Avalie-nos no google!</h2>
            <h5>Ganhe descontos nos serviços contratados </h5>
        </Text>
        <a href="https://api.whatsapp.com/send/?phone=5511941621516&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0">
            <ButtonRating>
                Avaliar agora
                <img src="/skip.svg" alt="Seta" />
            </ButtonRating>
        </a>
    </Container>
    )
}