import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/auth/auth.jsx";
import HomePage from "./pages/home-page/home-page.jsx";
import AdminPage from "./pages/admin-page/admin-page.jsx";
import CustomNavbar from "./components/navbar/customNavbar.jsx";
import FoodItemPage from "./pages/food-item-page/food-item-page.jsx";
import FoodItemAdd from "./pages/food-item-page/food-item-add/FoodItemAdd.jsx";
import FoodMenu from "./pages/food-menu/food-menu.jsx";

function App() {
  const path = window.location.pathname;
  const isAdmin = !(path.includes('/admin')) ;
  return (
    <div className={"bg-body-tertiary"}>
      { !([ '/', '/login', '/register'].includes(path)) && <CustomNavbar isAdmin={isAdmin}/>}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/admin">
          <Route path="" element={<AdminPage />} />
          <Route path="dashboard" element={<AdminPage />} />
          <Route path="foodItems" element={<FoodItemPage/>} />
          <Route path="foodItems/add" element={<FoodItemAdd/>} />
        </Route>
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/services" element={<Services />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </div>
  )
}

export default App
