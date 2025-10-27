import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import CartItem from './CartItem';

const Cart = () => {
    const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);

    return (
        <div className="cart-container">
            <h2 className="text-center">Your Cart</h2>
            {items.length === 0 ? (
                <p className="text-center align-self-center">No items in cart</p>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {items.map((item) => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
