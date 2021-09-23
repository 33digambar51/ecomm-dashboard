import { Link } from "react-router-dom";
function LeftSidebar() {
    return (
        <>
            <nav id="sidebar">
                <div class="sidebar-header p-3 mb-2">
                    <div class="logo text-center">
                        <Link to="/index" class="text-white font-weight-bold outline" style={{ textDecoration: "none" }}>ShoppingApp</Link>
                    </div>
                </div>
                <div class="nav-list">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/index" class="nav-link text-white active" routerLink="/home" routerLinkActive="active" title="Home"><i class="fa fa-home mr-2"></i><span>Dashboard</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/add_product" class="nav-link text-white" title="Add Product"><i class="fa fa-users mr-2" title="Add Product"></i><span>Add Product</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/product_list" class="nav-link text-white" title="Product List"><i class="fa fa-edit mr-2"></i><span>Product List</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/add_category" class="nav-link text-white" title="Add Category"><i class="fa fa-image mr-2"></i><span>Add Category</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/cat_list" class="nav-link text-white" title="Category List"><i class="fa fa-camera mr-2"></i><span>Category List</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/add_brand" class="nav-link text-white" title="Add Brand"><i class="fa fa-image mr-2"></i><span>Add Brand</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link data-toggle="collapse" data-target="#hotnot" class="nav-link text-white" routerLink="/" title="Orders"><i class="fa fa-music mr-2"></i><span>Orders</span></Link>
                            <ul id="hotnot" class="navbar-nav collapse video-menu" style={{ backgroundColor: "#fb6145" }}>
                                <li class="nav-item">
                                    <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/albums"><i class="fa fa-image mr-2"></i><span>Orders-1</span></a>
                                </li>
                                <li class="nav-item">
                                    <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/songs"><i class="fa fa-play mr-2"></i><span>Ordr</span></a>
                                </li>
                                <li class="nav-item">
                                    <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/playlists"><i class="fa fa-play-circle mr-2"></i><span>Orders</span></a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link to="/payment" class="nav-link text-white" title="payments"><i class="fa fa-money mr-2"></i><span>Payments</span></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="javascript:void()" routerLink="/reports" title="reports"><i class="fa fa-edit mr-2"></i><span>Reports</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default LeftSidebar;