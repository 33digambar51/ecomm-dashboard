import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

function Aregister() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [language, setLanguage] = useState("");
    // const [interest, setInterest] = useState(false);
    const [interest, setInterest] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    // For redirect page
    const history = useHistory();

    function SignUp(e) {
        e.preventDefault();
        console.log("Register Form");
        //console.log(fname, email, password);
        let item = { fname, lname, uname, email, password, contact, address, language, interest, description, image };
        console.log(item);

        if (!(fname) || !(lname) || !(uname) || !(email) || !(password) || !(contact) || !(address) || !(language) || !(interest) || !(description)) {
            alert("Oops! Blank not accepted !")
        }
        else {
            // Fetch API Url and Get Email For Match Email (Email-Redundancy) => Email Not be same
            //Fetch Data through props
            //console.warn("Props:", props);

            // console.warn("Props Id:", props.match.params.id);
            // const uemail = (email) // For match DB email
            // fetch("http://localhost:8000/users/" + props.match.params.id).then((data) => {
            //     data.json().then((resp) => {
            //         console.log("DB Email:", resp.email);
            //         if (resp.email == uemail) {
            //             alert("This email id already exist ! Type new email Id")
            //         }
            //         else {
            //             alert("Added Email")
            //         }
            //     })
            // })

            // Method Second
            //let result = await fetch("http://localhost:8000/users?q=" + email );
            //result = await result.json();
            // console.log("DB Result:", result.email);
            // if (result == uemail) {
            //     alert("Oops, This email Id Already exist, Type new email Id");
            // }
            // else {
            //     alert("Added Email Id !")
            // }


            // Second Third
            // fetch API url and Get Data from API
            const uemail = [email] // For match DB email
            console.log(email)
            fetch("http://localhost:8000/users/").then((data) => {
                data.json().then((resp) => {
                    //const obj = JSON.parse(resp);
                    //console.log("DB:", resp);
                    //const dbemail = [... new Set(resp.map((curElem) => {
                    const dbemail = [...new Set(resp.map((curElem) => {
                        return curElem.email;
                    }))];
                    console.log("DB Email:", dbemail);
                    // for (var i = 0; i < dbemail.length; i++) {
                    //     console.log("For Loop:", dbemail[i]);
                    //     //const checmail = dbemail[i]
                    // }
                    // if (dbemail[i] == email) {
                    //     alert("This email id already exist ! Type new email Id")
                    // }
                    // else {
                    //     alert("Added Email")

                    // }
                    // By Mapping
                    // dbemail.map((dbe, i) => {
                    //     console.log("Map email:", dbe);
                    // })

                    if (dbemail[0] == uemail) {
                        console.log("Chk", uemail)
                        alert("This email id already exist ! Type new email Id")
                    }
                    else {
                        //alert("Add email");
                        // Match Pass && C-Pass -> Both same, Store Password(only)
                        if (password === cpassword) {
                            //alert("Both Password Same !")
                            // fetch API url and Post Data in API
                            const url = "http://localhost:8000/admin";

                            fetch(url, {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(item)
                            }).then((resp) => {
                                console.warn("Reg Info:", resp);
                                resp.json().then((result) => {
                                    console.warn("result", result)
                                    if (result) {
                                        alert("Regitration Successfull ! Thanks")
                                        //Store data and redirect page by useHistory hooks.
                                        localStorage.setItem("user-info", JSON.stringify(result));
                                        history.push("./admin");
                                    }
                                })
                            })
                        }
                        else {
                            alert("Password Not Match !")
                        }
                    }
                })
            })
        }

    }
    // Reset Value
    const handleReset = () => {
        console.log("Reset Value");
        //document.querySelectorAll('input', 'textarea');
        // this.setState({
        //     //   name: [{}]
        //     name: null,
        //     uname: null,
        //     email: null,
        //     password: null,
        //     phone: null,
        //     address: null,
        //     description: [],
        //     image: null
        // });
        setFname(""); setLname(""); setUname(""); setEmail(""); setPassword(""); setCpassword(""); setContact(""); setAddress(""); setLanguage(""); setInterest(""); setDescription([]); setImage("");
    }

    return (
        <>
            <section className="common-c py-5">
                <div className="col-sm-6 offset-sm-3 card-box">
                    <form onSubmit={SignUp}>
                        <h2 className="text-center mb-4">Admin Register</h2>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>First Name:</label>
                                <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} id="fname" autocomplete="off" placeholder="First name*" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label>Last Name:</label>
                                <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} id="lname" autocomplete="off" placeholder="Last name*" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>User name:</label>
                                <input type="text" name="uname" value={uname} onChange={(e) => setUname(e.target.value)} id="uname" autocomplete="off" placeholder="User name*" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label>E-mail Address:</label>
                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" autocomplete="off" placeholder="example@test.com" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>Password:</label>
                                <div className="position-relative">
                                    <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} id="pass" autocomplete="off" placeholder="Password*" className="form-control" />
                                    <span className="fa fa-eye" id="pass-status" style={{ position: "absolute", top: 12, right: 12, color: "black", cursor: "pointer", }} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label>Confirm Password:</label>
                                <div className="position-relative">
                                    <input type="password" name="cpass" value={cpassword} onChange={(e) => setCpassword(e.target.value)} id="cpass" autocomplete="off" placeholder="Password*" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>Phone number:</label>
                                <input type="number" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} id="contact" autocomplete="off" placeholder="Contact number" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label>Address:</label>
                                <select className="form-control" id="address" onChange={(e) => setAddress(e.target.value)}>
                                    <option value="Select Country">Select Country</option>
                                    <option value="Ind">India</option>
                                    <option value="Aus">Austraila</option>
                                    <option value="US">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="w-100">Laguage:</label>
                                <div class="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" name="lang" value="JS" onChange={(e) => setLanguage(e.target.value)} className="form-check-input" />JS
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" name="lang" value="React" onChange={(e) => setLanguage(e.target.value)} className="form-check-input" />React
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div className="form-check-inline w-100">
                                    <label>
                                        <input type="checkbox" onChange={(e) => setInterest(e.target.checked)} className="form-check-input d-none" id="all_cu" />Interest
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label className="form-check-label">
                                        {/* <input type="checkbox" name="hoby" value="CRT" onChange={(e) => setInterest(e.target.checked)} className="form-check-input" />Cricket */}
                                        <input type="checkbox" name="hoby" value="CRT" onChange={(e) => setInterest(e.target.value)} className="form-check-input" />Cricket
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" name="hoby" value="FTB" onChange={(e) => setInterest(e.target.value)} className="form-check-input" />Football
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" name="hoby" value="RGB" onChange={(e) => setInterest(e.target.value)} className="form-check-input" />Rugby
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" disabled />TT
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="form-control" placeholder="Description*"></textarea>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <input type="file" class="form-control-file" />
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button type="reset" onClick={() => { handleReset() }} className="btn btn-danger px-3 mr-2"><i className="fa fa-arrow-left mr-2"></i>Reset</button>
                            <button type="submit" className="btn btn-primary"><i className="fa fa-twitter mr-1"></i>SingUp</button>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <span>Do you have account?</span><Link to="/admin" className="ml-1">Login</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
export default Aregister;