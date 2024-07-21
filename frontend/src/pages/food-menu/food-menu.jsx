import './food-menu.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom";

const FoodMenu = () => {
  return (
    <>
      <Container className="text-center bg-body-tertiary d-flex flex-column align-items-center pb-5">
        <Row className={"pb-2"}>
          <Col>
            <h2>Categories</h2>
          </Col>
        </Row>
        <Row className={'px-5 pb-5'} style={{maxWidth: "1380px"}}>
          <CategoryList/>
        </Row>
        <Row className={"pb-2"}>
          <FoodCard/>
        </Row>
      </Container>
      <Container className='bg-body-tertiary text-center'>
        <Row>
          <Col className='text-center'>
            <div className='hero-description fs-6'>
              <span>&copy; 2024 Food Delivery. All rights reserved.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const CategoryList = () => {
  const categories = [
    {name: "Cake", image: "src/assets/images/category_items/cake.png"},
    {name: "Dessert", image: "src/assets/images/category_items/deserts.png"},
    {name: "Noodles", image: "src/assets/images/category_items/noodles.png"},
    {name: "Pasta", image: "src/assets/images/category_items/pasta.png"},
    {name: "Pure Veg", image: "src/assets/images/category_items/pure_veg.png"},
    {name: "Rolls", image: "src/assets/images/category_items/rolls.png"},
    {name: "Salad", image: "src/assets/images/category_items/salad.png"},
    {name: "Sandwich", image: "src/assets/images/category_items/sandwich.png"},
  ];
  return (
    <>
      {categories.map((category, index) => {
        return (
          <Col key={index} className='text-center'>
            <Link to={`/foodMenu?cat=${category.name}`} className={'category text-decoration-none text-dark'}>
              <img src={category.image} alt="food" className="img-fluid mt-5"/>
              <p className='category-title'>{category.name}</p>
            </Link>
          </Col>
        );
      })}
    </>
  );
}

const FoodCard = () => {
  return (
    <>
      <Col sm={3} className={"pb-5"}>
        <Card style={{width: '17rem'}}>
          <Card.Img variant="top" src="https://placehold.co/600x400"/>

          <Button variant="outline-danger" className={"itemCard px-2 pt-0 fs-5 rounded-circle position-absolute"}>
            <AiOutlineShoppingCart/>
          </Button>
          <Card.Body className="text-start">
            <Card.Title>Food Item 1</Card.Title>
            <Card.Text>
              Description of Food Item 1
            </Card.Text>
            <div className="d-flex justify-content-between">
              <span>$10.00</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default FoodMenu;
