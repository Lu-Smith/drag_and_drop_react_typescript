import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { listitems } from '../sources/data'
import '../styles/Main.css'

const Main = () => {
  console.log(listitems[0].src)

  return (
    <div className='Main'>
      <DragDropContext>
        <Droppable droppableId='characters'>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {listitems.map(({id, name, src}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                   {(provided) => (
                      <li key={id} >
                        <img src={src} alt={name} /><span>{name}</span>
                      </li>
                   )}
                </Draggable>
              )
            })}
          </ul>
        )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Main