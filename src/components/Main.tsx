import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { listitems } from '../sources/data'
import '../styles/Main.css'

const Main = () => {
  console.log(listitems[0].src)

  return (
    <div className='Main'>
      <DragDropContext>
        <ul>
          {listitems.map(({id, name, src}) => {
            return (
              <li key={id} >
                <img src={src} alt={name} /><span>{name}</span>
              </li>
            )
          })}
        </ul>
      </DragDropContext>
    </div>
  )
}

export default Main