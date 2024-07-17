import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/auth/auth.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
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
