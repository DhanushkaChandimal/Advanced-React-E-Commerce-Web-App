import "../styles/cart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type React from "react";
import type { CartItem as CartItemType } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../redux/cartSlice";

const CartItem: React.FC<CartItemType> = (product: CartItemType) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
        }
    };

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between pe-3 cart-item">
            <Card.Body className="d-flex align-items-center gap-4">
                <Card.Img variant="top" src={product.image} className="cart-image"/>
                <Card.Text>{product.title}</Card.Text>
            </Card.Body>
            <Card.Title className="me-2">${(product.price * product.quantity).toFixed(2)}</Card.Title>
            <div className="d-flex align-items-center border rounded-pill overflow-hidden">
                <Button 
                    variant="light" 
                    size="sm"
                    className="border-0 rounded-0 px-3"
                    onClick={() => handleQuantityChange(product.quantity - 1)}
                >
                    −
                </Button>
                <span className="fw-bold px-3 bg-light text-center" style={{minWidth: '50px'}}>{product.quantity}</span>
                <Button 
                    variant="light" 
                    size="sm"
                    className="border-0 rounded-0 px-3"
                    onClick={() => handleQuantityChange(product.quantity + 1)}
                >
                    +
                </Button>
            </div>
        </Card>
  );
}

export default CartItem