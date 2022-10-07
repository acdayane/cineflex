import styled from "styled-components";


export default function ContainerSeats({obj}) {

    
    return (

            <ContainerMain>
                {obj.seats.map((s) =>
                    <li key={s.id}>
                        {!s.isAvailable &&
                            <button style={{ backgroundColor: '#FBE192', cursor: 'initial'}}>{s.name}</button>
                        }
                        {s.isAvailable &&
                            <button>{s.name}</button>
                        }
                    </li>
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