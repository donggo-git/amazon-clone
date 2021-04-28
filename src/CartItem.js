import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>
            <ImageContainer>
                <img src={""} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop></CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity></CartItemQuantity>
                    <CartItemDeleteContainer></CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice></CartItemPrice>
        </Container>
    )
}
const Container = styled.div``;

export default CartItem
