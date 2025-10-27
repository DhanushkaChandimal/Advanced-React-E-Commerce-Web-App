import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const AppNavbar = () => {
    const totalItems  = useSelector((state: RootState) => state.cart.totalItems);

    return (
        <div className='navbar-container'>
            <Navbar expand="lg" className="w-100">
                <Navbar.Brand href="/">DC Shop Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Nav.Link href="/cart" className='d-flex align-items-center ms-2 mt-1 bg-primary text-white rounded px-2'>
                <img src="../cart-icon.png" alt="Cart" className='cart-icon'/>
                Cart {totalItems}
            </Nav.Link>
        </div>
    );
}

export default AppNavbar;