import styled from "styled-components";


export default function FooterSeats({ poster, title, weekday, hour }) {


    return (

        <ContainerFooter>

            <img src={poster} alt={title} />

            <TextFooter>
                <h2>{title}</h2>
                <h2>{weekday} - {hour}h</h2>
            </TextFooter>

        </ContainerFooter>

    )
}

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
`
const TextFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
h2  {
    color: #293845;;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;   
}
`