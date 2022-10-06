import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Main() {
    

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(res => {
            setMovies(res.data);
			console.log(res.data);
		});

		promise.catch(err => {
			console.log(err.response);
		});
	}, []);


    return (
        <ContainerMain>
            <h1>Selecione o filme</h1>
            <ContainerMovies>                
                {movies.map((movie) =>
                    <li>
                        <button>
                            <img src={movie.posterURL} alt={movie.title} />
                        </button>
                    </li>
                )}               
            </ContainerMovies>
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
h1 {
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    padding: 30px;
}
`
const ContainerMovies = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;  
button {
    margin: 8px;
    padding: 8px;
    background-color: #FFFFFF;
     border: 1px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);      
}
img {
    height: 193px;
    width: 129px;
}
`