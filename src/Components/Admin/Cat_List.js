import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";

const Cat_List = () => {
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

    // Delete method for Product delete
    function deleteList(id) {
        //alert(id);
        if (window.confirm("Are you sure, want to delete this Category")) {
            fetch("http://localhost:8000/cat/" + id,
                {
                    method: "DELETE",
                }).then((result) => {
                    result.json().then((resp) => {
                        alert("Category has been Delete Successfully !")
                        getData();
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
                                    <div className="col-sm-10 offset-sm-1">
                                        <h2 className="text-center mb-4">Category List</h2>
                                        <div className="table-responsive pro_list">
                                            <table class="table table-bordered table-sm text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Category name</th>
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
                                                                    <Link to={"update_category/" + item.id} class="btn btn-primary btn-sm mr-2"><i className="fa fa-pencil"></i></Link>
                                                                    <button onClick={() => deleteList(item.id)} class="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
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
export default Cat_List;