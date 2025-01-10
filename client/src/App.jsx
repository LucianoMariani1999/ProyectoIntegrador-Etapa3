import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./getuser/User.jsx";
import Pagenotfound from "./pages/Pagenotfound.js";
import Register from "./adduser/addUser.jsx";
import Updateuser from "./updateuser/updateuser.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ProductList } from "./components/ItemList.jsx";
import { ShoppingCart} from "./components/ShoppingCart.jsx";
import { ShoppingCartProvider } from "./components/ShoppingCartContext.jsx";

export const App = () => {

  return (
    <ShoppingCartProvider>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/updateuser/:id" element={<Updateuser/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
      </Router>
    </ShoppingCartProvider>
  );
};

