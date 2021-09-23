import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
import Delete_Product from "./Delete_Product";
//Pagination
import Pagination from "./Pagination";

const Product_List = () => {

    const [data, setData] = useState([]);

    // Pass Props in Modal
    const [type, setType] = useState("");
    const [id, setId] = useState(null);

    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [itemMessage, setItemMessage] = useState("");

    useEffect(() => {
        getData();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/list");
        result = await result.json();
        setData(result);
    }

    // Delete method for Product delete

    // function deleteProduct(id){
    //     if (window.confirm("Are you sure, want to delete this Product")) {
    //         fetch("http://localhost:8000/list/" + id,
    //             {
    //                 method: "DELETE",
    //             }).then((result) => {
    //                 result.json().then((resp) => {
    //                     alert("Product has been Delete Successfully !")
    //                     getData();
    //                 })
    //             })
    //     }
    // }

    function showDeleteModal(type, id) {
        //alert(id);
        setType(type);
        setId(id);
        setItemMessage(null);
        console.log(id);
        if (type === "item") {
            console.log("YES")
            setDeleteMessage(`Are you sure you want to Delete this Product "${data.find((x) => x.id === id).name}" ?`);
            //setDisplayConfirmationModal(true);
        }
        setDisplayConfirmationModal(true);
        console.log(displayConfirmationModal);
    }
    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    }
    // Handle the actual deletion of the item
    // const submitDelete = (type, id) => {
    //     if (type === "item") {
    //       setFruitMessage(`The item '${data.find((x) => x.id === id).name}' was deleted successfully.`);
    //       setFruits(fruits.filter((fruit) => fruit.id !== id));
    //     } 
    //     setDisplayConfirmationModal(false);
    //   };

    const submitDelete = (id) => {
        //alert(id);
        if (id) {
            fetch("http://localhost:8000/list/" + id,
                {
                    method: "DELETE",
                }).then((result) => {
                    result.json().then((resp) => {
                        //alert("Product has been Delete Successfully !")
                        getData();
                    })
                })
        }
        setDisplayConfirmationModal(false);
    }

    //pagination 
    const [showPerPage, setShowPerPage] = useState(4);
    const [pagination, setPagination] = useState({ start: 0, end: showPerPage });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };

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
                                    <div className="col-sm-12">
                                        <h2 className="text-center mb-4">Product List</h2>
                                        <div className="table-responsive pro_list">
                                            <table class="table table-bordered table-sm text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Name</th>
                                                        <th>Image</th>
                                                        <th>Product Cat ID</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Color</th>
                                                        <th>Description</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.slice(pagination.start, pagination.end).map((item, i) =>
                                                            <tr key={i}>
                                                                <td>{item.id}</td>
                                                                <td className="text-capitalize">{item.name}</td>
                                                                {/* <td><img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /></td> */}
                                                                <td><img src="/images/img1.jpg" style={{ width: 80, height: 50 }} /></td>
                                                                <td>{item.cat_Id}</td>
                                                                <td>{item.price}</td>
                                                                <td>{item.quantity}</td>
                                                                <td className="text-capitalize">{item.color}</td>
                                                                <td className="text-capitalize">{item.description}</td>
                                                                <td>
                                                                    <Link to={"update_product/" + item.id} class="btn btn-primary btn-sm mr-2"><i className="fa fa-pencil"></i></Link>
                                                                    <button onClick={() => showDeleteModal("item", item.id)} class="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                                                                    {/* <button onClick={() => deleteProduct(item.id)} class="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button> */}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <Delete_Product showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} type={type} id={id} message={deleteMessage} />
                                            <Pagination
                                                showPerPage={showPerPage}
                                                onPaginationChange={onPaginationChange}
                                                total={data.length}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <admin-footer></admin-footer> */}
                        <Footer />
                    </div>
                </div>
            </section>
            {/* <Delet_List showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} type={type} id={id} message={deleteMessage} /> */}
        </>
    );
}
export default Product_List;