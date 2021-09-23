import { useState, useEffect } from "react";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Delete_Brand from "./Delete_Brand";

const Brand_List = () => {

    const [data, setData] = useState([]);

    // Pass Props in Modal
    const [id, setId] = useState(null);
    const [type, setType] = useState("");

    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [itemMessage, setItemMessage] = useState("");
    const [alert, setAlert] = useState(false);


    useEffect(() => {
        getData();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/brand");
        result = await result.json();
        setData(result);
    }

    // Delete method for Brand delete

    // function deleteList(id) {
    //     //alert(id);
    //     if (window.confirm("Are you sure, want to delete this Brand")) {
    //         fetch("http://localhost:8000/brand/" + id,
    //             {
    //                 method: "DELETE",
    //             }).then((result) => {
    //                 result.json().then((resp) => {
    //                     alert("Brand has been Delete Successfully !")
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
            setDeleteMessage(`Are you sure, you want to Delete this Brand "${data.find((x) => x.id === id).name}" ?`);
        }
        setDisplayConfirmationModal(true);
        console.log(displayConfirmationModal);
    }
    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    }
    // Delete brand Api fetch
    const submitDelete = (id) => {
        //alert(id);
        if (id) {
            fetch("http://localhost:8000/brand/" + id,
                {
                    method: "DELETE",
                }).then((result) => {
                    result.json().then((resp) => {
                        //alert("Product has been Delete Successfully !")
                        setItemMessage(`The Brand "${data.find((x) => x.id === id).name}" was deleted successfully.`);
                        getData();
                    })
                })
        }
        setDisplayConfirmationModal(false)
        setAlert(true)
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
                                    <div className="col-sm-10 offset-sm-1">
                                        <h2 className="text-center mb-4">Brand List</h2>
                                        <div className="table-responsive pro_list">
                                            <div className="alert alert-success text-capitalize">
                                                <p className="mb-0">{itemMessage}</p>
                                            </div>
                                            <table class="table table-bordered table-sm text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Brand name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((item, i) =>
                                                            <tr key={i}>
                                                                <td>{item.id}</td>
                                                                <td className="text-capitalize">{item.name}</td>
                                                                {/* <td><img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /></td> */}
                                                                {/* <td><img src="/images/img1.jpg" style={{ width: 80, height: 50 }} /></td> */}
                                                                <td>
                                                                    <Link to={"update_brand/" + item.id} class="btn btn-primary btn-sm mr-2"><i className="fa fa-pencil"></i></Link>
                                                                    <button onClick={() => showDeleteModal("item", item.id)} class="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                                                                    {/* <button onClick={() => deleteList(item.id)} class="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button> */}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <Delete_Brand showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} type={type} id={id} message={deleteMessage} itemMessage={itemMessage} />
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
        </>
    );
}
export default Brand_List;