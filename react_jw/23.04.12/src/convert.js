import App from "./App";
import { useState } from "react";
function Convert() {
    const[index, setIndex]=useState(0);
    const Onselect = (e) =>{
        setIndex(e.target.value);
        
    }
    return (
        <>
            <h1>Select option</h1>
            <select value={index} onChange={Onselect}>
                <option value="id1">miles to kilometer</option>
                <option value="id2">kilometer to miles</option>
                <option value="id3">centimeter to meter</option>
            </select>
            {index == "id2" ? <App /> : null}
        </>
    )

}
export default Convert;