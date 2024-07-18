import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/auth/auth.jsx";
import HomePage from "./pages/home-page/home-page.jsx";
import Adminpage from "./pages/admin-page/admin-page.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<Adminpage />} />
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/services" element={<Services />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </>
  )
}

export default App
