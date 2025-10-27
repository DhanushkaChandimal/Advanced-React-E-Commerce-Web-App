import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import type { RootState } from '../redux/store';
import CartItem from './CartItem';

const Cart = () => {
    const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
    
    const TAX_RATE = 0.10;
    const taxAmount = totalPrice * TAX_RATE;
    const finalAmount = totalPrice + taxAmount;

    return (
        <Container className="py-4">
            <h2 className="text-center mb-4">Your Cart</h2>
            {items.length === 0 ? (
                <div className="text-center">
                    <p className="text-muted">No items in cart</p>
                </div>
            ) : (
                <Row>
                    <Col lg={8}>
                        <div className="d-flex flex-column gap-3">
                            {items.map((item) => (
                                <CartItem key={item.id} {...item}/>
                            ))}
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Header>
                                <h5 className="mb-0">Order Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Total Items:</span>
                                    <span className="fw-bold">{totalItems}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax (10%):</span>
                                    <span>${taxAmount.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="fw-bold">Total Amount:</span>
                                    <span className="fw-bold text-primary fs-5">${finalAmount.toFixed(2)}</span>
                                </div>
                                <div className="d-grid">
                                    <Button variant="success" size="lg">
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Cart;
