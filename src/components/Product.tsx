import type React from "react";
import Card from "react-bootstrap/Card";
import type { Item } from "../types/types";

const Product: React.FC<Item> = (itemDetails: Item) => {

    return (
        <Card>
            <Card.Img variant="top" src={itemDetails.image} className="p-2"/>
            <Card.Body>
                <Card.Title>${itemDetails.price}</Card.Title>
                <Card.Title className="title">{itemDetails.title}</Card.Title>
                <Card.Text className="description">{itemDetails.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;