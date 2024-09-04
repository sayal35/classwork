import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import "../styles/register.css"
import CustomFormField from "../components/custom_form_field";

const Register = () => {
    
    const[fullname,setFullname]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phonenumber,setPhoneNumber]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const[gender,setGender]=useState("male")
    
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log("fullname=",fullname,username,email,phonenumber,password,confirmpassword)
    }
    
    // const [gender, setGender] = useState("")
    // const handleGenderChange = (e) => {
    //     setGender(e.target.value);
    //   };
    return (
        <form onSubmit={handleRegister}>
            <Navbar title={"Register"} />
            <div id="register-container">
                <h1 id="title"><span id="re">Re</span>gistration</h1>
                <div className="row-field">
                <CustomFormField label="Full Name" placeholder="Enter your Full Name" type="text" cName="fullname" onChange={(e)=>setFullname(e.target.value)} value={fullname}/>
                <CustomFormField label="User Name" placeholder="Enter your User Name" type="text" cName="username"onChange={(e)=>setUsername(e.target.value)} value={username} />

                </div>
                <div className="row-field">
                <CustomFormField label="Email" placeholder="Enter your email" type="email" cName="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <CustomFormField label="Phone Number" placeholder="Enter your Phone Number" type="tel" cName="phonenumber" onChange={(e)=>setPhoneNumber(e.target.value)} value={phonenumber}/>
                </div>
                <div className="row-field">
                <CustomFormField label="Passowrd" placeholder="Enter your Passowrd" type="password" cName="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <CustomFormField label="Confirm Password" placeholder="Confirm your password" type="password" cName="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmpassword}/>
                </div>
                <div className="gender-field">
                    <p>Gender</p>
                    <div id="gender">
                        <div className="g">
                        <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)}/>
                        <label for="male">Male</label>
                        </div>
                        <div className="g">
                        <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}/>
                        <label for="female">Female</label>
                        </div>
                        <div className="g">
                        <input type="radio" name="gender" value="other" onChange={(e)=>setGender(e.target.value)}/>
                        <label for="other">Other</label>
                        </div>
                    </div>
                </div>
                <div id="reg-button">
                    <input id="login-button" type="submit" value={"Register"}/>
                </div>
                {/* <div className="register-group">
                    <div>
                    <label for="fullname"> Full Name</label>
                    <input type="text" placeholder="Enter your name" name="fullname" required></input>
                    </div>
                    <div>
                    <label for="username"> Username</label>
                    <input type="text" placeholder="Enter your username" name="username" required></input>
                    </div>
                </div>
                <div className="register-group">
                    <div>
                    <label for="email"> Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required></input>
                    </div>
                    <div>
                    <label for="phonenumber">Phone Number</label>
                    <input type="number" placeholder="Enter your number" name="phonenumber" required></input>
                    </div>
                </div>
                <div className="register-group">
                    <div>
                    <label for="password"> Password</label>
                    <input type="password" placeholder="Enter your password" name="password" required></input>
                    </div>
                    <div>
                    <label for="password">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" name="password" required></input>
                    </div>
                </div>
                <div>
                    <h2>Select Your Gender</h2>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={handleGenderChange}
                           />
                            Male
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={handleGenderChange}
                            />
                            Female
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Others"
                                checked={gender === 'Others'}
                                onChange={handleGenderChange}
                            />
                            Prefer not to say
                        </label>
                    </div>
                    {gender && <p>Selected Gender: {gender}</p>}
                </div>
                <div>
                    <button type="Register">Register</button>
                </div> */}
            </div>
        </form>
    );
}
export default Register;