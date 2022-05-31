import {useEffect, useState,useRef} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {Sub} from './types'

const INITIAL_STATE=[
  {
  nick:'dapelu',
  subMonths:3,
  avatar:'https://i.pravatar.cc/150?u=dapelu',
  description: 'Dapelu hace de moderador a veces'
  },
  {
    nick:'sergio_serrano',
    subMonths:7,
    avatar:'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]



interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs,setSubs]=useState<AppState["subs"]>([])
  const [newSubsNumber,setNewSubsNumber]=useState<AppState["newSubsNumber"]>(0)
  const divRef=useRef<HTMLDivElement>(null)
useEffect(()=>{
  setSubs(INITIAL_STATE)
},[])

const handleNewSub=(newSub:Sub):void=>{
  setSubs(subs=>[... subs,newSub])
}
  return (
    <div className="App"ref={divRef}>
     <h1>midu subs</h1>
      <List subs={subs}></List>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
