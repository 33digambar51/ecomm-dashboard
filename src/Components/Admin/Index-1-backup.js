const Index = () => {
    return (
        <>
            <section className="common-c admin-section">
                <div class="d-flex w-100 align-items-stretch wrapper" style={{ backgroundColor: "#f7f9f7" }}>
                    {/* <app-left-sidebar></app-left-sidebar> */}
                    <nav id="sidebar">
                        <div class="sidebar-header p-3 mb-2">
                            <div class="logo text-center">
                                <a href="javascript:void()0" class="text-white font-weight-bold outline" style={{ textDecoration: "none" }}>ShoppingApp</a>
                            </div>
                        </div>
                        <div class="nav-list">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-white active" routerLink="/home" routerLinkActive="active" title="home"><i class="fa fa-home mr-2"></i><span>Dashboard</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/users"><i class="fa fa-users mr-2" title="users"></i><span>Users</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/posts" title="posts"><i class="fa fa-edit mr-2"></i><span>Posts</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/category" title="category"><i class="fa fa-image mr-2"></i><span>Category</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/stories" title="stories"><i class="fa fa-camera mr-2"></i><span>Stories</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/articles" title="article"><i class="fa fa-font mr-2"></i><span>Article Posts</span></a>
                                </li>
                                <li class="nav-item">
                                    <a data-toggle="collapse" data-target="#hotnot" class="nav-link text-white" routerLink="/" title="music"><i class="fa fa-music mr-2"></i><span>Music</span></a>
                                    <ul id="hotnot" class="navbar-nav collapse video-menu" style={{ backgroundColor: "#fb6145" }}>
                                        <li class="nav-item">
                                            <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/albums"><i class="fa fa-image mr-2"></i><span>Albums</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/songs"><i class="fa fa-play mr-2"></i><span>Songs</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a data-toggle="collapse" class="nav-link text-white pl-3" routerLink="/playlists"><i class="fa fa-play-circle mr-2"></i><span>Playlists</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/reports" title="reports"><i class="fa fa-edit mr-2"></i><span>Reports</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" routerLink="/payments" title="payments"><i class="fa fa-money mr-2"></i><span>Payments</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Page Content */}
                    <div id="content" class="position-relative">
                        {/* <app-header></app-header> */}
                        <header>
                            <nav class="navbar navbar-expand-md navbar-dark bg-white">
                                <div class="container-fluid pl-0">
                                    <button type="button" id="sidebarCollapse" class="btn btn-primary">
                                        <i class="fa fa-bars fa-fw"></i>
                                    </button>
                                    {/* Below line for Left side Logo */}
                                    <h3 class="m-0">ShoppingVs Dashboard</h3>
                                    <button class="navbar-toggler outline" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon">☰</span>
                                    </button>
                                    {/* Below line for Right side Logo */}
                                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link outline py-0 font-weight-bold" href="javascript:void(0)" data-toggle="dropdown" aria-expanded="false" style={{ color: "#F44336", lineHeight: "14px" }}>
                                                Shopping<i class="fa fa-angle-down text-info ml-2"></i><span class="d-block text-dark font-italic font-weight-normal" style={{ fontSize: "11px" }}>Admin</span>
                                                </a>
                                                <div class="dropdown-menu text-center profile-menu p-0 shadow">
                                                    <div class="position-absolute angledown"></div>
                                                    <a class="dropdown-item outline py-2" href="javascript:void(0)"><i class="fa fa-sign-out mr-2"></i>Logout</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div id="center-content" class="position-absolute">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-users"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/users" class="text-uppercase text-decoration-none">Manage Users</a>
                                            </div>
                                            <div class="stats">
                                                <h5>7</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-edit"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/posts" class="text-uppercase text-decoration-none">Posts</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-image"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/category" class="text-uppercase text-decoration-none">Category</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-camera"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/stories" class="text-uppercase text-decoration-none">Stories</a>
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
                                                <a routerLink="/articles" class="text-uppercase text-decoration-none">Article Posts</a>
                                            </div>
                                            <div class="stats">
                                                <h5>1</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-music"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/albums" class="text-uppercase text-decoration-none">Albums</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-music"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/songs" class="text-uppercase text-decoration-none">Songs</a>
                                            </div>
                                            <div class="stats">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="position-relative text-center counter_box bg-white">
                                            <i class="fa fa-music"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/playlists" class="text-uppercase text-decoration-none">Playlists</a>
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
                                            <i class="fa fa-money"></i>
                                            <div class="position-absolute link-box text-center rounded">
                                                <a routerLink="/payments" class="text-uppercase text-decoration-none">Payments</a>
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
                            </div>
                        </div>
                        {/* <app-footer></app-footer> */}
                        <footer class="position-fixed text-center admin" style={{ width:"99%", backgroundColor: "#ccc" }}>
                            <p class="m-0">© 2021 ShoppingApp. All Rights Reserved.</p>
                        </footer>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Index;