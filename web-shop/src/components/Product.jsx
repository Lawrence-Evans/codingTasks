import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ColorDropdown from "./ColorDropdown";

// Product const expects values and returns them in Card
const Product = ({ title, description, image, price, addPrice }) => {
  return (
    <Card style={{ width: "18rem" }} >
      {/* Added height styling to deal with standard sized images */}
      <Card.Img variant="top" src={image} style={{ height: "130px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* onClick runs addPrice which adds this items price to totalPrice. */}
        {/* For addPrice to access {price} the Button element must have price=value */}
        <Button onClick={addPrice} value={price} variant="primary">
          Buy £{price}
        </Button>
        <ColorDropdown />
      </Card.Body>
    </Card>
  );
};

export default Product;
