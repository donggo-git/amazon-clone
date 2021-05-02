import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemContainer>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item.product}
                    />
                ))}

            </ItemContainer>
        </Container>
    )
}

const Container = styled.div`
height:300px;
background-color:white;
flex:0.8;
margin-right:18px;
padding:20px
`;
const Title = styled.h1`
margin-bottom:8px;
`;
const ItemContainer = styled.div`

`;
export default CartItems
