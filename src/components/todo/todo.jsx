import React, { useEffect, useState } from 'react'
import Css from "./todo.module.css"
export default function todo() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    return (

        <>
            <div className={Css["main"]}>
                <div className={Css["mainPrt"]}>
                    <input type="text" placeholder='Enter Task' onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    />
                    <h1>{input}</h1>
                    <button onClick={() => {
                        setList((prev) => [prev, input]
                            
                        );
                    }}>Add</button>
                    <h1>{list}</h1>
                </div>
            </div>

        </>
    )
}
