import styled from "styled-components";

export default function Header() {
    return (

        <ContainerHeader>
            <h1>CINEFLEX</h1>
        </ContainerHeader>        
    )
}

const ContainerHeader = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    display:flex;
    justify-content: center;
    align-items: center;
h1 {
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
} 
`