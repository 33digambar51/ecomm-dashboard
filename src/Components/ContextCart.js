import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState, useContext } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
//import products from "./Products";

// Now will recive Consumer value;
import { CartContext } from "./Cart";

function ContextCart() {
    //const [item, setItem] = useState(products)
    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
    if (item.length === 0) {
        return (
            <>
                <Header />
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between cart-header">
                                    <Link to="/all-product" className="text-muted"><span className="fa fa-arrow-left mr-2"></span>Continue Shopping</Link>
                                    <Link to="/cart" className="position-relative"><span className="fa fa-shopping-cart fa-2x"></span><span className="cit">{totalItem}</span></Link>
                                </div>
                            </div>
                        </div><hr />

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="text-center mt-3 mb-4">Shopping Cart Empty !</h3>
                                <div className="py-3">
                                    <h5 className="mb-0">Shopping Cart</h5>
                                    <p>You have <span>{totalItem}</span> item in shopping cart.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between cart-header">
                                <Link to="/all-product" className="text-muted"><span className="fa fa-arrow-left mr-2"></span>Continue Shopping</Link>
                                <Link to="/cart" className="position-relative"><span className="fa fa-shopping-cart fa-2x"></span><span className="cit">{totalItem}</span></Link>
                            </div>
                        </div>
                    </div><hr />

                    <div className="row">
                        <div className="col-md-12">
                            <div className="py-3">
                                <h5 className="mb-0">Shopping Cart</h5>
                                <p>You have <span>{totalItem}</span> item in shopping cart.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="shadow cart-container">
                            <Scrollbars>
                                {/* <div className="cart-item">
                                    <div className="cart-img">
                                        <img src="/images/img2.jpg" alt="image" />
                                    </div>
                                    <div className="cart-title">
                                        <h5>Samsung S2I</h5>
                                        <p>black color</p>
                                    </div>
                                    <div className="cart-quantity">
                                        <i className="fa fa-minus mr-2"></i>
                                        <input type="text" placeholder="2" className="form-control w-auto" />
                                        <i className="fa fa-plus ml-2"></i>
                                    </div>
                                    <div className="cart-price">
                                        <h5>$300</h5>
                                    </div>
                                    <div className="cart-remove">
                                        <Link to="/"><i className="fa fa-trash-o fa-2x"></i></Link>
                                    </div>
                                </div><hr /> */}

                                {
                                    item.map((ele) => {
                                        return <CartItem key={ele.id} {...ele} />
                                    })
                                }
                            </Scrollbars>
                            </div>
                            <div className="cart-total">
                                <h5 className="mb-3">Cart Total: <span>₹{totalAmount}</span></h5>
                                {
                                    localStorage.getItem("login-info") ?
                                    <Link to="/checkout" className="btn btn-primary btn-sm">Checkout</Link>
                                    :
                                    <Link to="/login" className="btn btn-primary btn-sm">Checkout</Link>
                                }
                                {/* <Link to="/login" className="btn btn-primary btn-sm">Checkout</Link> */}
                                <button onClick={() => clearCart()} className="btn btn-danger ml-3 btn-sm clear-cart">Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ContextCart;