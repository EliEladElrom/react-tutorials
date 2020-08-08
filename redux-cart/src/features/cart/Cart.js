// src/features/cart/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create } from "./cartSlice";
import styles from './Cart.module.css';

export function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const cartItemSubmitEventHandler = (e, cartItemName) => {
        e.preventDefault();
        dispatch(create(cartItemName));
    }

    return (
        <div>
            <div className={styles["row-left"]}>
                <button
                    className={styles.button}
                    onClick={event => cartItemSubmitEventHandler(event, 'React ebook')}
                >
                    Add React eBook to Cart
                </button>

                <button
                    className={styles.button}
                    onClick={event => cartItemSubmitEventHandler(event, 'React book')}
                >
                    Add React Book to Cart
                </button>
            </div>
            <div className={styles["row-right"]}>
                <h1>Cart</h1>
                <p>{cart.name}</p>
                {cart.map(cart => (
                    <div>
                        {cart.id}: {cart.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
