import { useState } from "react";


export default function ButtonSeat({ name, id, seatId, setSeatId, isAvailable, array, setArray }) {


    const [isSelected, setIsSelected] = useState(false);


    function selectSeat(numberSeat, idSeat, isSelected) {

        if (isSelected === false) {
  
            array.push(numberSeat);
            array.sort(compareNumbers);
            const numberArray = array.map(Number);
            const newArray = [...numberArray];
            setArray(newArray);

            seatId.push(idSeat);
            seatId.sort(compareNumbers);
            const newSeatId = [...seatId]
            setSeatId(newSeatId)
            
            function compareNumbers(a, b) {
                return a - b;
            }
        }

        else {
            
            if (array.includes(parseInt(numberSeat))) {
                console.log('includes array')
                const newArray = [...array]
                newArray.splice(newArray.indexOf(parseInt(numberSeat)), 1);
                setArray(newArray)
            }
            if(seatId.includes(idSeat)) {
                console.log('includes seatId') //confirma
                const newSeatId = [...seatId]
                newSeatId.splice(newSeatId.indexOf(idSeat), 1)
                setSeatId(newSeatId)
            }
        }
        setIsSelected(!isSelected);
    }


    return (
        <li>
            {!isAvailable &&
                <button style={{ backgroundColor: '#FBE192' }} onClick={() => alert('Esse assento não está disponível.')}>
                    {name}
                </button>
            }
            {isAvailable &&
                (isSelected === true ? (
                    <button style={{ backgroundColor: '#1AAE9E' }} onClick={() => selectSeat(name, id, isSelected)}>
                        {name}
                    </button>
                ) : (
                    <button onClick={() => selectSeat(name, id, isSelected)}>
                        {name}
                    </button>
                ))
            }
        </li>
    )
}
