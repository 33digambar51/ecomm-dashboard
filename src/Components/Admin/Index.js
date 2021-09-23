import AdminHeader from "./Admin-header";
import LeftSidebar from "./Left-Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Index = () => {
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
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-users"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/users" class="text-uppercase text-decoration-none">Manage Users</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>2</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-image"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/product_list" class="text-uppercase text-decoration-none">Products</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>16</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-edit"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/cat_list" class="text-uppercase text-decoration-none">Category</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-camera"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/brand_list" class="text-uppercase text-decoration-none">Brands</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>8</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-camera"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/orders" class="text-uppercase text-decoration-none">Orders</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>8</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-money"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link to="/payment" class="text-uppercase text-decoration-none">Payments</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-edit"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/reports" class="text-uppercase text-decoration-none">Reports</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-envelope"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/subscribers" class="text-uppercase text-decoration-none">Subscribers</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-font"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <Link href="javascript:void()" class="text-uppercase text-decoration-none">Admin Posts</Link>
                                            </div>
                                            <div class="stats">
                                                <h5>1</h5>
                                            </div>
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
export default Index;