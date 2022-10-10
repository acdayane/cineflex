import { useState } from "react";


export default function ButtonSeat({ name, isAvailable, array, setArray }) {


    const [isSelected, setIsSelected] = useState(false);


    function selectSeat(numberSeat) {

        if (isSelected === false) {
            
            array.push(numberSeat);
            array.sort(compareNumbers);
            const numberArray = array.map(Number);
            const newArray = [...numberArray];
            setArray(newArray);

            function compareNumbers(a, b) {
                return a - b;
            }
        }

        else {
            if (array.includes(numberSeat)) {
                array.splice(array.indexOf(numberSeat), 1);
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
                    <button style={{ backgroundColor: '#1AAE9E' }} onClick={() => selectSeat(name)}>
                        {name}
                    </button>
                ) : (
                    <button onClick={() => selectSeat(name)}>
                        {name}
                    </button>
                ))
            }
        </li>
    )
}
