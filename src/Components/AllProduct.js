import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

//Pagination
import Pagination from "./Pagination";

export const AllProduct = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    console.warn("Data is:", data);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/list");
        result = await result.json();
        setData(result);
    }
    //pagination 
    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({ start: 0, end: showPerPage });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    return (
        <>
            <Header />
            <section className="py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <h2>Our Product !</h2>
                            <p>Some example text some example text. John Doe is an architect and engineer </p>
                        </div>
                    </div>

                    <div className="row">
                        {
                            data.slice(pagination.start, pagination.end).map((item, id) =>
                                <div className="col-md-4" key={id}>
                                    <div className="mb-3">
                                        <div className="card shadow">
                                            {/* <img src={"http://localhost:8000/" + item.file_path} className="card-img-top" alt="image"/> */}
                                            <img src={"images/img2.jpg"} className="card-img-top" alt="image" />
                                            <div className="card-body">
                                                <h5 className="card-title text-capitalize">{item.name}</h5>
                                                <h6 className="card-title mb-0">Price: <strong className="text-primary">${item.price}</strong></h6>
                                                {/* <p className="card-text">{item.description}</p> */}
                                                <strong className="mb-4 d-block">Quantity: <span className="text-warning">{item.quantity}</span></strong>
                                                <div className="d-flex justify-content-between">
                                                    <Link to={"product_detail/" + item.id} className="btn btn-primary btn-sm">Details</Link>
                                                    <Link to="/cart" className="btn btn-primary btn-sm">Add to card</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* <div className="col-md-4">
                                <div className="">
                                    <div className="card shadow">
                                        <img src={"images/img2.jpg"} className="card-img-top" alt="image" />
                                        <div className="card-body">
                                            <h5 className="card-title">Sony Laptop</h5>
                                            <h6 className="card-title">Price: 45000</h6>
                                            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                            <div className="d-flex justify-content-between">
                                                <Link to="product_detail">Details</Link>
                                                <Link to="/cart" className="btn btn-primary btn-sm">Add to card</Link>
                                                Some example text some example text. John Doe is an architect and engineer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-12 my-4">
                            <Pagination
                                showPerPage={showPerPage}
                                onPaginationChange={onPaginationChange}
                                total={data.length}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}