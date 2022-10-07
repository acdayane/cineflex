import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import ContainerSeats from "./ContainerSeats";


export default function SeatsList() {

    const { idSessao } = useParams();

    const [seat, setSeat] = useState(null);


    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/" + idSessao + "/seats"
        const promise = axios.get(URL)

        promise.then(res => {
            setSeat(res.data);
            console.log(res.data)
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


    return (
        <ContainerMain>

            <h1>Selecione o(s) assento(s)</h1>

            <ContainerSeats obj={seat}/>

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

            <BoxInput>
                <label for="name">Nome do comprador:</label>
                <input type="text" id="name" placeholder="Digite seu nome" />
                <label for="document">CPF do comprador:</label>
                <input type="text" id="document" placeholder="Digite seu CPF" />           
            </BoxInput> 

            <ButtonReserve>
                <button>Reservar assento(s)</button>
            </ButtonReserve>

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
    width: 25px;
    height: 25px;
    font-size: 11px;
    margin: 5px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    cursor: initial;
}
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

const BoxButton = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    margin: 15px;
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