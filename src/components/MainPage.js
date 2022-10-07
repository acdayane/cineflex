import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Main() {


    const [movies, setMovies] = useState(null);

    useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(res => {
            setMovies(res.data);
			//console.log(res.data);
		});

		promise.catch(err => {
			console.log(err.response.data);
		});
	}, []);


    if(movies === null) {
		return (
            <ContainerMain>
                <img src="http://2.bp.blogspot.com/-2RqriVTKhi4/UNnFBTiuzdI/AAAAAAAALK4/3-UccrBLu7w/s1600/Gif+Carregando+-+PremiumDesign3D+(9).gif" alt={'Carregando...'} />
            </ContainerMain>
        )
    }


    return (
        <ContainerMain>
            <h1>Selecione o filme</h1>
            <ContainerMovies>              
                {movies.map((movie) => 
                    <li key={movie.id}>
                        <Link to={`/sessoes/${movie.id}`}>
                        <button>
                            <img src={movie.posterURL} alt={movie.title}/>
                        </button>
                        </Link>
                    </li>
                )}               
            </ContainerMovies>
        </ContainerMain>
    )
}


const ContainerMain = styled.div`
    background-color: #FFFFFF;
    width: 100%;
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
    cursor: pointer;     
}
img {
    height: 193px;
    width: 129px;
}
`