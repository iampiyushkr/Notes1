import {  useState } from "react"
import "./inp.css"
export default function PrintNote({ noteList, handledelete,handleedit }) {
    const [change,setChange]=useState("")
   
    return <div>
        {noteList.map(e => <div className="div" key={e.id}>
            <hr></hr>
            <table  className="table">
                <tr className="tr">
                    <td>Title</td>
                    <td>Description</td>
                    <td>Time</td>
                </tr>
                <tr className="tr1">
                    <td>{e.title}</td>
                    <td><input className="inp4" value={e.description} onChange={(e) => { setChange(e.target.value) }}/><button onClick={() => {
                        handleedit(change,e.id)
                    }} >save</button></td>
                    <td>{e.hours}:{e.minute}:{e.second}</td>
                </tr>
            </table>
            {/* <p>{e.title}</p>
            <p>{e.description}</p>
            <p>{e.hours}:{e.minute}:{e.second}</p> */}
            <button className="btn" onClick={() => {
                handledelete(e.id)
            }}>Delete</button>
        </div>)}
        </div>
}