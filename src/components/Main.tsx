import React from 'react'
import { listitems } from '../sources/data'
import '../styles/Main.css'
import Bunny from '../sources/images/bunny.png'
import Bee from '../sources/images/bee.png'
import Zebra from '../sources/images/zebra.png'
import Elephant from '../sources/images/elephant.png'
import Puppy from '../sources/images/puppy.png'
import Mole from '../sources/images/mole.png'
import Giraffe from '../sources/images/giraffe.png'
import Elf from '../sources/images/elf.png'
import Witch from '../sources/images/Little Witch.png'


const Main = () => {
  console.log(listitems[0].src)

  return (
    <div className='Main'>
      <ul>
        <li id={listitems[0].id}>
          <img src={Bunny} alt={listitems[0].name} /><span>{listitems[0].name}</span>
        </li>
        <li id={listitems[1].id}>
          <img src={Elf} alt={listitems[1].name} /><span>{listitems[1].name}</span>
        </li>
        <li id={listitems[2].id}>
          <img src={Puppy} alt={listitems[2].name} /><span>{listitems[2].name}</span>
        </li>
        <li id={listitems[3].id}>
          <img src={Elephant} alt={listitems[3].name} /><span>{listitems[3].name}</span>
        </li>
        <li id={listitems[4].id}>
          <img src={Witch} alt={listitems[4].name} /><span>{listitems[4].name}</span>
        </li>
        <li id={listitems[5].id}>
          <img src={Mole} alt={listitems[5].name} /><span>{listitems[5].name}</span>
        </li>
        <li id={listitems[6].id}>
          <img src={Zebra} alt={listitems[6].name} /><span>{listitems[6].name}</span>
        </li>
        <li id={listitems[7].id}>
          <img src={Giraffe} alt={listitems[7].name} /><span>{listitems[7].name}</span>
        </li>
        <li id={listitems[8].id}>
          <img src={Bee} alt={listitems[8].name} /><span>{listitems[8].name}</span>
        </li>
      </ul>
    </div>
  )
}

export default Main