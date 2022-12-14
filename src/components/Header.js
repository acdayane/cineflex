import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (

        <ContainerHeader>
            <h1 onClick={(() => navigate(`/`))}>CINEFLEX</h1>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);  
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
h1 {
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
    cursor: pointer;
} 
`