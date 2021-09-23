import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// React Material
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
//import InputAdornment from '@material-ui/core/InputAdornment';
//import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';


function Alogin() {
    useEffect(() => {
        let login = localStorage.getItem("admin-login-info");
        console.log(login);
        if (login == "true") {
            history.push("./index");
        }
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const history = useHistory();


    // Login Form submit
    async function LoginHandle(e) {
        e.preventDefault();
        console.log("Login Form");
        if (email == "" || password == "") {
            alert("Oops ! Blank not accept ! Please enter value");
        }
        else if (email.length <=3 || password.length <= 3) {
            alert("Password size not valid. Enter 4 digit value !")
        }
        else {
            let data = { email }; // Object not exist Url
            console.log(data);
            console.log(email); // Exist Url

            // fetch API url and Get Data from API
            let result = await fetch("http://localhost:8000/admin?q=" + email );
            result = await result.json();
            //console.log(result);
            if (result.length > 0) {
                alert("Success ! You are Logged In");
                //Store data and redirect page
                localStorage.setItem("admin-login-info", JSON.stringify(result));
                //console.log(result);
                history.push("./index");
            }
            else {
                alert("Pelase check email and password !")
            }

        }
    }
    // On Change input value:-> Common Hander
    // const handleChange = (e) => {
    //     const user = ({ [e.target.name]: e.target.value });
    //     console.log(user);
    // }

    // On Change input value: Validation
    const emilHandler = (e) => {
        let item = (e.target.value);
        if (item.length <= 3) {
            console.log("Not valid");
            setEmailErr(true);
        }
        else {
            setEmailErr(false);
        }
        console.log(email);
        setEmail(item);
    }

    const passHandler = (e) => {
        let pass = (e.target.value);
        if (pass.length <= 3) {
            console.log("Not valid");
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        console.log(pass);
        setPassword(pass);
    }
    return (
        <>
            <section className="common-c a-login">
                <div className="animateT card-box">
                    <form onSubmit={LoginHandle}>
                        <h2 className="text-center mb-4">Admin Login !</h2>
                        <div className="form-group">
                            <TextField type="text" name="email" onChange={emilHandler} id="outlined-basic" label="Email" variant="outlined" size="small" className="w-100" />
                            {/* <input type="text" name="email" onChange={emilHandler} className="form-control" placeholder="Email address*" /> */}
                            {emailErr ? <small className="text-danger">Email address not valid</small> : null}
                        </div>
                        <div className="form-group">
                            <TextField type="password" name="password" onChange={passHandler} id="outlined-basic" label="Password" variant="outlined" size="small" className="w-100" />
                            {/* <input type="password" name="password" onChange={passHandler} className="form-control" placeholder="Enter Password*" /> */}
                            {passErr ? <small className="text-danger">Password not valid</small> : null}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div class="form-group form-check pl-0">
                                {/* <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" /> 
                                </label> */}
                                <Checkbox color="secondary" size="" className="p-0 mr-1" />Remember me
                            </div>
                            <div className="">
                                <a href="#" data-toggle="modal" data-target="#myModal1">Forgot password?</a>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary px-4"><i className="fa fa-user mr-2"></i>Login</button>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <span>Do you haven't account?</span><Link to="/aregister" className="ml-1">Register</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
export default Alogin;