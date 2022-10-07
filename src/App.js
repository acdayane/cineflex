import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SectionsPage from "./components/SectionsPage";
import SeatsPage from "./components/SeatsPage";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>

            <Routes>
                <Route path="/" element={<MainPage />}/>   
                <Route path="/sessoes/:idFilme" element={<SectionsPage/>}/> 
                <Route path="/assentos/:idSessao" element={<SeatsPage/>}/>
            </Routes>        
                                       
        </BrowserRouter>
        

    )
}
