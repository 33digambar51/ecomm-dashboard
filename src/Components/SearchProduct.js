import { useState } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
function SearchProduct() {

    const [searchData, setSearchData] = useState([]);
    const [noData, setNoData] = useState(false);
    const [print, setPrint] = useState(false);

    // async function search(key) {
    //     if (key.length > 1) {
    //         let result = await fetch("http://localhost:8000/list/" + key);
    //         result = await result.json();
    //         console.warn(result);
    //         //pass result
    //         setData(result);
    //     }
    // }

    // fetch API url and Get Data from API

    // function printData() {
    //     if (!()) {
    //         alert("Oops ! Please Enter Product name");
    //         setPrint(false);
    //     }
    //     else{
    //         setPrint(true)
    //     }
    // }

    function search(key) {
        // if (!(key)) {
        //     alert("Oops ! Please Enter Product name");
        //     setPrint(false);
        //     console.log(key);
        // }

        // let resp = await fetch("http://localhost:8000/list?q=" + key);
        // resp = await resp.json();
        console.log(key);
        //setPrint(true);
        fetch("http://localhost:8000/list?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.log("Search Resp:", resp)
                if (resp.length > 0) {
                    setSearchData(resp)
                    setNoData(false)
                    setPrint(false)
                }
                else {
                    setSearchData([])
                    setNoData(true)
                    setPrint(false)
                }
            })
        })
    }


    return (
        <>
            <Header/>
            <section className="py-5">
                <div className="col-sm-8 offset-sm-2 py-5 mb-3">
                    <h2 className="text-center mb-4">Search Product !</h2>
                    <div className="d-flex justify-content-center mb-4">
                        <input type="text" onChange={(e) => search(e.target.value)} className="form-control w-100" required placeholder="Search Product" />
                        <button onClick={() => setPrint(true)} class="btn btn-primary btn-sm" type="submit">Search</button>
                    </div>
                    <div className="table-responsive pro_list">
                        {
                            searchData && print ?
                                <table class="table table-bordered table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            searchData.map((item, id) =>
                                                <tr key={id}>
                                                    <td>{item.id}</td>
                                                    <td className="text-capitalize">{item.name}</td>
                                                    {/* <td><img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /></td> */}
                                                    <td><Link to={"product_detail/" + item.id}><img src="/images/img1.jpg" style={{ width: 80, height: 50 }} /></Link></td>
                                                    <td>{item.price}</td>
                                                    <td className="text-capitalize">{item.description}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                : null
                        }
                        {
                            noData && print ? <h5 className="text-center d-block mt-5">Oops ! No Data Found</h5> : null
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
export default SearchProduct;