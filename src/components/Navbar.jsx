import { useContext ,useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../helper/context/CartContext';
import "./modal.css";


const Navbar1 = () => {
    const [modal,setModal] = useState(false);

    const { cartItemValue } = useContext(CartContext)
    console.log(cartItemValue)

    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container >
                    <Navbar.Brand href="/Home">MyStore</Navbar.Brand>
                    <div style={{ position: "relative" }}>
                        <FaShoppingCart type='button' onClick={toggleModal} className='btn-modal,cursor-pointer' />
                        
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
                    <div>
            
                    {modal && (
                        <div className='modal'>
                            <div className='overlay' onClick={toggleModal}></div>
                            <div className='modal-content'>
                            <h2>Your Cart</h2>
                            {cartItemValue && cartItemValue.length > 0 ? (
                                <div>
                                {cartItemValue.map((item) => (
                                    <div key={item.id} className="cart-item">
                                    <h4>{item.title}</h4>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    </div>
                                ))}
                                <button className='close-modal' onClick={toggleModal}>
                                    Close
                                </button>
                                </div>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                            </div>
                        </div>
                    )}
                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1 