import "../styles/cart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type React from "react";
import type { Item } from "../types/types";

const CartItem: React.FC<Item> = (product: Item ) => {

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between pe-3 cart-item">
            <Card.Body className="d-flex align-items-center gap-4">
                <Card.Img variant="top" src={product.image} className="cart-image"/>
                <Card.Text>{product.title}</Card.Text>
            </Card.Body>
            <Card.Title className="me-2">${product.price}</Card.Title>
            <Button className="ms-auto">Remove</Button>
        </Card>
  );
}

export default CartItem