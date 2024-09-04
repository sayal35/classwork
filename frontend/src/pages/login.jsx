import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/login.css"
import { Link } from "react-router-dom";
import CustomFormField from "../components/custom_form_field";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address")
            return
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.")
            return
        }
        console.log(email, password)
    }
    const handleOnEmailChange = (e) => {
        console.log("email", e.target.value)
        setEmail(e.target.value)
    }

    const handleOnPasswordChange = (e) => {
        console.log("password", e.target.value)
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Navbar title={"Login"} />
            <div id="container">
                <h2>Login</h2><br />
                <CustomFormField label="Email" type="email" placeholder="Enter your email" value={email} cName="email" onChange={handleOnEmailChange}/>
                <CustomFormField label="Password"type="password" placeholder="Enter your password" name="password" onChange={handleOnPasswordChange} value={password} cName="password"/>
                <div>
                    <input id ='login-button' type="submit" value="login"/>
                    <p style={{textAlign:'center',color:'teal', fontsize:'14px',marginTop:'15px'}}>Already have an account?<Link to='/register'>Signup</Link></p>
                </div>
            </div>
        </form>
    );
}
export default Login;