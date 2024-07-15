import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path="/home" element={<Home />} />*/}
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/services" element={<Services />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </>
  )
}

export default App
