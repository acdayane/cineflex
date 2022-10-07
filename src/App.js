import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>

            <Routes>
                <Route path="/" element={<Main />}/>   
                <Route path="/sessoes/:idFilme" element={<SessionsPage/>}/> 
                <Route path="/assentos/:idSessao" element={<SeatsPage/>}/>
            </Routes>        
                                       
        </BrowserRouter>
        

    )
}
