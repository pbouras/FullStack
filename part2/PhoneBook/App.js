import { useState, useEffect  } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import SinglePerson from './SinglePerson'
import theService from './servises/persons'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSrc, setNewSrc] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [myMessage, setMyMessage] = useState('')

  useEffect(() => {    
    //console.log('effect')    
   theService
   .getAll()      //GET Method
   .then(response => {        
      console.log('promise fulfilled')        
      setPersons(response.data) 
      console.log(response)     
    })
    .catch((error) => setMyMessage(error.response.data.error));  
  }, [])  
  //console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSrcChange = (event) => {
    setNewSrc(event.target.value)
    setShowAll(false)
  }

  const deleteHandler = (id,name) => {
    if (window.confirm(`Do you really want to remove '${name}'?`)) {
      console.log(name)
      theService
      .remove(id)   //DELETE Method
      .then(response => {
        console.log(response)
        const posts = persons.filter(person => person.id !== id);
        setMyMessage(`Deleted '${name}'`)
        setTimeout(() => {   
          setMyMessage(null)        
        }, 5000)          
        setPersons(posts)
      })
      .catch((error) => setMyMessage(error.response.data.error));
    }
  }

  const saver = (event) => {

    event.preventDefault()
    let myvar = false;
    let myinx = 0;
    let vary;
    {persons.map((person) =>
        {if (JSON.stringify(person.name) === JSON.stringify(newName)) {
          myvar = true
          myinx = person.id
          vary = person.name
        }}
        //myvar = (JSON.stringify(person.name) === JSON.stringify(newName))
    )}
    if (myvar) {
      if (window.confirm(`${vary} is already added to phonebook, replace the old number with the new?`)) {
        
        const nameObject = {
          name: newName,
          number: newPhone
        }
        theService
        .update(myinx,nameObject)   //PUT Method
        .then(response => {
          const updatedPersons = persons.map((person) =>
          person.id !== response.data.id ? person : response.data
          )
          setPersons(updatedPersons) 
          //setPersons(response.data)          
          //setPersons(persons.concat(response.nameObject))  
          
        })
        .catch((error) => setMyMessage(error.response.data.error));
        console.log(persons) 
      }

    }else{
      const nameObject = {
        name: newName,
        number: newPhone
      }
      theService
      .create(nameObject)   //POST Method
      .then(response => {
        console.log(response)        
        //console.log('promise fulfilled')
        setMyMessage(`Added '${nameObject.name}'`)
        setTimeout(() => {   
          setMyMessage(null)        
        }, 5000)        
      })
      .catch((error) => setMyMessage(error.response.data.error)); 
      setPersons(persons.concat(nameObject))  
      console.log(nameObject)
    }
    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={myMessage}/>
      <Filter value={newSrc} handler = {handleSrcChange}/>
      <h2>add a new</h2>
      <PersonForm valueName={newName} handlerName = {handleNameChange} valuePhone = {newPhone} handlerPhone={handleNumberChange} saver = {saver}/>
      <h2>Numbers</h2>
      {
        showAll ?
          <Persons data={persons} theDelete={deleteHandler}/>
        :  
          <SinglePerson data={persons} mysrc = {newSrc} theDelete={deleteHandler}/>
      }
    </div>
  )
}

export default App