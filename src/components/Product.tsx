import Card from "react-bootstrap/Card";

interface Product {
   id: number,
   title: string,
   price: number,
   description: string,
   category: string,
   rate: number,
   image: string
}

const dummyProduct: Product = {
   id: 1,
   title: "Product 1",
   price: 22.95,
   description: "Description of product 1",
   category: "Clothing",
   rate: 3.95,
   image: "https://placehold.co/600x400"
}

const Product = () => {

    return (
        <Card>
            <Card.Img variant="top" src={dummyProduct.image} className="p-2"/>
            <Card.Body>
                <Card.Title>${dummyProduct.price}</Card.Title>
                <Card.Title className="title">{dummyProduct.title}</Card.Title>
                <Card.Text className="description">{dummyProduct.description}</Card.Text>
            </Card.Body>
        </Card>
  );
}

export default Product