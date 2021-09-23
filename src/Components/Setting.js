import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Header from "./Header";
// Get porps
import { withRouter } from "react-router";

const Setting = (props) => {
    const [id, setId] = useState(null);
    const [oldpassword, setOldPassword] = useState("");
    const [password, setNewPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const [newpasErr, setNewpasErr] = useState(false);
    const [cpasErr, setCpasErr] = useState(false);

    const history = useHistory();
    //Fetch Data through props
    //console.warn("Props:", props);
    //console.warn("Props", props.match.params.id);
    //const [data, setData] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [interest, setInterest] = useState("");
    const [language, setLanguage] = useState("");

    //call Api from DB
    useEffect(() => {
        //fun call getData()
        getUser();

    }, []);
    async function getUser() {
        let result = await fetch("http://localhost:8000/users/" + props.match.params.id);
        result = await result.json();
        //setData(result);
        setId(result.id);
        // setOldPassword(result.password)
        setFname(result.fname);
        setLname(result.lname);
        setUname(result.uname);
        setEmail(result.email);
        setContact(result.contact);
        setAddress(result.address);
        setInterest(result.interest);
        setLanguage(result.language);
        setDescription(result.description);
    }

    // On Change input value: Validation
    const newpassHandler = (e) => {
        let item = (e.target.value);
        if (item.length <= 3) {
            console.log("Not valid");
            setNewpasErr(true);
        }
        else {
            setNewpasErr(false);
        }
        console.log(password);
        setNewPassword(item);
    }

    const cpassHandler = (e) => {
        let item = (e.target.value);
        if (item.length <= 3) {
            console.log("Not valid");
            setCpasErr(true);
        }
        else {
            setCpasErr(false);
        }
        console.log(cpassword);
        setCPassword(item);
    }


    // Update Password
    const changePassword = (e) => {
        e.preventDefault();
        console.log("Event: Form Submit");

        const oldPass = (oldpassword);  // Not match:-> const oldPass = {oldpassword};
        const newPass = (password);
        const conPass = (cpassword);

        //const updPass = {password}; // For body
        const updPass = {id, fname, lname, uname, email, password, contact, address, description, interest, language}

        if (oldpassword == "" || password == "" || cpassword == "") {
            alert("Oops ! Blank not accept ! Please enter value")
        }
       else if (password.length <= 3 || cpassword.length <= 3) {
            alert("New Password size not valid. Enter 4 digit value !")
        }
        else {
            fetch("http://localhost:8000/users/" + props.match.params.id).then((data) => {
                data.json().then((resp) => {
                    if (resp.password === oldPass) {
                        console.log("Old Pass:", resp.password);
                        window.alert("Old Password Match !");
                        console.warn("Resp:", resp)
                        // condition second match
                        if (newPass === conPass) {
                            alert("New Password Match !")
                            console.log(newPass);
                            // Store new password in DB.
                            fetch(`http://localhost:8000/users/${id}`, { 
                                method: "PUT",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                //body: JSON.stringify(newPass)
                                body: JSON.stringify(updPass)
                            }).then((result) => {
                                console.warn("Set Info:", result);
                                result.json().then((resp) => {
                                    console.log("UPD Resp:", resp)
                                    if (resp) {
                                        alert("Password Changed Successfully ! Thanks")
                                        setOldPassword([]);
                                        setNewPassword([]);
                                        setCPassword([]);
                                        // Redirect page
                                        history.push("../profile/" + id);
                                        //console.warn(this.props);
                                        //console.warn(this.props.history.push(''));
                                    }
                                    else {
                                        alert("Error !")
                                    }
                                })
                            })
                        }
                        else {
                            alert("New Password Not Match !");
                        }
                    }
                    else {
                        alert("Old Password Not Match");
                    }
                })
            })
        }
    }
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="col-sm-6 offset-sm-3 mb-5 pb-5 card-box">
                    <h3 className="text-center mb-4">Change Password</h3>
                    <form onSubmit={changePassword}>
                        <div className="form-group">
                            <input type="hidden" defaultValue={id} placeholder="id" className="form-control" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>Old password:</label>
                                <input type="password" defaultValue={oldpassword} name="opassword" onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter old password" class="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label>New password:</label>
                                <input type="password" value={password} name="npassword" onChange={newpassHandler} placeholder="Enter new password" class="form-control" />
                                {newpasErr ? <small className="text-danger">Password size not valid</small> : null}
                            </div>
                            <div className="col-sm-6">
                                <label>Confirm password:</label>
                                <input type="password" value={cpassword} name="cpassword" onChange={cpassHandler} placeholder="Confirm password" class="form-control" />
                                {cpasErr ? <small className="text-danger">Password size not valid</small> : null}
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Change Password</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
export default withRouter(Setting);