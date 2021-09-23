import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart";
function CartItem({ id, title, description, price, img, quantity }) {
    //console.log(props); => Destrucchring above line for directly get props value
    //cal removeItem()
    const { removeItem, increment, decrement, upprice} = useContext(CartContext);
    return (
        <>
            <div className="cart-item">
                <div className="cart-img">
                    <img src={img} alt="image" />
                </div>
                <div className="cart-title">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="cart-quantity">
                    <i className="fa fa-minus mr-2" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity} className="form-control w-auto" />
                    <i className="fa fa-plus ml-2" onClick={() => increment(id)}></i>
                </div>
                <div className="cart-price">
                    <h5>
                        {upprice}
                    </h5>
                </div>
                <div className="cart-remove">
                    <Link to="/cart"><i className="fa fa-trash-o fa-2x" onClick={() => removeItem(id)}></i></Link>
                </div>
            </div><hr />
        </>
    );
}
export default CartItem;