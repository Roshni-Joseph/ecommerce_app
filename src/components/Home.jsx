import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Container,Card, Button, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='body'>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/Home">MyStore</Navbar.Brand>
            <FaShoppingCart />
        </Container>
      </Navbar>
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
                  <Button variant="primary" className="mt-3">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home