import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../helper/context/CartContext';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [itemExists, setItemExists] = useState(false); // Track if the item exists in cart
  const { setCartItemValue, cartItemValue } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from the API
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (itemExists) {
      alert('Item already exists');
      setItemExists(false);
    }
  }, [itemExists]);


  // Add to cart
  const addToCart = (item) => {
    const itemExistsInCart = cartItemValue.some(prevItem => prevItem.id === item.id);
    if (itemExistsInCart) {
      setItemExists(true); // Set the flag to trigger the alert
    } else {
      setCartItemValue((prev) => [...prev, item]); // Add item to cart
    }
  };

  return (
    <div className="body">
      <Container className="my-4">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate" title={product.title}>
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {product.description.length > 80
                      ? product.description.slice(0, 80) + '...'
                      : product.description}
                  </Card.Text>
                  <h5 className="mt-auto">${product.price}</h5>
                  <Button
                    variant="primary"
                    className="mt-3 cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
