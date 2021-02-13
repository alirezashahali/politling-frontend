import React from 'react'
import './../index.css'
import {buttomName} from './../constants/buttomName'
import IconButton from './iconButton'

interface Props {
  headerTitle: string
}

const MainHeader: React.FC<Props> = ({headerTitle}) => {
  return (
    <div className="flex flex-row justify-evenly flex-3 border border-indigo-900 p-1 h-10">
      <div className="text-center text-lg font-sans text-gray-900 font-black">
        {headerTitle}
      </div>
      <div className= "flex flex-row">
        <IconButton buttomName={buttomName.pen}/>
      </div>
    </div>
  )
}

export default MainHeader
