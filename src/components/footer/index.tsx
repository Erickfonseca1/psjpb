import * as S from './styles.ts'

const Footer = () => {
    return (
        <div>
            <S.Wrapper>
                <S.Column>
                    <div>
                        <h3>Pascom - PSJ</h3>
                        <p>2023</p>
                    </div>
                </S.Column>

                <S.Column>
                    <div>
                        <h3>Endereço</h3>
                        <a
                            href="https://www.google.com.br/maps/place/Par%C3%B3quia+S%C3%A3o+Jos%C3%A9/data=!4m7!3m6!1s0x7acc279f658988b:0x4318ac6a2048dded!8m2!3d-7.1688262!4d-34.8570868!16s%2Fg%2F11b7kjygbt!19sChIJi5hY9nnCrAcR7d1IIGqsGEM?authuser=0&hl=pt-BR&rclk=1"
                            style={{color: 'white'}}
                        >
                            Rua Rosa de Paula Barbosa, 460 - José Américo, João Pessoa - PB
                        </a>
                    </div>
                </S.Column>

                <S.Column>
                    <div>
                        <h3>Contatos</h3>
                        <>Fone: <b>83 3231-8195</b></> <br/>
                        <>Email: <b>secretaria@psjpb.org</b></>
                    </div>
                </S.Column>

                <S.Column>
                    <div>
                        <h3>Redes Sociais</h3>
                        <a href="http://instagram.com/psjpb" style={{color: 'white'}}>Instagram</a><br/>
                        <a href="http://youtube.com/psjpb" style={{color: 'white'}}>Youtube</a><br/>
                        <a href="http://facebook.com/ParoquiaSaoJosePB" style={{color: 'white'}}>Facebook</a><br/>
                        <a href="http://threads.net/@psjpb" style={{color: 'white'}}>Facebook</a><br/>
                    </div>
                </S.Column>
            </S.Wrapper>
        </div>
    )
}

export default Footer