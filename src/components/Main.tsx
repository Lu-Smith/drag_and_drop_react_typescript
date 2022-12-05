import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { listitems } from '../sources/data'
import '../styles/Main.css'

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging ? 'red' : 'rgb(245, 170, 8)',
  color: isDragging ? 'black' : 'white',

  ...draggableStyle
})


const Main = () => {
  const [characters, updateCharacters] = useState
  <{
    id: string;
    name: string;
    src: string;
    }[]>(listitems);



  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <div className='Main'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='characters'>
        {(provided) => (
          <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
            {characters.map(({id, name, src}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                   {(provided, snapshot) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
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