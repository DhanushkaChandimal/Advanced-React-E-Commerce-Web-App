import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const Cart = () => {
    const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);

    return (
        <div>
            <h1 className="text-center">Your Cart</h1>

            {items.length === 0 ? (
                <p className="text-center align-self-center">No items in cart</p>
            ) : (
                items.map((item) => (
                    <li key={item.id} className="list-group-item"></li>
                ))
            )}
        </div>
    );
};

export default Cart;
