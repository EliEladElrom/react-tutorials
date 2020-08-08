// src/features/cart/cartSlice.js

import { createSlice } from '@reduxjs/toolkit'

let nextItemId = 0;

const cartSlice = createSlice({
    name: 'cart',
    // in case cart was saved items, will be here:
    initialState: [
        /*{
            id: 1,
            name: 'ebook'
        }*/
    ],
    // reducers actions
    reducers: {
        // create action
        create: {
            reducer(state, { payload }) {
                const { id, name: cartItemName } = payload
                state.push({ id, name: cartItemName })
            },
            prepare(cartItemName) {
                return {
                    payload: {
                        name: cartItemName,
                        id: nextItemId++
                    }
                }
            }
        }
    }
})

const { actions, reducer } = cartSlice

export const { create } = actions

export default reducer