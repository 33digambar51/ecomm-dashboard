import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function AdminHeader() {

    // Get DB data
    const [uname, setUname] = useState(getLocalUser());

    // fetch user data from localStorage
    //const user = JSON.parse(localStorage.getItem("admin-login-info"));
    //console.warn("Admin Info:", user);

    //Get data from local storage
    function getLocalUser() {
        let user = localStorage.getItem("admin-login-info");
        console.log("Login Admin:", user);
        if (user) {
            return JSON.parse(localStorage.getItem("admin-login-info"));
        }
        else {
            return [];
        }

    }
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-white">
                    <div class="container-fluid pl-0">
                        <button type="button" id="sidebarCollapse" class="btn btn-primary">
                            <i class="fa fa-bars fa-fw"></i>
                        </button>
                        {/* Below line for Left side Logo */}
                        <h3 class="m-0">ShoppingApp Vs Dashboard</h3>
                        <button class="navbar-toggler outline" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon">☰</span>
                        </button>
                        {/* Below line for Right side Logo */}
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul class="navbar-nav ml-auto">
                                {
                                    localStorage.getItem("admin-login-info") ?
                                        null
                                        :
                                        <li className="nav-item">
                                            <Link to="/admin" className="nav-link" style={{ color: "#F44336", fontSize: "16px" }}>Login</Link>
                                        </li>
                                }
                                {
                                    localStorage.getItem("admin-login-info") ?
                                        <>
                                            <li class="nav-item dropdown">
                                                {
                                                    uname.map((item, id) =>
                                                        <Link key={id} className="nav-link p-0">
                                                            <Link className="nav-link text-capitalize dropdown-toggle text-decoration-none" data-toggle="dropdown" style={{ color: "#F44336", lineHeight: "14px" }}>
                                                                {item.uname}
                                                                {/* <img src={"http://localhost:8000/" + item.image} style={{ width: 35, height:35 }} /> */}
                                                                <img src={"/images/avatar.png"} style={{ width: 35, height: 35 }} alt="u-image" className="ml-2" />
                                                            </Link>
                                                            <div class="dropdown-menu text-center profile-menu p-0 mt-n3 shadow">
                                                                <div className="position-absolute angledown"></div>
                                                                <Link to={"/profilee/" + item.id} className="dropdown-item outline py-2">Profile</Link>
                                                                <Link to="/logoutt" className="dropdown-item outline py-2"><i className="fa fa-sign-out mr-2"></i>Logout</Link>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            </li>
                                        </>
                                        : null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default AdminHeader;