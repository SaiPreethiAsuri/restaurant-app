import { Link } from 'react-router-dom';
import {Button, Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import './customNavbar.css';
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";

const CustomNavbar = () => {
  // Check if url pathName is not admin
  const isAdmin = window.location.pathname !== '/admin';
  // const userDetails = localStorage.getItem('userDetails');

  const userDetails = localStorage.getItem('userDetails');
  return (
    <Navbar bg="light" expand="lg" style={{maxWidth: '1900px'}}>
      <Container>
        <Navbar.Brand href="#home"><img style={{maxWidth: '150px'}} src={'src/assets/images/foodKing.png'} alt={'Brand Icon'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="me-auto centered-nav fs-5">
            { isAdmin &&
              <>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link ms-4 me-2" to="/login">Menu</Link>
                <Link className="nav-link me-4 ms-2" to="/login">About</Link>
                <Link className="nav-link" to="/login">Contact</Link>
              </>
            }
          </Nav>
          <Nav className={'w-25'}>
            { isAdmin && <Link className="nav-link fs-4" to="/cart"><AiOutlineShoppingCart/></Link>}
            {
              userDetails ?
                <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="nav-link fs-4">
                <AiOutlineUser />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push('/orders')}>Orders</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                  localStorage.removeItem('userDetails'); // Assuming this is how you handle logout
                  history.push('/login');
                }}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
                <Link className="nav-link mt-1" to="/login"><Button type='button' variant='outline-danger' className={'py-1 rounded-4'}>Sign In</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
