import React from 'react'

const Filter = ({value,handler}) => {
    return (
        <p>filter shown with <input value={value} onChange={handler}/></p>
    )
}

export default Filter