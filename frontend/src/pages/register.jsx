import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import "../styles/register.css"
import CustomFormField from "../components/custom_form_field";

const Register = () => {

    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("male")

    const handleRegister = (e) => {
        e.preventDefault()


        if (!fullname || !username || !email || !phonenumber || !password || !confirmpassword) {
            alert("Please fill in all the fields");
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address")
            return
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phonenumber)) {
            alert("Please enter a valid phone number");
            return
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.")
            return
        }
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return
        }
        console.log(fullname, username, email, phonenumber, password, confirmpassword, gender)
    }
    return (
        <form onSubmit={handleRegister}>
            <Navbar title={"Register"} />
            <div id="register-container">
                <h1 id="title"><span id="re">Re</span>gistration</h1>
                <div className="row-field">
                    <CustomFormField label="Full Name" placeholder="Enter your Full Name" type="text" cName="fullname" onChange={(e) => setFullname(e.target.value)} value={fullname} required />
                    <CustomFormField label="User Name" placeholder="Enter your User Name" type="text" cName="username" onChange={(e) => setUsername(e.target.value)} value={username} required />

                </div>
                <div className="row-field">
                    <CustomFormField label="Email" placeholder="Enter your email" type="email" cName="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <CustomFormField label="Phone Number" placeholder="Enter your Phone Number" type="tel" cName="phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber} required />
                </div>
                <div className="row-field">
                    <CustomFormField label="Passowrd" placeholder="Enter your Passowrd" type="password" cName="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                    <CustomFormField label="Confirm Password" placeholder="Confirm your password" type="password" cName="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} required />
                </div>
                <div className="gender-field">
                    <p>Gender</p>
                    <div id="gender">
                        <div className="g">
                            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                            <label for="male">Male</label>
                        </div>
                        <div className="g">
                            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                            <label for="female">Female</label>
                        </div>
                        <div className="g">
                            <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
                            <label for="other">Other</label>
                        </div>
                    </div>
                </div>
                <div id="reg-button">
                    <input id="login-button" type="submit" value={"Register"} />
                </div>

            </div>
        </form>
    );
}
export default Register;