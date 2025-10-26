import type React from "react"
import { useState } from "react"
import Product from "./Product"
import type { Item } from "../types/types"
import { useProducts, useCategories, useCategory } from "../hooks/useProducts"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

const ProductList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { data: products, isLoading: productsLoading, error: productsError } = useProducts();
    const { data: categories, isLoading: categoriesLoading } = useCategories();
    const { data: categoryProducts} = useCategory(selectedCategory);

    const filteredProducts = selectedCategory 
        ? categoryProducts
        : products;

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    if (productsLoading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading products...</span>
                </Spinner>
            </Container>
        );
    }

    if (productsError) {
        return (
            <Container>
                <Alert variant="danger" className="text-center">
                    Error loading products. Please try again later.
                </Alert>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Products</h1>
                    
                    <Row className="mb-4">
                        <Col md={6} lg={4} className="mx-auto">
                            <Form.Group>
                                <Form.Label htmlFor="category-select" className="fw-semibold">
                                    Filter by Category:
                                </Form.Label>
                                <Form.Select
                                    id="category-select"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    disabled={categoriesLoading}
                                >
                                    <option value="">
                                        {categoriesLoading ? "Loading categories..." : "All Categories"}
                                    </option>
                                    {categories?.map((category) => (
                                        <option key={category} value={category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        {filteredProducts?.length === 0 ? (
                            <Alert variant="info" className="text-center w-100">
                                No products found in the selected category.
                            </Alert>
                        ) : (
                            filteredProducts?.map((item: Item) => (
                                <Product key={item.id} {...item} />
                            ))
                        )}
                    </div>

                    {filteredProducts && (
                        <div className="text-center mt-4">
                            <small className="text-muted">
                                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                                {selectedCategory && ` in "${selectedCategory}"`}
                            </small>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductList;