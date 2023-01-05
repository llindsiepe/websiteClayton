import { Container, Text, ButtonRating } from './styles'

export default function RatingUs() {
    return(
    <Container>
        <img src='/rating.svg' />
        <Text>
            <h2>Avalie-nos no google!</h2>
            <h5>Ganhe descontos nos serviços contratados </h5>
        </Text>
        <a href="https://www.google.com/search?q=Montador+de+M%C3%B3veis+Atibaia+-+Clayton&oq=Montador+de+M%C3%B3veis+Atibaia+-+Clayton&aqs=chrome..69i57j69i60j69i61.466j0j9&sourceid=chrome&ie=UTF-8#lrd=0x94cec31683d0c287:0x802587c23b28891a,1,,,">
            <ButtonRating>
                Avaliar agora
                <img src="/skip.svg" alt="Seta" />
            </ButtonRating>
        </a>
    </Container>
    )
}