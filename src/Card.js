import React from 'react'

const Card = ({ id, username, name, email}) => {
  
  let url = `https://www.robohash.org/${id}?200x200`

  return (
    <div className='bg-light-green dib br3  pa3 ma2 grow bw2 shadow-5'>
      <img src={url} alt={name} />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
