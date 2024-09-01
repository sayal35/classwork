import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

const Home=()=> {
    const [count , setCount]= useState(0)

    const[animate, setAnimate] = useState(false)

    const handleIncrement=()=>{
        startAnimation()
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }
    const handleDecrement=()=>{
        startAnimation()
        setCount((prevCount)=>{
            return prevCount-1;
        })
    }

    const startAnimation=()=>{
        setAnimate(true)
    }
    const stopAnimation=()=>{
        setAnimate(false)
    }

    return(
        <>
        <Navbar title={"Home page"}/>
        <h1> Home page</h1>
        <button id="button1" onClick={handleIncrement}>+</button>
        <button id="button2" onClick={handleDecrement}>-</button>
        <p id = "center-text" className={animate ? "text-change":"" } onAnimationEnd={stopAnimation}>{count}</p>
        </> 
    );
}
export default Home;
