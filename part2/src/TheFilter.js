import {useState} from 'react'
import FinalCountry from './FinalCountry'

const TheFilter = ({countrie}) => {

    const [buttonClicked, setButtonClicked] = useState(true)
    const [myIndex,setMyIndex] = useState(0)

    return (
        buttonClicked ?
            countrie.map((country,index) => (
                <p key={country.name.common}>
                    {country.name.common}
                    <button onClick={() => {setButtonClicked(false);setMyIndex(index)}}>show</button>
                </p>
            ))
        : <FinalCountry countries={countrie} theIndex = {myIndex}/>
    )
}

export default TheFilter