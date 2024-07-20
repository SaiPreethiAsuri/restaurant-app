import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/auth/auth.jsx";
import HomePage from "./pages/home-page/home-page.jsx";
import Adminpage from "./pages/admin-page/admin-page.jsx";
import CustomNavbar from "./components/navbar/customNavbar.jsx";
import FoodItemPage from "./pages/food-item-page/food-item-page.jsx";
import FoodItemAdd from "./pages/food-item-page/food-item-add/FoodItemAdd.jsx";

function App() {
  const isAdmin = !(window.location.href.includes('/admin')) ;
  return (
    <>
      <CustomNavbar isAdmin={isAdmin}/>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin">
          <Route path="dashboard" element={<Adminpage />} />
          <Route path="foodItems" element={<FoodItemPage/>} />
          <Route path="foodItems/add" element={<FoodItemAdd/>} />
        </Route>
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/services" element={<Services />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </>
  )
}

export default App
