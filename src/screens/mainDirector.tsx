import React, {useReducer} from 'react'
// import {main} from './mainDirector.styles'
import './../index.css'
import MainHeader from './../components/mainHeader'
import {buttomName} from './../constants/buttomName'

export type MainDirectorAction = {type: "keyStroke", payload: buttomName} | {type: "keyNulify"}

const reducer = (state: MainDirectorInitialState, action: MainDirectorAction) => {
  switch(action.type){
    case "keyStroke":
      return {...state, activeKey:{key: action.payload}}
    case "keyNulify":
      return {...state, activeKey: null}
    default: 
      return state;
  }
}

interface MainDirectorInitialState {
  activeKey: {key: buttomName} | null,
}

const mainDirectorInitialState: MainDirectorInitialState = {
  activeKey: null
}

const MainDirectorContext = React.createContext(mainDirectorInitialState);

function MainDirector(){
  const [state, dispatch] = useReducer(reducer, mainDirectorInitialState)
  return (
    //@ts-ignore
    <MainDirectorContext.Provider value={{state, dispatch}}>
      <div className="flex flex-row mx-2 px-1 bg-gray-100 min-h-screen">
        <MainHeader headerTitle="Issues & Solutions" /> 
      </div>
    </MainDirectorContext.Provider>
  )
}

export default MainDirector;