import React from 'react'

const PersonForm = ({valueName,handlerName,valuePhone,handlerPhone,saver}) => {
    return (
        <form>
            <div>
                name: <input value={valueName} onChange={handlerName}/>
            <div>
                number: <input value={valuePhone} onChange={handlerPhone}/>
            </div>
            </div>
            <div>
            <button type="submit" onClick={saver}>add</button>
            </div>
        </form>
    )
}

export default PersonForm