import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/login.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.");
            return;
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
                <div className="input-group">
                    <label for="email"> Email</label>
                    <input type="email" placeholder="Enter your email" name="email" onChange={handleOnEmailChange} value={email} required></input>
                </div>
                <div className="input-group">
                    <label for="password"> Password</label>
                    <input type="password" placeholder="Enter your password" name="password" onChange={handleOnPasswordChange} value={password} required></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    );
}
export default Login;