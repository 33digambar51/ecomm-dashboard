import Header from "./Header"

const My_Orders = () => {
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 py-5">
                            <div className="mb-4">
                                <h2 className="text-center mb-4">Manage Your Account !</h2>                               
                            </div>
                            <div className="table-responsivess text-center odr-table">
                                <h5 className="mb-0">You have (4) Pending Orders</h5>
                                <strong>Please see your order detais by click this <a href="#">Link</a></strong>
                                <table class="table table-bordered table-sm text-center mt-4 ode-table">
                                    <thead>
                                        <tr>
                                            <th>Id/Order No.</th>
                                            <th>Due Ammount</th>
                                            <th>Invoice No</th>
                                            <th>Toatal Products</th>
                                            <th>Order Date</th>
                                            <th>Paid/Unpaid</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>17000</td>
                                            <td>87376587674</td>
                                            <td>4</td>
                                            <td>25 Aug, 2021</td>
                                            <td>Unpaid</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>17000</td>
                                            <td>87376587674</td>
                                            <td>4</td>
                                            <td>25 Aug, 2021</td>
                                            <td>Unpaid</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>17000</td>
                                            <td>87376587674</td>
                                            <td>4</td>
                                            <td>25 Aug, 2021</td>
                                            <td>Unpaid</td>
                                            <td>Pending</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default My_Orders;