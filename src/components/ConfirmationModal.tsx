import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ConfirmationModalProps {
    show: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    show,
    title,
    message,
    onConfirm,
    onCancel
}) => {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="mb-0">{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;