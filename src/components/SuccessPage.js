import styled from "styled-components"
import { useNavigate } from "react-router-dom";


export default function SuccessPage({data, array, setArray, setSeatId}) {


    const navigate = useNavigate();

    function backHome() {
        array = [];
        const newArray = [...array]
        setArray(newArray)
        setSeatId(newArray);
        navigate('/');
    }


    return (

        <ContainerMain>

            <h1>Pedido feito com sucesso!</h1>

            <ContainerData>

                <h2>Filme e sessão</h2>
                <p>{data.title}</p>
                <p>{data.date} - {data.hour}</p>

                <h2>Ingressos</h2>
                {array.map((a, i) =>
                    <p key={i}>Assento {a}</p>
                )}

                <h2>Comprador</h2>
                <p>Nome: {data.nameBuyer.toUpperCase()}</p>
                <p>CPF: {data.cpfBuyer}</p>

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
    width:90%;
h2 {
    font-weight: 700;    
    margin: 20px;
}
p {
    font-weight: 400;
    margin: 5px 20px;
}
`