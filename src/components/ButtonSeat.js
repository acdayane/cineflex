import { useState } from "react";


export default function ButtonSeat({ name, id, seatId, setSeatId, isAvailable, array, setArray }) {


    const [isSelected, setIsSelected] = useState(false);


    function selectSeat(numberSeat, idSeat, isAvailable) {

        if (isAvailable === true) {
            console.log(isAvailable)
            if (array.includes(parseInt(numberSeat))) {
                console.log('tem')
            }

            if (seatId.includes(parseInt(idSeat))) {
                console.log('tem')
            }

            array.push(numberSeat);
            array.sort(compareNumbers);
            const numberArray = array.map(Number);
            const newArray = [...numberArray];
            setArray(newArray);
            console.log(newArray)

            function compareNumbers(a, b) {
                return a - b;
            }

            seatId.push(idSeat);
            seatId.sort(compareNumbers);
            const newSeatId = [...seatId]
            setSeatId(newSeatId)
            setIsSelected(!isSelected)
        }

        else {
            console.log("tem else")
            if (array.includes(numberSeat)) {
                let newArray = [...array]
                newArray = newArray.filter((number) => {
                    if (number != numberSeat) return number
                    return 0
                })

                newArray.splice(newArray.indexOf(numberSeat), 1);
                setArray(newArray)
            }
            if(seatId.includes(idSeat)) {
                const newSeatId = [...seatId]
                newSeatId.splice(newSeatId.indexOf(idSeat), 1)
                setSeatId(newSeatId)
            }
            setIsSelected(!isSelected)
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
                    <button style={{ backgroundColor: '#1AAE9E' }} onClick={() => selectSeat(name)}>
                        {name}
                    </button>
                ) : (
                    <button onClick={() => selectSeat(name, id, isAvailable)}>
                        {name}
                    </button>
                ))
            }
        </li>
    )
}
