import React from 'react'

const SinglePerson = ({data,mysrc,theDelete}) => {
    console.log(data.name)
    return (
        data.filter(post => {
            if (mysrc === '') {
                return post;
            } else if (post.name.toLowerCase().includes(mysrc.toLowerCase())) {
                return post;
            }
            }).map((post) => (
                <p key={post.id}>{post.name} {post.number}
                    <button onClick={() => theDelete(post.name,post.id)}>delete</button>
                </p>
            ))
    )    
}

export default SinglePerson