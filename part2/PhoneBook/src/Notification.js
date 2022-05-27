import React from 'react'
import './myCSS.css'

const Notification = ({message}) => {
    if (message === null) {
        return null
      }
    
    if (message.includes("failed")) {
        return <div className="notification">{message}</div>;
    }
    return (
        <div className='notification'>
          {message}
        </div>
    )
}

export default Notification