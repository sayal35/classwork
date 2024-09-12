import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

const Downloads=()=> {
    const [countTimer,setcountTimer] = useState(0)
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    setcountTimer(
                        (prev)=>countTimer+1
                    )
                },
                1000
            )
        }
    )
    const titleRef = useRef()
    const changeTitleStyle = ()=>{
        titleRef.current.style="color:blue; font-size:40px;"
        titleRef.current.style.fontStyle="italic"
    }
    const inputRef=useRef()

    const handleFocus=()=>{
        inputRef.current.focus()
        inputRef.current.style="background-color:red;"
    }
    const handleUnFocus=()=>{
        inputRef.current.blur()
        inputRef.current.style="background-color:blue;"
    }

    return(
        <>
        <Navbar title={"Downloads"}/>
        <h1 onClick={changeTitleStyle} ref={titleRef}> Downloads</h1>
        <p>Timer:  
            <span style={{fontSize:'20px',color:'red'}}>{countTimer}</span>
            
        </p>
        <input type="text" ref={inputRef}/>
        <br/><br/>
        <button onClick={handleFocus}>Focus</button>&nbsp; &nbsp;
        <button onClick={handleUnFocus}>UnFocus</button>

        </>
    );
}
export default Downloads;