import '../styles/home-page.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import type { Item } from "../types/types";

const HomePage = () => {
    const navigate = useNavigate();
    const { data: products, isLoading, error } = useProducts();

    const featuredProducts = products?.slice(0, 3);

    const goToProducts = () => {
        navigate("/products");
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-shopping.jpg" alt="First slide"/>
                    <Carousel.Caption className='text-primary'>
                        <h2>Welcome to Our Store</h2>
                        <p>Discover the latest trends and best deals</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-clothing.jpg" alt="Second slide" />
                    <Carousel.Caption>
                        <h2>Style <span style={{color: "black"}}>Mee<span style={{color: "white"}}>ts</span></span> Comfort</h2>
                        <p>Handpicked fashion collections just for you</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="../hero-electronics.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h2><span style={{backgroundColor: "white", color: "black"}}>S</span>mart Choices</h2>
                        <p className='text-dark'>Latest gadg<span style={{color: "white"}}>ets at unbeatable p</span>rices</p>
                        <Button variant="light" size="lg" onClick={goToProducts}>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                {isLoading ? (
                    <div className="text-center">
                        <p>Loading featured products...</p>
                    </div>
                ) : error ? (
                    <div className="text-center">
                        <p className="text-danger">Failed to load featured products</p>
                    </div>
                ) : (
                    <Row>
                        {featuredProducts?.map((product: Item) => (
                            <Col key={product.id} className="mb-4">
                                <Card className="shadow-sm h-100">
                                    <Card.Img 
                                        variant="top" 
                                        src={product.image} 
                                        alt={product.title}
                                        className='product-image'
                                    />
                                    <Card.Body className="text-center d-flex flex-column">
                                        <Card.Title className="mb-2 title">
                                            {product.title}
                                        </Card.Title>
                                        <div className="mb-2">
                                            <span className="text-warning me-1">⭐</span>
                                            <small>{product.rating.rate.toFixed(1)}</small>
                                        </div>
                                        <div className="mb-3">
                                            <strong className="text-primary">${product.price.toFixed(2)}</strong>
                                        </div>
                                        <Button variant="primary" className="mt-auto" onClick={goToProducts}>View More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default HomePage