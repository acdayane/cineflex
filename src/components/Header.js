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
} 
`