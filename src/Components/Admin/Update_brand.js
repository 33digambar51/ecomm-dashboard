import { useState, useEffect } from "react";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
import { useHistory } from "react-router";
// Get Propst
import { withRouter } from "react-router";

const Update_brand = (props) => {

    const [id, setId] = useState(null);
    const [name, setName] = useState("");

    const history = useHistory();

    //Fetch Data through props
    console.log("Props", props);

    console.warn("Props", props.match.params.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        // fun call
        getData()

    }, []);

    // Fetch Api Data 
    async function getData() {
        let result = await fetch("http://localhost:8000/brand/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setId(result.id);
        setName(result.name);
    }

    //console.warn(name, price, description, image);
    const item = { name };
    console.log("UPD Brand:", item);

    //Update Brand
    const updateBrand = async (e) => {
        e.preventDefault();
        console.log("Update Brand");

        let result = await fetch("http://localhost:8000/brand/" + id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }).then((resp) => {
            console.log("Upd Brand Info:", resp);
            resp.json().then((result) => {
                console.warn("Upd Brand Result:", result)
                if (result) {
                    alert("Brand Updated Succesfully ! Thanks")
                    //Store data and redirect page by useHistory hooks.
                    localStorage.setItem("Upd Brand", JSON.stringify(result));
                    setName([]);
                    history.push("../brand_list");
                }
            })
        })

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
                                        <form onSubmit={updateBrand}>
                                            <h2 className="text-center mb-4">Update Brand</h2>
                                            <div className="form-group">
                                                <input type="text" defaultValue={data.id} class="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Category name*" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-info">Update Brand</button>
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
export default withRouter (Update_brand);