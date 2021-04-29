import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>
            <ImageContainer>
                <img src={""} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2></h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>5</CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                $1449
            </CartItemPrice>
        </Container>
    )
}
const Container = styled.div``;
const ImageContainer = styled.div`
    width:180px;
    height:180px;
    img{
        object-fit:contain;
        
    }
`;
const CartItemInfo = styled.div``;
const CartItemInfoTop = styled.div``;
const CartItemInfoBottom = styled.div``;
const CartItemQuantityContainer = styled.div``;
const CartItemDeleteContainer = styled.div``;
const CartItemPrice = styled.div``;
export default CartItem
