import './App.css';
// import Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Logout from './Components/Logout';
import { AllProduct } from "./Components/AllProduct";
import UserProfile from "./Components/UserProfile";
import Portfolio from "./Components/Portfolio";
import Product_Category from "./Components/Product_Category";
import Footer from "./Components/Footer";
import Setting from "./Components/Setting";
import Product_Detail from "./Components/Product_Detail";
import SearchProduct from "./Components/SearchProduct";
import Checkout from "./Components/Checkout";
import My_Orders from "./Components/My_Orders";
import TodoList from "./Components/TodoList";

// Admin Area file
import Alogin from "./Components/Admin/Alogin";
import Aregister from "./Components/Admin/Aregister";
import Index from './Components/Admin/Index';
import Add_Product from './Components/Admin/Add_Product';
import Product_List from "./Components/Admin/Product_List";
import Update_Product from "./Components/Admin/Update_Product";
import Admin_Profile from "./Components/Admin/Profile";
import Admin_Logout from "./Components/Admin/Logout";
import Add_Category from "./Components/Admin/Add_Category";
import Cat_List from "./Components/Admin/Cat_List";
import Update_Category from "./Components/Admin/Update_Category";
import Add_Brand from "./Components/Admin/Add_Brand";
import Brand_List from "./Components/Admin/Brand_List";
import Update_brand from "./Components/Admin/Update_brand";
import Users_List from './Components/Admin/users_list';
import Orders from "./Components/Admin/Orders";
import Payment from "./Components/Admin/Payment";
// import AdminHeader from "./Components/Admin/Admin-header";
// import LeftSidebar from "./Components/Admin/Left-Sidebar"


function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact={true}><Home /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/all-product"><AllProduct /></Route>
          <Route path="/logout"><Logout /></Route>
          <Route path="/profile/:id"><UserProfile /></Route>
          <Route path="/setting/:id"><Setting /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/categorys"><Product_Category/></Route>
          <Route path="/product_detail/:id"><Product_Detail/></Route>
          <Route path="/search_product"><SearchProduct/></Route>
          <Route path="/checkout"><Checkout/></Route>
          <Route path="/my_orders"><My_Orders/></Route>
          <Route path="/todo_list"><TodoList/></Route>

          {/* Admin routing start */}
          <Route path="/admin"><Alogin/></Route>
          <Route path="/aregister"><Aregister/></Route>
          <Route path="/index"><Index/></Route>
          <Route path="/add_product"><Add_Product/></Route>
          <Route path="/product_list"><Product_List/></Route>
          <Route path="/update_product/:id"><Update_Product/></Route>
          <Route path="/profilee/:id"><Admin_Profile/></Route>
          <Route path="/logoutt"><Admin_Logout/></Route>
          <Route path="/add_category"><Add_Category/></Route>
          <Route path="/cat_list"><Cat_List/></Route>
          <Route path="/add_brand"><Add_Brand/></Route>
          <Route path="/brand_list"><Brand_List/></Route>
          <Route path="/update_brand/:id"><Update_brand/></Route>
          <Route path="/update_category/:id"><Update_Category/></Route>
          <Route path="/users"><Users_List/></Route>
          <Route path="/orders"><Orders/></Route>
          <Route path="/payment"><Payment/></Route>

          {/* <Route path="/"><AdminHeader/></Route>
          <Route path="/"><LeftSidebar/></Route> */}
          <Route path="*"><PageNotFound /></Route>
        </Switch>
      </Router>
      <Footer />
      <Other />
    </>

  );

  function Other() {
    return (
      <>
        {/* <Router>
          <Route path="/admin"><Alogin /></Route>
        </Router> */}
      </>
    );
  }
}
export default App;
