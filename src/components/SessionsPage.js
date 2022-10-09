import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SessionsPage() {

    const { idFilme } = useParams();

    const [sessions, setSessions] = useState(null);

    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies/" + idFilme + "/showtimes"

    useEffect(() => {
        const promise = axios.get(URL);

        promise.then(res => {
            setSessions(res.data);
        });

        promise.catch(err => {
            alert(err.response.data);
        });
    }, []);


    if (sessions === null) {
        return (
            <Loading>
                <img src="http://2.bp.blogspot.com/-2RqriVTKhi4/UNnFBTiuzdI/AAAAAAAALK4/3-UccrBLu7w/s1600/Gif+Carregando+-+PremiumDesign3D+(9).gif" alt={'Carregando...'} />
            </Loading>
        )
    }


    return (
        <ContainerSessions>
            <h1>Selecione o horário</h1>
            {sessions.days.map((s) =>
                <li key={s.id}>
                    <h2>{s.weekday} - {s.date}</h2>
                    {s.showtimes.map((st) =>
                        <Link to={`/sessoes/${idFilme}/assentos/${st.id}`}>
                            <button key={st.id}>{st.name}</button>
                        </Link>)}
                </li>
            )}

            <ContainerFooter>
                <img src={sessions.posterURL} alt={sessions.title} />
                <h2>{sessions.title}</h2>
            </ContainerFooter>

        </ContainerSessions>

    )
}


const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 65px;
`

const ContainerSessions = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    margin-top: 65px; 
    margin-bottom: 150px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
h1 {
    text-align: center;
    color: #293845;  
    font-size: 24px;
    padding: 30px;
}
h2 {
    color: #293845;;
    font-size: 19px;
    margin-left: 20px;
}
button {
    color: #FFFFFF;
    background-color: #E8833A;
    width: 82px;
    height: 43px;
    font-size: 17px;
    margin: 15px 0px 25px 20px;
    border: 1px solid #E8833A;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    cursor: pointer;
}
li {
    list-style-type: none;
}
`
const ContainerFooter = styled.div`
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    width: 100%;
    height: 117px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
img {
    border-radius: 2px;
    border: 3px solid #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    height: 75px;
    width: 52px;
    margin-left: 18px;
}
h2 {
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
}
`
