import { useState } from "react"
import {v4 as uuid} from "uuid"
import "./inp.css"
export default function NoteInp({handlesubmit}) {
    const [title,setTitle]=useState("")
    const [des, setDes] = useState("")
    const date = new Date()
    var hour = date.getUTCHours() + 2;
    var min = date.getUTCMinutes() + 30;
    if (min === 60) {
        min = 0;
    } 
    var sec=date.getUTCSeconds()
    return <div >
        <div>
        <input className="inp" type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
        <input className="inp1" type="text" placeholder="Description" onChange={(e) => { setDes(e.target.value) }} />
       </div>
            <div>
        <button className="but" onClick={() => {
            const payload = {
                title: title,
                description: des,
                id: uuid(),
                hours: hour,
                minute: min,
                second:sec
            }
            handlesubmit(payload)
            setTitle("")
            setDes("")
            }}>Save</button>
            </div>
    </div>
}