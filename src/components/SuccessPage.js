import styled from "styled-components"
import { useNavigate } from "react-router-dom";


export default function SuccessPage({ title, date, hour, nameBuyer, cpfBuyer }) {


    const navigate = useNavigate();

    function backHome() {
        navigate('/')
    }


    return (

        <ContainerMain>

            <h1>Pedido feito com sucesso!</h1>

            <ContainerData>

                <h2>Filme e sessão</h2>
                <p>{title}</p>
                <p>{date} - {hour}</p>

                <h2>Ingressos</h2>

                <h2>Comprador</h2>
                <p>{nameBuyer}</p>
                <p>{cpfBuyer}</p>

            </ContainerData>

            <button onClick={backHome}>Home</button>

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
    font-family: 'Roboto', sans-serif;  
h1 {    
    font-weight: 700;
    font-size: 24px;
    padding: 30px;
    color: #247A6B;
}
button {
    color: #FFFFFF;
    background-color: #E8833A;
    width: 225px;
    height: 43px;
    font-size: 18px;
    border: 1px solid #E8833A;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    margin: 30px;
    cursor: pointer;    
}
`
const ContainerData = styled.div`
    font-size: 22px;
    color: #293845;
h2 {
    font-weight: 700;    
    margin: 20px;
}
p {
    font-weight: 400;
    margin: 10px 20px;
}
`