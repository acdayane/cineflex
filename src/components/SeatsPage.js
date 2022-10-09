import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Footer from "./FooterSeats";
import ContainerSeats from "./ContainerSeats";


export default function SeatsList() {

    const ids = [50]
    const { idSessao } = useParams();
    const navigate = useNavigate();

    const [seat, setSeat] = useState(null);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');


    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/" + idSessao + "/seats"
        const promise = axios.get(URL)

        promise.then(res => {
            setSeat(res.data);
            //console.log(res.data)
        });

        promise.catch(err => {
            alert(err.response.data);
        });
    }, []);


    if (seat === null) {
        return (
            <ContainerMain>
                <img src="http://2.bp.blogspot.com/-2RqriVTKhi4/UNnFBTiuzdI/AAAAAAAALK4/3-UccrBLu7w/s1600/Gif+Carregando+-+PremiumDesign3D+(9).gif" alt={'Carregando...'} />
            </ContainerMain>
        )
    }


    function reserveSeats(e) {

        e.preventDefault();

        const URL = ('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many')
        const body = { ids, name, cpf }

        const promise = axios.post(URL, body)

        promise.then(() => {
            navigate(`/sessoes/${seat.movie.id}/assentos/${idSessao}/sucesso`);
        })

        promise.catch((err) => {
            alert(err.response.data);
        })

    }


    return (
        <ContainerMain>

            <h1>Selecione o(s) assento(s)</h1>

            <ContainerSeats obj={seat} />

            <ContainerButton>
                <BoxButton>
                    <button style={{ backgroundColor: '#1AAE9E' }}></button>
                    <p>Selecionado</p>
                </BoxButton>
                <BoxButton>
                    <button style={{ backgroundColor: '#C3CFD9' }}></button>
                    <p>Disponível</p>
                </BoxButton>
                <BoxButton>
                    <button style={{ backgroundColor: '#FBE192' }}></button>
                    <p>Indisponível</p>
                </BoxButton>
            </ContainerButton>

            <form onSubmit={reserveSeats}>
                <BoxInput>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Digite seu nome"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        placeholder="Digite seu CPF"
                        onChange={e => setCPF(e.target.value)}
                        required
                    />
                </BoxInput>

                <ButtonReserve>
                    <button type="submit">Reservar assento(s)</button>
                </ButtonReserve>
            </form>

            <Footer poster={seat.movie.posterURL} title={seat.movie.title}
                weekday={seat.day.weekday} hour={seat.name}
            />

        </ContainerMain>

    )
}


const ContainerMain = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    margin-bottom: 150px;
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
h1 {    
    font-weight: 400;
    font-size: 24px;
    padding: 30px;
}
`

const ContainerButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
button {
    width: 26px;
    height: 26px;
    font-size: 11px;
    margin: 5px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    cursor: initial;
}
`

const BoxButton = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    margin: 15px;
`

const BoxInput = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
input {
    height: 45px;
    width: 225px;
}
`

const ButtonReserve = styled.div`
button {
    color: #FFFFFF;
    background-color: #E8833A;
    width: 225px;
    height: 43px;
    font-size: 18px;
    border: 1px solid #E8833A;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    cursor: pointer;
    margin: 15px;
}
`