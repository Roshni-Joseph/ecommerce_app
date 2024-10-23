import { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../helper/context/CartContext';


const Navbar1 = () => {
    const { cartItemValue } = useContext(CartContext)
    
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container >
                    <Navbar.Brand href="/Home">MyStore</Navbar.Brand>
                    <div style={{ position: "relative" }}>
                        <FaShoppingCart className='cursor-pointer' />
                        <div style={{
                            height: "20px", display: "flex", justifyContent: "center", alignItems: "center",
                            position: "absolute", backgroundColor: "red", color: "white", top: "-12px", left: "7px", padding: "5px"
                        }}>
                            {
                                cartItemValue?.length ? 
                                <p  style={{paddingTop: "13px"}}>
                                    {cartItemValue.length}
                                </p> :
                                    <p style={{paddingTop: "13px"}}>
                                        0
                                    </p>
                            }
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1