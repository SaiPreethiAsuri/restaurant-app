import {Container, Form, Button, Card} from 'react-bootstrap';
import './login.css';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Container className='bg-image d-flex align-items-center min-vh-100 min-vw-100 bg-body-secondary'>
      <Card style={{marginLeft: '6%'}} className='w-25 h-50 pb-5 px-5 mb-5 rounded-4 bg-white'>
        <div className='w-100 text-center'>
          <img src="src/assets/images/foodKing.png" alt='login'/>
        </div>
        <div className='text-center mb-2 fw-semibold fs-5'>Welcome back!</div>
        <Form className='text-center'>
          <Form.Group className='mb-3' controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your Email"/>
          </Form.Group>
          <Form.Group className='mb-3' controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Button className={'w-75 mb-2'} variant="outline-danger" type="submit">
            Login
          </Button>
          <div className='mb-3'>
            <Link style={{textDecoration: 'none', fontSize: '0.9em'}} className='text-primary' to='/register'>Don&apos;t have an account?</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
