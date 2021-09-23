import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";

const Add_Product = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(null);
    const [image, setImage] = useState("");
    const [color, setColor] = useState("");
    const [cat_Id, setCatID] = useState("");

    const history = useHistory();

    console.warn(name, price, description, quantity, image, color, cat_Id);
    const item = { name, price, description, quantity, color, image, cat_Id };



    async function addPrduct(e) {
        e.preventDefault();
        console.log("Add Product");

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

        if (name == "" || price == "" || description == "") {
            alert("Oops ! Blank not accept ! Please enter value");
        }
        else {
            await fetch("http://localhost:8000/list", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            }).then((resp) => {
                console.warn("Add Pro Info:", resp);
                resp.json().then((result) => {
                    console.warn("Result:", result)
                    if (result) {
                        alert("Product Added Successfully ! Thanks")
                        //Store data and redirect page by useHistory hooks.
                        localStorage.setItem("pro-info", JSON.stringify(result));
                        history.push("./product_list");
                    }
                })
            })
        }

    }

    // Get Category from DB
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/cat");
        result = await result.json();
        setData(result);
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
                                <div class="row mb-5">
                                    <div className="col-sm-6 offset-sm-3 bg-white mt-4 card-box">
                                        <form onSubmit={addPrduct}>
                                            <h2 className="text-center mb-4">Add Product</h2>
                                            <div className="form-group">
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name*" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Price*" />
                                            </div>
                                            <div className="form-group">
                                                <select class="form-control" onChange={(e) => setCatID(e.target.value)} name="pd_cat">
                                                    <option>Select Category</option>
                                                    {
                                                        data.map((cat, id) =>
                                                            <option value={cat.id} key={id}>{cat.name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="form-control" placeholder="Color*" />
                                            </div>
                                            <div className="form-group">
                                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" rows="3" placeholder="Prduct Description*"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} class="form-control w-25" placeholder="Quantity*" />
                                            </div>
                                            <div className="form-group">
                                                <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Choose image*" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-info">Add Product</button>
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
export default Add_Product;