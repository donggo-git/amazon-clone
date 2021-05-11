import React from 'react'
import styled from 'styled-components'
function CartTotal({ getTotalPrice, getTotalCount }) {

    return (
        <Container>
            <Subtotal>Subtotal (${getTotalCount()}): ${getTotalPrice()}</Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

const Container = styled.div`
height:200px;
background-color:white;
flex:0.3;
padding 20px
`
const CheckoutButton = styled.button`
background-color:#f0c14b;
width:100%;
padding:4px 8px;
border:2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
:hover{
    background:#ddb347;
}
`
const Subtotal = styled.h2`
margin-bottom:16px;
`
export default CartTotal
