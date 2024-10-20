import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Card, Button, Row, Col, Form } from 'react-bootstrap';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name,
            email,
            password
        }
        console.log('Form Data:', formData);

        localStorage.setItem("register_details", JSON.stringify(formData))

        const data = localStorage.getItem("register_details")
        if(name && email && password){
            navigate("/login")
        }
        else{
            alert('All fields are required');
        }
        console.log(data);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                <Card className="shadow-lg">
                    <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit} className="w-100">
                            Register
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>  
    )
}

export default Register