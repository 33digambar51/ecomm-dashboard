import { useState } from "react";
import { useHistory } from "react-router";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";

function Add_Category() {

    const [name, setName] = useState("");
    const history = useHistory();

    console.warn(name);
    const item = { name };

    async function addCategory(e) {
        e.preventDefault();
        console.log("Add Category");

        //convert data in formData Becoz here is File.
        // const formData = new FormData();
        // formData.append("file", image)
        // formData.append("name", name);
        // formData.append("price", price);
        // formData.append("description", description);

        // // fetch API Url and Post Data in API
        // let result = await fetch("http://localhost:8000/list", {
        //     method: "POST",
        //     body: formData
        // });

        //Second Ways

        if (name == "") {
            alert("Oops ! Blank not accept ! Please enter value");
        }
        else {
            await fetch("http://localhost:8000/cat", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            }).then((resp) => {
                console.warn("Add Cat Info:", resp);
                resp.json().then((result) => {
                    console.warn("Result:", result)
                    if (result) {
                        alert("Category Added Successfully ! Thanks")
                        //Store data and redirect page by useHistory hooks.
                        localStorage.setItem("cat-info", JSON.stringify(result));
                        setName([]);
                        history.push("./cat_list");
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
                                        <form onSubmit={addCategory}>
                                            <h2 className="text-center mb-4">Add Category</h2>
                                            <div className="form-group">
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Category name*" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-info">Add Category</button>
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
export default Add_Category;