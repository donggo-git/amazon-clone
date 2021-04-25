import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal'

function Cart() {
    return (
        <Container>
            <CartItems />
            <CartTotal />
        </Container>
    )
}

const Container = styled.div`
display:flex;
padding:14px 18px 0 18px;
`;
export default Cart
