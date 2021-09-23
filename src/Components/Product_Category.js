import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
//import Data from "./Data";

const Product_Category = () => {
    //const [items, setItem] = useState(Data);

    // Get Product list
    const [list, setList] = useState([]);

    useEffect(() => {
        getList();
    }, [])
    console.warn("List is:", list);

    // fetch API url and Get Data from API
    async function getList() {
        let result = await fetch("http://localhost:8000/list");
        result = await result.json();
        setList(result);
    }

    // Get All Cagegory value fetch from APi
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    console.warn("Cat is:", data);
    // Now set cat
    //const [catItems, setCatItems] = useState(dAllata);

    // fetch API url and Get Data from API
    async function getData() {
        let result = await fetch("http://localhost:8000/cat");
        result = await result.json();
        setData(result);
    }
    //filter item
    const filterItem = (data) => {
        console.log("Filter Cat", data);
        if (data == "All") {
            alert("Yes")
            setList(list);
            return;
        }
        const updateItems = list.filter((pro) => {
            // if (category.cat_Id == data.id) {
            //     alert(data.id)
            // }
            return pro.cat_Id == data.id;
        });
        console.log("Curnt Cat", updateItems);
        setList(updateItems);
    }
    // const allCatValues = Data.map((qt) => {

    return (
        <>
            <Header />
            <section className="py-5 porfoio-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Products Category !</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-5 text-center">
                                {/* Nav pills */}
                                <ul class="nav nav-pills justify-content-center">
                                    {/* <li class="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#p1">React</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#p2">JS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#p3">Bootstrap</a>
                                    </li> */}

                                    {/* Dynamicly show menu link */}

                                    {/* <li class="nav-item">
                                        <Link onClick={() => setItem(Data)} className="nav-link active" data-toggle="pill" >All</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link onClick={() => filterItem("breacfast")} className="nav-link" data-toggle="pill" >Breacfast</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link onClick={() => filterItem("lunch")} className="nav-link" data-toggle="pill" >Lunch</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link onClick={() => filterItem("dinner")} className="nav-link" data-toggle="pill" >Dinner</Link>
                                    </li> */}

                                    {/* Now wil use only one link and other will be comes to the dynamicallly*/}

                                    {
                                        data.map((cat, index) => {
                                            return (
                                                <>
                                                    <li class="nav-item text-capitalize" key={index}>
                                                        <Link onClick={() => filterItem(cat)} key={index} className={`nav-link ${index === 0 ? "active" : null}`} data-toggle="pill" >{cat.name}</Link>
                                                    </li>
                                                </>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Tab content */}
                    <div className="tab-content">
                        <div className="tab-pane active">
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="row mx-0 shadow pl-0 pr-2 item-inside">
                                        <div className="col-md-4 p-0">
                                            <div className="">
                                                <img src={ "images/portfolio/p1.jpg" } alt="p-image" className="img-fluid w-100" style={{height: 184}}/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-8 p-0 pl-2 py-2">
                                            <div className="item-cont">
                                                <h5 className="text-dark">Magi</h5>
                                                <p className="mb-1 text-dark">Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua</p>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <p className="mb-0 mt-2 text-dark">Price: 50$</p>
                                                    <button className="btn btn-info btn-sm">Order Now</button>
                                                </div>
                                                <p className="mb-0 text-dark">Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {
                                    list.map((item, i) => {
                                        const { id, name, image, description, price, quantity, color } = item;
                                        return (
                                            <div className="col-md-6" key={i}>
                                                <div className="row mx-0 rounded shadow pl-0 pr-2 mb-4 item-inside">
                                                    <div className="col-md-4 p-0">
                                                        <div className="">
                                                            {/* <img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /> */}
                                                            <img src="/images/img1.jpg" alt={name} className="img-fluid w-100" style={{ height: 184 }} />
                                                        </div>
                                                    </div>
                                                    {/* item description */}
                                                    <div className="col-md-8 p-0 pl-2 py-2">
                                                        <div className="item-cont">
                                                            <h5 className="text-dark text-capitalize">{name}</h5>
                                                            <p className="mb-0 mt-2 text-dark">Price: {price}</p>
                                                            <p className="mb-0 mt-2 text-dark text-capitalize">Color: {color}</p>
                                                            <div className="d-flex justify-content-between mb-1">
                                                                <p className="mb-0 mt-2 text-dark">Quantity: {quantity}</p>
                                                                <button className="btn btn-info btn-sm">Order Now</button>
                                                            </div>
                                                            <p className="mb-0 text-dark">{description}</p>
                                                            {/* <p className="mb-0 text-dark">Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {/* <div class="tab-pane container fade" id="p2">p2</div> */}
                    </div>
                </div>
            </section>
        </>
    );

}
export default Product_Category;