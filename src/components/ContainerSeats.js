import styled from "styled-components";
import { useState } from "react";


function ButtonSeat({ name, isAvailable}) {


    //const arrSeatSelected = [];

   const [isSelected, setIsSelected] = useState(false)


    
    function selectSeat(numberSeat) {     
        
        

       //if (isSelected === false) {
           // arrSeatSelected.push(numberSeat)
        //}

        // else {
        //     if (arrSeatSelected.includes(numberSeat)) {
        //         arrSeatSelected.splice(arrSeatSelected.indexOf(numberSeat), 1);
        //     }
        // }
        setIsSelected(!isSelected)

        //console.log(numberSeat)
        //console.log(isSelected)
        //console.log(arrSeatSelected)
    }
 

    return (
        <li>
            {!isAvailable &&
                <button style={{ backgroundColor: '#FBE192'}} onClick={() => alert('Esse assento não está disponível.')}>
                    {name}
                </button>
            }
            {isAvailable &&
                (isSelected === true ? (
                <button style={{ backgroundColor: '#1AAE9E'}} onClick={() => (selectSeat(name))}>
                    {name}
                </button>
                ):(
                <button onClick={() => selectSeat(name)}>
                    {name}
                </button>
                ))                
            }
        </li>
    )

}


export default function ContainerSeats({ key, obj, isSelected }) {


    return (

        <ContainerMain>
            {obj.seats.map((s) =>
                <ButtonSeat
                    key={s.id}
                    name={s.name}
                    isAvailable={s.isAvailable}                    
                />
            )}
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-wrap: wrap;
    width: 90%;
button {
    color: #000000;
    background-color: #C3CFD9;
    width: 25px;
    height: 25px;
    font-size: 11px;
    margin: 3px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    cursor: pointer;
}
li {
    list-style-type: none;
}
`