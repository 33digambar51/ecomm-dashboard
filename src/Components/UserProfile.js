import { useState, useEffect } from "react";
import Header from "./Header";
import proimg from "../assets/images/avatar.png";
// Get porps
import { withRouter } from "react-router";
const UserProfile = (props) => {

    const [id, setId] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [interest, setInterest] = useState("");
    const [language, setLanguage] = useState("");


    //Fetch Data through props
    //console.warn("Props:", props);
    //console.warn("Props", props.match.params.id);
    //const [data, setData] = useState([]);

    //call Api from DB
    const [data, setData] = useState([]);
    useEffect(() => {
        //fun call getData()
        getData();

    }, []);

    async function getData() {
        let result = await fetch("http://localhost:8000/users/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setId(result.id)
        setFname(result.fname);
        setLname(result.lname);
        setUname(result.uname);
        setEmail(result.email);
        setPassword(result.password);
        setContact(result.contact);
        setAddress(result.address);
        setInterest(result.interest);
        setLanguage(result.language);
        setDescription(result.description);
    }

    // Update Profile Data
    async function updateProfile(e) {
        e.preventDefault();
        console.log("Update Profile");
        //let id = (data.id);
        console.warn(id, fname, lname, uname, email, password, contact, address, description, interest, language);
        let item = { id, fname, lname, uname, email, password, contact, address, description, interest, language}
        console.log("UP Data:", item);
        //alert(id);
        // fetch API url and Update Data in API
        let result2 = await fetch("http://localhost:8000/users/" + id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        });
        alert("Profile Updated Succesfully ! Thanks")
        console.log(result2);
        getData();

    }
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="col-sm-6 offset-sm-3 card-box">
                    <div className="user-profile">
                        <form onSubmit={updateProfile}>
                            <div className="text-center mb-5 user-image">
                                <img src={proimg} alt="user-img" style={{ width: 140, height: 140 }} />
                                {/* <img src={"http://localhost:8000/" + image} style={{ width: 100 }} /> */}
                            </div>
                            <div className="row d-none">
                                <div className="col-md-12 form-group">
                                    <label>Id:</label>
                                    <input type="text" className="form-control" defaultValue={id} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>First name:</label>
                                    <input type="text" className="form-control" defaultValue={fname} onChange={(e) => setFname(e.target.value)} />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Last name:</label>
                                    <input type="text" className="form-control" defaultValue={lname} onChange={(e) => setLname(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>User name:</label>
                                    <input type="text" className="form-control" defaultValue={uname} onChange={(e) => setUname(e.target.value)} disabled />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Email:</label>
                                    <input type="text" className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)} readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>Password:</label>
                                    <input type="text" className="form-control" defaultValue={password} onChange={(e) => setPassword(e.target.value)} disabled />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Contact:</label>
                                    <input type="number" className="form-control" defaultValue={contact} onChange={(e) => setContact(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>Address:</label>
                                    <select className="form-control" id="address" onChange={(e) => setAddress(e.target.value)}>
                                        <option className="text-danger">{data.address}</option>
                                        <option>Select Country</option>
                                        <option value="India">India</option>
                                        <option value="Austraila">Austraila</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 form-group">

                                </div>
                            </div>
                            {/* <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="w-100">Laguage:</label>
                                    <div class="form-check-inline">
                                        <label className="form-check-label">
                                            <input type="radio" name="lang" defaultValue={interest} className="form-check-input" />JS
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input type="radio" name="lang" defaultValue={interest} className="form-check-input" />React
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <textarea defaultValue={description} onChange={(e) => setDescription(e.target.value)} className="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

}
export default withRouter(UserProfile);