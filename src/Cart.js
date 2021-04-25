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

`;
export default Cart
