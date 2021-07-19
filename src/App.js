//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NoteInp from "./component/NotesInp.jsx"
import PrintNote from "./component/printNote.jsx"

function App() {
  const [note, setNote] = useState([])
  const [load,setLoad]=useState(false)
  useEffect(() => {
    getNote();
  }, []);
    
  const getNote = () => {
    axios.get("http://localhost:3001/notes").then(({ data }) => {
      setNote(data)
    })
  }

  const handlesubmit = (item) => {
    axios.post("http://localhost:3001/notes", item).then(() => {
      getNote()
    })
  }

  const handledelete = (id) => {
    const new1 = note.filter(e => (e.id !== id))
    setNote(new1)
  }
  const handlesort = () => {
    setLoad(true)
        
    }
  

  const handleedit = (change, id) => {
    const new3 = note.map(e => (e.id === id ? { ...e, description: change } : e))
    setNote(new3)
    }
  return (
    <div className="App">
      <div className="nav">Notes</div>
      <NoteInp handlesubmit={handlesubmit} />
      <button className="sort" onClick={() => {
        handlesort()
      }}>Sort</button>
      <PrintNote handleedit={handleedit} handledelete={handledelete} noteList={ load?note.sort((a,b)=>{return Number(b.second)-Number(a.second)}):note}/>
    </div>
  );
}

export default App;
