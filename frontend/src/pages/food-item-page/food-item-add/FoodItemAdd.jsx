import {Button, Form} from "react-bootstrap";
import { useState } from "react";
import { addFoodItem } from "../../../utils/apis/food-dataprovider";

export const FoodItemAdd = () => {
  const [foodItem,setFoodItem]=useState({name:"",description:"",price:""})
  const [foodImage,setFoodImage]=useState();

  const handleChange=(event)=>{
    if(event.target.name=="image"){
      const files=event.target.files[0]
      setFoodImage(files)
    }
    else{
    setFoodItem({...foodItem,[event.target.name]:event.target.value})
    }
  }
  const addFood=(e)=>{
    e.preventDefault();
    console.log(foodImage[0])
    const foodData=new FormData();
    // const foodData={
    //   name:foodItem.name,
    //   description:foodItem.description,
    //   price:foodItem.price
    // }
    foodData.append('name',foodItem.name)
    foodData.append('description',foodItem.description)
    foodData.append('price',foodItem.price)
    foodData.append('image',foodImage)
    addFoodItem('/foodItem/create',foodData).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
  }
  return (
    <>
      <h1>Food Item Add</h1>
    {/*  Form to Add Food having name, image, category, price using React Bootstrap */}
      <Form onSubmit={addFood}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Name</Form.Label>
          <Form.Control name="name" value={foodItem.name} type="text" placeholder="Enter Food Name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Image</Form.Label>
          <Form.Control name="image" type="file" accept="image/*" placeholder="Enter Food Image" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Category</Form.Label>
          <Form.Control name="description" value={foodItem.description} type="text" placeholder="Enter Food Category" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Food Price</Form.Label>
          <Form.Control name="price" value={foodItem.price} type="number" placeholder="Enter Food Price" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Food
        </Button>
      </Form>
    </>
  )
};

export default FoodItemAdd;
