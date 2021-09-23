import { Link } from "@material-ui/core";
import Header from "./Header";

const Checkout = () => {
    return (
        <>
            <Header />
            <section className="py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <h2>Payment Option for You !</h2>
                            <p>Pay with below payment gateway authorised Option.</p>
                            <div className="mt-5 text-center">
                                <a href="https:/www.paypal.com" target="_blank" className="mr-3"><img src={"images/paypal.jpg"} alt="payment-image" style={{width: "200px"}}/></a>
                                <a href="https:/www.paytm.com" target="_blank"><img src={"images/paypal.jpg"} alt="paytm-image" style={{width: "200px"}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Checkout;