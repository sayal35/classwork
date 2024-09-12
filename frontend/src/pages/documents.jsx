import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Documents=()=> {
    const [count,setCount] = useState(0)
    const[isEven,setisEven]=useState(true)
    // two parameter:callbackfunction and depedencies
    useEffect(
        ()=>{
            if(count%2==0){
                setisEven(true)
            }else{
                setisEven(false)
            }
        },
        [count]
    )
    const handleIncrement=()=>{
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }
    return(
        <>
        <Navbar title={"Documents"}/>
        <h1> Documents</h1>
        <p>Count Value:
            <span style={{fontSize:'50px',color:'red'}}>{count}</span>
        </p>
        <button onClick={handleIncrement}>Increment</button>
        <p>Count Value Checker:
            <span style={{fontSize:'50px',color:'red'}}>{isEven ? "Even" : "Odd"}</span>
        </p>
        </>
    );
}
export default Documents;