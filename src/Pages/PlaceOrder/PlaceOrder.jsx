import React, { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../Context/storeContext';
const PlaceOrder = () => {
    const { getTotalCardAmount } = useContext(StoreContext)
    return (
        <div>
            <form className="place-order">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-field">
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <input type="text" placeholder='Email address' />
                    <input type="text" placeholder='street' />

                    <div className="multi-field">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-field">
                        <input type="text" placeholder='Zip code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='Phone' />
                </div>


                <div className="place-order-right">
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
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PlaceOrder;
