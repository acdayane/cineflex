import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage";

const dataSuccessPage = {title: "", date: "", hour: "", nameBuyer: "", cpfBuyer: "" }


export default function App() {

    const [data, setData] = useState(dataSuccessPage)
    const [array, setArray] = useState([])
    const [seatId, setSeatId] = useState([]);

    console.log(seatId)
    console.log(array)
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
                            setArray={setArray}
                            seatId={seatId}
                            setSeatId={setSeatId}
                        />
                    }
                />
                <Route
                    path="/sessoes/:idFilme/assentos/:idSessao/sucesso"
                    element={
                        <SuccessPage            
                            data={data}
                            array={array}
                            setArray={setArray}
                            seatId={seatId}
                            setSeatId={setSeatId}
                        />
                    }
                />
            </Routes>

        </BrowserRouter>


    )
}
