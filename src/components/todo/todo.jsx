import React, { createElement, useEffect, useState } from 'react'
import Css from "./todo.module.css"
export default function todo() {
    const [input, setInput] = useState("");
    const [list, setList] = useState(localStorage.getItem("save") || []);
   
    useEffect(() => {
        localStorage.setItem("save", JSON.stringify(list));
    }, [list]);
    const handleAdd = () => {
        setList((prev) => [...prev, input]);
        setInput("");
    }
    const handleRemove = (item) => {
        setList(list.filter((list) => list !== item));
    }
    return (
        <>
            <div className={Css["main"]}>
                <div id='mainId' className={Css["mainPrt"]}>
                    <input type="text" value={input} placeholder='Enter Task' onChange={(e) => {
                        setInput(e.target.value); }} />

                    <button onClick={handleAdd}>Add</button>
                    <ul>
                     {list.map(()=>{
                        
                     })}

                    </ul>

                </div>
            </div>

        </>
    )
}
