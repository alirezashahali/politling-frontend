import React from 'react'
import './../index.css'
import {buttomName as mainNames} from './../constants/buttomName'
// import { FaPen, FaBell, FaStar, FaPenSquare, FaEye } from 'react-icons/fa';
import {IconContext} from 'react-icons'

interface Props {
  buttomName: mainNames,
}

const IconButton : React.FC<Props> = (buttomName) => {
  return (
    <IconContext.Provider value={{
      size : "1.5rem",
      color: ""
    }}>
      <div>
        {/* <FaPen />
        <FaPenSquare />
        <FaBell  /> 
        <FaStar />
        <FaEye /> */}
        {/* <svg fill="black">
          <use href={require('./../assets/pen.svg')} />
        </svg> */}
      </div>
    </IconContext.Provider>
  )
}

export default IconButton