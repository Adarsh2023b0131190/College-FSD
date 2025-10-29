import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div id="adi">
        <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" alt="" height={100} width={100} />
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
    </div>
  )
}

export default Card