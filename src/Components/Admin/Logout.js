import React from "react";
import { Redirect } from "react-router-dom";
const Admin_Logout = () => {
    //localStorage.clear();
    // Second Way:-> Get data from local storage
        let admin = localStorage.getItem("admin-login-info");
        console.log("Login Admin:", admin);
        if (admin) {
            //alert("Yes");
            localStorage.clear(admin);
            return <Redirect to="/admin"></Redirect>
        }
    return <Redirect to="/admin"></Redirect>
};
export default Admin_Logout;