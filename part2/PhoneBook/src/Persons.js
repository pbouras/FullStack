import React from 'react'

const Persons = ({data,theDelete}) => {

    return (
            data.map(post => (
                <p key={post.id}>{post.name} {post.number} 
                    <button onClick={() => theDelete(post.id,post.name)} >delete</button>
                </p>
            )
        )
    ) 
}

export default Persons