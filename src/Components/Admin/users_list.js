import { useEffect, useState } from "react";
import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";

const Users_List = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/users");
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
                                <div class="row">
                                    <div className="col-sm-12">
                                        <h2 className="text-center mb-4">Users List</h2>
                                        <div className="table-responsive pro_list">
                                            <table class="table table-bordered table-sm text-center">
                                                <thead>
                                                    <tr>
                                                        <th>User Id</th>
                                                        <th>User Name</th>
                                                        <th>User Image</th>
                                                        <th>User Email</th>
                                                        <th>User Contact no</th>
                                                        <th>User Address</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((item, i) =>
                                                            <tr key={i}>
                                                                <td>{item.id}</td>
                                                                <td className="text-capitalize">{item.fname} {item.lname}</td>
                                                                {/* <td><img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /></td> */}
                                                                <td><img src="/images/avatar.png" style={{ width: 60, height: 60 }} /></td>
                                                                <td>{item.email}</td>
                                                                <td>{item.contact}</td>
                                                                <td className="text-capitalize">{item.address}</td>
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
export default Users_List;