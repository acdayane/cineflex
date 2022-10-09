import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>

            <Routes>
                <Route path="/" element={<Main />}/>   
                <Route path="/sessoes/:idFilme" element={<SessionsPage/>}/> 
                <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<SeatsPage/>}/>
                <Route path="/sessoes/:idFilme/assentos/:idSessao/sucesso" element={<SuccessPage/>}/>
            </Routes>        
                                       
        </BrowserRouter>
        

    )
}
