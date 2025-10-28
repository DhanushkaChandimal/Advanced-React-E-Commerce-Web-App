import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface CheckoutSuccessModalProps {
    show: boolean;
    orderDetails: {
        orderNumber: string;
        totalItems: number;
        totalAmount: number;
    };
    onClose: () => void;
}

const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
    show,
    orderDetails,
    onClose
}) => {
    return (
        <Modal show={show} onHide={onClose} centered size="lg">
            <Modal.Header className="bg-success text-white border-0">
                <Modal.Title className="w-100 text-center">
                    <div className="mb-2">
                        <span style={{ fontSize: '3rem' }}>✅</span>
                    </div>
                    Order Successful!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center py-4">
                <h5 className="mb-3">Thank you for your purchase!</h5>
                <div className="bg-light p-3 rounded mb-3">
                    <p className="mb-1"><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
                    <p className="mb-1"><strong>Items Purchased:</strong> {orderDetails.totalItems}</p>
                    <p className="mb-0"><strong>Total Amount:</strong> ${orderDetails.totalAmount.toFixed(2)}</p>
                </div>
                <p className="text-muted mb-0">
                    Your order has been processed successfully. You will receive a confirmation email shortly.
                </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center border-0">
                <Button variant="success" onClick={onClose} size="lg">
                    Back to Home
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CheckoutSuccessModal;