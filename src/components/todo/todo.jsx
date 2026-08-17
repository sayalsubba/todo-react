import React, { useState } from 'react'
import Css from "./todo.module.css"
export default function todo() {
    const [input, setInput] = useState([]);
    return (
        <>
            <div className={Css["main"]}>
                <div className={Css["mainPrt"]}>
                    <input type="text"  placeholder='Enter Task' onChange={(e)=>{
                    setInput(e.target.value);
                    }} 
                    />
                    <button onClick={()=>{

                    }}>Add</button>
                </div>
            </div>

        </>
    )
}
