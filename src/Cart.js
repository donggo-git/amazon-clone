import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal'

function Cart({ cartItems }) {
    const getTotalPrice = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += (item.product.Price * item.product.quantity);
        })
        return total;
    }
    const getTotalCount = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += item.product.quantity;
        })
        return total;
    }
    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal getTotalPrice={getTotalPrice} getTotalCount={getTotalCount} />
        </Container>
    )
}

const Container = styled.div`
display:flex;
padding:14px 18px 0 18px;
align-items: flex-start;
`;
export default Cart
