import { useState, useEffect } from "react";
import Header from "./Header";
import TodoList2 from "./TodoList2";

function TodoList() {
    const [data, setData] = useState("");
    //For store Data
    const [list, setList] = useState(getLocalList());
    //For Update btn
    const [toggle, setToggle] = useState(false);
    //edit item
    const [edit, setEdit] = useState(null);



    function formHandle(e) {
        e.preventDefault();
        //console.warn(data);
        if (!data) {
            alert("Oops ! Please fill the Data");
            setList([]);
        }
        else if (data && toggle) {
            setList(
                list.map((item) => {
                    if (item.id === edit) {
                        //alert("Both id same")
                        return { ...item, name: data }
                    }
                    return item;
                })
            )
            setToggle(false);
            setData("");
            setEdit(null);
        }
        else {
            const inputData = { id: new Date().getTime().toString(), name: data };
            setList([...list, inputData]);
            setData("");
        }
    }
    function getData(e) {
        //input data
        let dt = (e.target.value);
        setData(dt);
    }
    // Store data to localstorage
    useEffect(() => {
        localStorage.setItem("user-list", JSON.stringify(list))
    }, [list]);

    //Get data from local storage
    function getLocalList() {
        let ulist = localStorage.getItem("user-list");
        console.log(ulist);
        if (ulist) {
            return JSON.parse(localStorage.getItem("user-list"));
        }
        else {
            return [];
        }

    }
    function deleteList(id) {
        //alert(id);
        //filter data
        const deleteItem = list.filter((item) => {
            return item.id !== id;
        });
        setList(deleteItem);
    }

    function editList(id) {
        //alert(id);
        let editItem = list.find((item) => {
            return item.id === id;
        });
        console.warn(editItem);
        setToggle(true);
        setData(editItem.name);
        //pass id
        setEdit(id);
    }


    return (
        <>
            <Header />
            <section className="py-5">
                <div className="col-sm-6 offset-sm-3 py-5 card-box">
                    <form onSubmit={formHandle}>
                        <h2 className="text-center mb-4">To Do List !</h2>
                        <div classNamek="form-group">
                            <input type="text" value={data} onChange={getData} className="form-control" placeholder="Enter text*" />
                        </div>
                        <div className="text-center mt-3">
                            {toggle ? <button type="submit" className="btn btn-primary"><i className="fa fa-twitter mr-1"></i>Update List</button> : <button type="submit" className="btn btn-primary"><i className="fa fa-twitter mr-1"></i>Create List</button>}
                        </div>
                    </form>
                    <ul>
                        {
                            list.map((item, id) =>
                                // <li key={item.id} className="d-flex my-3 justify-content-between">
                                //     <span>{item.id} {item.name}</span>
                                //     <span>
                                //         <button onClick={() => editList(item.id)} className="btn btn-primary btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                //         <button onClick={() => deleteList(item.id)} className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                                //     </span>
                                // </li>

                                // For Send Data to Child Component
                                <TodoList2 key={id} index={id} list={item} onSelect={() => deleteList(item.id)} onEdit={() => editList(item.id)} />
                            )
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}
export default TodoList;