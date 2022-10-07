import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Footer from "./Footer";


export default function SeatsList() {

 


    return (

        <ContainerSeats>
            <h1>Selecione o(s) assento(s)</h1>
            <Footer/>
        </ContainerSeats>
        
    )
}

const ContainerSeats = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
h1 {
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    padding: 30px;
}
h2 {
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    padding: 10px;
}
`