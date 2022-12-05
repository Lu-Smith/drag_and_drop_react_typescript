import React from 'react'
import { listitems } from '../sources/data'
import '../styles/Main.css'

const Main = () => {
  console.log(listitems[0].src)

  return (
    <div className='Main'>
      <ul>
        {listitems.map(({id, name, src}) => {
          return (
            <li key={id} >
              <img src={src} alt={name} /><span>{name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main