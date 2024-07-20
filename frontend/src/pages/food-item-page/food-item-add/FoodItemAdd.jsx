import {Button, Form} from "react-bootstrap";

export const FoodItemAdd = () => {
  return (
    <>
      <h1>Food Item Add</h1>
    {/*  Form to Add Food having name, image, category, price using React Bootstrap */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Food Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Image</Form.Label>
          <Form.Control type="image" placeholder="Enter Food Image" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Food Category" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Food Price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Food
        </Button>
      </Form>
    </>
  )
};

export default FoodItemAdd;
