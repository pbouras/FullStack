import { useState, useEffect  } from 'react'
import axios from 'axios'
import TheFilter from './TheFilter'
import FinalCountry from './FinalCountry'

const App = () => {
  const [newCountry, setNewCountry] = useState('')
  const [country, setCountry] = useState([])
  const [myQuery , setMyQuery] = useState([])
  //const [myIdx, setMyIdx] = useState(0)

  useEffect(() => {    
    axios.get('https://restcountries.com/v3.1/all').then(response => {        
      setCountry(response.data)   
    })  
  }, [])  
  //console.log(country)

  const handleCountryChange = (event) => {
    setNewCountry(event.target.value)
    setMyQuery( 
      country.filter(country => {
        if (country.name.common.toLowerCase().includes(newCountry.toLowerCase())) {
            return country;
        }
      })
    )
    //console.log(myQuery)
  }

  return (
    <div>
      <p>find countries <input value={newCountry} onChange={handleCountryChange} /></p>
      { myQuery.length === 1   ?
          <FinalCountry countries={myQuery} theIndex={0}/>
        :
        <>
          {
            myQuery.length > 10   ? 
              <p>Too many matches,specify the filter</p>
            : 
              <TheFilter countrie = {myQuery} />
          } 
        </>
      }

    </div>
  )
}

export default App;
