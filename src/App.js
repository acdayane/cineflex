import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    return (

        <Container>
            <GlobalStyle/>
            <Header/>
            <Main/>        
        </Container>

    )
}

const Container = styled.div`
background-color: #FFFFFF;
width: 100%;
`