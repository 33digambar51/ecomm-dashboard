function TodoList2({list, onEdit, onSelect}) {
    //console.log(props); => Recieve Props by Destrucchring
    return (
        <>
            <li key={list.id} className="d-flex my-3 justify-content-between">
                <span>{list.id} {list.name}</span>
                <span>
                    <button onClick={() => onEdit(list.id)} className="btn btn-primary btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                    <button onClick={() => onSelect(list.id)} className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                </span>
            </li>
        </>
    );
}
export default TodoList2;








// import { useState, useEffect } from "react";
// import Header from "./Header";
// import Home from './Home';
// function TodoList2() {
//     const [data, setData] = useState(null);
//     //For store Data
//     const [list, setList] = useState(getLocalList());
//     //For Update btn
//     const [toggle, setToggle] = useState(true);
//     //edit item
//     const [edit, setEdit] = useState(null);

//     // Add data to localstorage
//     useEffect(()=>{
//         localStorage.setItem('user-list', JSON.stringify(list))
//     },[list]);
    
//     //Get data from local storage
//     function getLocalList() {
//         let ulist = localStorage.getItem('user-list');
//         console.warn(ulist);
//         if(ulist){
//             return JSON.parse(localStorage.getItem('user-list'));
//         }
//         else{
//             return [];
//         }

//     }


//     function formHandle(e) {
//         e.preventDefault();
//         //console.warn(data);
//         if (!data) {
//             alert("Fill Data");
//             //setList([]);
//         }

//         else if(data && !toggle){
//             setList(
//                 list.map((item, index)=>{
//                     if(index === edit){
//                         alert("Hang hai")
//                         return{...item, name: data}
//                     }
//                     return item;
//                 })
//             )
            
//         }
//         else {
//             // setList
//             // setList((oldData) => {
//             //     return [...oldData, data];
//             // })
//             // setData("");

//             //method-2
//             const inputData = {id: new Date().getTime().toString(), name: data};
//             setList([...list, inputData]);
//             setData("");
//         }
//     }

//     function getData(e) {
//         //input data
//         let name = (e.target.value);
//         setData(name);
//     }

//     function deleteList(id) {
//         alert(id);
//         setList((oldData) => {
//             console.warn(oldData)
//             //filter data
//             return oldData.filter((item) => {
//                 return item.id !== id;
//             })
//         });
//     }

//     function editList(id) {
//         alert(id);
//         let editItem = list.find((item, index) => {
//             return index === id;
//         });
//         console.warn(editItem);
//         setToggle(false);
//         setData(editItem);
//         setEdit(id);
//     }
//     return (
//         <>
//             <Header />
//             <div className="col-sm-6 offset-sm-3">

//                 <form onSubmit={formHandle}>
//                     <h2 className="text-center mb-4">To Do List !</h2>
//                     <div className="form-group">
//                         <input type="text" value={data} onChange={getData} className="form-control" placeholder="Enter text*" />
//                     </div>
//                     <div className="text-center mt-3">
//                         {/* <button type="submit" className="btn btn-primary">Create List</button> */}
//                         {toggle ?  <button type="submit" className="btn btn-primary">Create List</button>:<button type="submit" className="btn btn-primary">Update List</button>}
//                     </div>
//                 </form>
//                 <ul>
//                     {/* <li>{data}</li> */}
//                     {
//                         list.map((item) =>
//                             <li key={item.id} className="d-flex justify-content-beetween">
//                                 {item.id} {item}
//                                 <div>
//                                     <button onClick={() => editList(item.id)} className="btn btn-primary btn-sm mr-1">Edit</button>
//                                     <button onClick={() => deleteList(item.id)} className="btn btn-danger btn-sm">Delete</button>
//                                 </div>
//                             </li>
//                             //For child element
//                             // <Home key={id} index={id} list={item} onSelect={() => deleteList(id)} onEdit={() => editList(id)} />
//                         )
//                     }
//                 </ul>
//             </div>
//         </>
//     );
// }
// export default TodoList2;
