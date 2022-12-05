import React, { useState } from 'react'
import '../styles/Main.css'
import { listitems } from '../sources/data'


const Main = () => {
  const [todo, setTodo] = useState(listitems)
  return (
    <div className='Main'>
      Main
    </div>
  )
}

export default Main