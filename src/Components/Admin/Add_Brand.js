import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
import { useState } from "react";

const Add_Brand = () => {

    const [name, setName] = useState("");

    console.warn(name);
    const item = { name };

    const addBrand = async (e) => {
        e.preventDefault();
        console.log("Add Brand");

        if (name == "") {
            alert("Oops ! Blank not accept ! Please enter value");
        }
        else {
            await fetch("http://localhost:8000/brand", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            }).then((resp) => {
                console.warn("Add Brand Info:", resp);
                resp.json().then((result) => {
                    console.warn("Result:", result)
                    if (result) {
                        alert("Brand Added Successfully ! Thanks")
                        //Store data and redirect page by useHistory hooks.
                        localStorage.setItem("brand-info", JSON.stringify(result));
                        setName([]);
                        //history.push("./brand_list");
                    }
                })
            })
        }

    }

    return (
        <>
            <section className="common-c admin-section">
                <div class="d-flex w-100 align-items-stretch wrapper" style={{ backgroundColor: "#f7f9f7" }}>
                    {/* <Admin-left-sidebar></Admin-left-sidebar> */}
                    <LeftSidebar />
                    {/* Page Content */}
                    <div id="content" class="position-relative">
                        {/* <Admin-header></Admin-header> */}
                        <AdminHeader />
                        <div id="center-content" class="position-absolute">
                            <div class="container-fluid">
                                <div class="row">
                                    <div className="col-sm-6 offset-sm-3 bg-white mt-4 card-box">
                                        <form onSubmit={addBrand}>
                                            <h2 className="text-center mb-4">Add Brand</h2>
                                            <div className="form-group">
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Brand name*" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-info">Add Brand</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <admin-footer></admin-footer> */}
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Add_Brand;