import React, { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const { cardItems, food_list, removeFromCart, getTotalCardAmount } = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <div>
            <div className="card">
                <div className="card-items">
                    <div className="card-items-title">
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {food_list.map((item) => {
                        if (cardItems[item._id] > 0) {
                            return (
                                <div>
                                    <div className="card-items-title card-items-item">
                                        <img src={item.image} alt='' />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cardItems[item._id]}</p>
                                        <p>${item.price * cardItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="card-bottom">
                    <div className="card-total">
                        <h2>Card Total</h2>
                        <div>
                            <div className="card-total-details">
                                <p>Subtotal</p>
                                <p>${getTotalCardAmount()}</p>
                            </div>
                            <hr />
                            <div className="card-total-details">
                                <p>Delivery Fee</p>
                                <p>${getTotalCardAmount() === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="card-total-details">
                                <b>Total</b>
                                <b>${getTotalCardAmount() === 0 ? 0 : getTotalCardAmount() + 2}</b>
                            </div>
                        </div>
                        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="card-promocode">
                        <div>
                            <p>If you have a promo code, Enterit here</p>
                            <div className="card-promocode-input">
                                <input type="text" placeholder='promo-code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
