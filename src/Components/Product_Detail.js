import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
// Get Props
import { withRouter } from "react-router";
const Product_Detail = (props) => {
    //Fetch Data through props
    console.log("Props", props);

    console.warn("Props", props.match.params.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        // fun call
        getData()

    }, []);

    // Fetch Api Data 
    async function getData() {
        let result = await fetch("http://localhost:8000/list/" + props.match.params.id);
        result = await result.json();
        setData(result);
    }
    return (
        <>
            <Header />
            <section className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className='col-md-12 mb-3'>
                            <div className='position-relative text-center bg-white py-3'>
                                <h3 className="mb-4 text-capitalize">Product name: {data.name}</h3>
                                {/* <img src={"http://localhost:8000/" + data.file_path} style={{ width: 400, height: 300, border: "2px solid #fb4907" }} alt="prod-image" className="img-fluid ml-2"/> */}

                                <img src={"/images/prod-1.jpg"} style={{ width: 400, height: 300, border: "3px solid #007bff" }} alt="prod-image" className="img-fluid ml-2" />
                                <img src={"/images/prod-2.jpg"} style={{ width: 300, height: 250, border: "3px solid #007bff" }} alt="prod-image" className="img-fluid ml-2" />
                                <img src={"/images/prod-3.jpg"} style={{ width: 250, height: 200, border: "3px solid #007bff" }} alt="prod-image" className="img-fluid ml-2" />
                                <h6 className='mt-3 mb-1'>Product Price: <strong className="text-primary">${data.price}</strong></h6>
                                <strong className="d-block">Product Quantity: <span className="text-warning">{data.quantity}</span></strong>
                                <strong className="d-block text-capitalize">Product Color: <span className="text-primary">{data.color}</span></strong>
                                {/* <div className="form-group">
                                    <select class="form-control">
                                        <option disabled>Product Color</option>
                                        {
                                            <option value={data.color} key={data.color}>{data.color}</option>
                                            // data.map((colorf, id) =>
                                            //     <option value={colorf.id} key={id}>{colorf.color}</option>
                                            // )
                                        }
                                    </select>
                                </div> */}
                                <strong className="d-block mb-3">Product Category: <span className="text-warning">{data.cat_Id}</span></strong>
                                <h5 className="text-left mx-5 px-4 mb-4">Product Description:</h5>
                                <p className='text-left mx-5 px-4 text-capitalize'>{data.description}</p>
                                <div class='d-flex justify-content-between mt-5 px-5 mx-4'>
                                    <Link to="/all-product" className='btn btn-primary px-4'><i className="fa fa-arrow-left mr-1"></i>GoBack</Link>
                                    <Link to="/cart"><button type='submit' className='btn btn-primary'>Add to Cart<i className="fa fa-arrow-right ml-1"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default withRouter(Product_Detail);