import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
// Get Propst
import { withRouter } from "react-router";

const Update_Product = (props) => {

    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(null);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("");
    const [cat_Id, setCatID] = useState("");

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
        let result = await fetch("http://localhost:8000/list/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setId(result.id);
        setName(result.name);
        setPrice(result.price);
        setCatID(result.cat_Id);
        setColor(result.color);
        setDescription(result.description);
        setQuantity(result.quantity)
        setImage(result.image)
    }

    //console.warn(name, price, description, image);
    const item = { name, price, description, quantity, color, image, cat_Id };
    console.log("UP Product:", item);

    //Update Product
    async function updatePro(e) {
        e.preventDefault();
        console.log("Update Product");
        //alert(data.id);
        //convert data in formData Becoz here is File.
        // const formData = new FormData();
        // formData.append("file", image)
        // formData.append("name", name);
        // formData.append("price", price);
        // formData.append("description", description);

        // // fetch API url and Post Data in API
        // let result = await fetch("http://localhost:8000/list/" + id, {
        //     method: "POST",
        //     body: formData
        // });
        // alert("Product Updated Succesfully !")

        // Second Methoda for Update Product:> fetch API url and Update Product
        let result = await fetch("http://localhost:8000/list/" + id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }).then((resp) => {
            console.log("Upd Pro Info:", resp);
            resp.json().then((result) => {
                console.warn("Upd Pro Result:", result)
                if (result) {
                    alert("Product Updated Succesfully ! Thanks")
                    //Store data and redirect page by useHistory hooks.
                    localStorage.setItem("Upd Pro", JSON.stringify(result));
                    history.push("../product_list");
                }
            })
        })
    }

    // Get Category from DB
    const [cat, setCat] = useState([]);

    useEffect(() => {
        getCats();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getCats() {
        let result = await fetch("http://localhost:8000/cat");
        result = await result.json();
        setCat(result);
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
                                    <div className="col-sm-6 offset-sm-3 mb-5 pb-5 bg-white card-box">
                                        <form onSubmit={updatePro}>
                                            <h2 className="text-center mb-4">Update Product</h2>
                                            <div className="form-group">
                                                <input type="text" defaultValue={data.id} class="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} class="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} class="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <select class="form-control" onChange={(e) => setCatID(e.target.value)} name="pd_cat">
                                                    <option className="text-info">{data.cat_Id}</option>
                                                    <option>Select Category</option>
                                                    {/* <option className="text-info">{data.cat_Id}</option> */}
                                                    {
                                                        cat.map((pcat, id) =>
                                                            <option value={pcat.id} key={id}>{pcat.name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" value={data.color} onChange={(e) => setColor(e.target.value)} className="form-control" placeholder="Color*" />
                                            </div>
                                            <div className="form-group">
                                                <textarea defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} class="form-control" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} class="form-control w-25" placeholder="Quantity*" />
                                            </div>
                                            <div className="col-sm-2 mb-3">
                                                <img src={"http://localhost:8000/" + data.file_path} style={{ width: 70 }} />
                                            </div>
                                            <div className="form-group">
                                                <input type="file" defaultValue={data.file_path} onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                            <div className="text-center mt-3">
                                                <button type="submit" className="btn btn-primary">Update Product</button>
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
export default withRouter(Update_Product);