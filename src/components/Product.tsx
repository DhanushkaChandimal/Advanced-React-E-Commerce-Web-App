import type React from "react";
import type { Item } from "../types/types";
import "../styles/product.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Product: React.FC<Item> = (itemDetails: Item) => {
    const truncatedDescription = itemDetails.description.length > 120 
        ? itemDetails.description.substring(0, 120) + "..."
        : itemDetails.description;

    const truncatedTitle = itemDetails.title.length > 50
        ? itemDetails.title.substring(0, 50) + "..."
        : itemDetails.title;

    return (
        <Card className="h-100 shadow-sm product-card">
            <div className="product-image-container">
                <Card.Img 
                    variant="top" 
                    src={itemDetails.image} 
                    className="product-image"
                />
            </div>
            
            <Card.Body className="d-flex flex-column product-body">
                <div className="mb-2">
                    <Badge className="product-category-badge">
                        {itemDetails.category}
                    </Badge>
                </div>

                <Card.Title className="mb-2 product-title">
                    {truncatedTitle}
                </Card.Title>

                <Card.Text className="flex-grow-1 mb-3 product-description">
                    {truncatedDescription}
                </Card.Text>

                <Card.Text className="mb-0 product-price">
                    ${itemDetails.price.toFixed(2)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;