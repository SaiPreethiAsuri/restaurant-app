import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setFoodItems([{
      id: 1,
      image: "https://via.placeholder.com/150",
      name: 'Salad',
      price: 100,
      category: 'Starter'
    }]);
  }, []);

  function handleEdit(id) {
    console.log("Edit", id);
  }

  function handleDelete(id) {
    console.log("Delete", id);
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Food Items</h1>
        <Link to="/admin/foodItems/add">
          <Button variant="primary">Add Food Item</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {/*Mapping through the foodItems array and displaying the details in the table */}
        {foodItems.map((foodItem) => (
          <tr key={foodItem.id}>
            <td>
              <img
                src={foodItem.image}
                alt={foodItem.name}
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>{foodItem.name}</td>
            <td>{foodItem.price}</td>
            <td>{foodItem.category}</td>
            <td>
              <Button
                variant="info"
                className="m-1"
                onClick={() => handleEdit(foodItem.id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="m-1"
                onClick={() => handleDelete(foodItem.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
};

export default FoodItemList;
