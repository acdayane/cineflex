import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage";

const dataSuccessPage = {title: "a", date: "a", hour: "a", nameBuyer: "a", cpfBuyer: "a" }
const selected = []

export default function App() {

    const [data, setData] = useState(dataSuccessPage)
    const [array, setArray] = useState(selected)

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route path="/sessoes/:idFilme/assentos/:idSessao"
                    element={
                        <SeatsPage 
                            data={data}
                            setData={setData}
                            array={array}
                        />
                    }
                />
                <Route
                    path="/sessoes/:idFilme/assentos/:idSessao/sucesso"
                    element={
                        <SuccessPage            
                            data={data}
                            array={array}
                        />
                    }
                />
            </Routes>

        </BrowserRouter>


    )
}
